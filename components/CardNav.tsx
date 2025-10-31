//GLASS

// import React, { useLayoutEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { GoArrowUpRight } from 'react-icons/go';
// import GlassSurface from './GlassSurface';

// type CardNavLink = {
//   label: string;
//   href: string;
//   ariaLabel: string;
// };

// export type CardNavItem = {
//   label: string;
//   bgColor: string;
//   textColor: string;
//   links: CardNavLink[];
// };

// export interface CardNavProps {
//   logo: string;
//   logoAlt?: string;
//   items: CardNavItem[];
//   className?: string;
//   ease?: string;
//   baseColor?: string;
//   menuColor?: string;
//   buttonBgColor?: string;
//   buttonTextColor?: string;
// }

// const CardNav: React.FC<CardNavProps> = ({
//   logo,
//   logoAlt = 'Logo',
//   items,
//   className = '',
//   ease = 'power3.out',
//   baseColor = 'transparent',
//   menuColor = '#fff',
//   buttonBgColor,
//   buttonTextColor
// }) => {
//   const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const navRef = useRef<HTMLDivElement | null>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);
//   const tlRef = useRef<gsap.core.Timeline | null>(null);

//   const calculateHeight = () => {
//     const navEl = navRef.current;
//     if (!navEl) return 280;

//     const isMobile = window.matchMedia('(max-width: 768px)').matches;
//     if (isMobile) {
//       const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
//       if (contentEl) {
//         const wasVisible = contentEl.style.visibility;
//         const wasPointerEvents = contentEl.style.pointerEvents;
//         const wasPosition = contentEl.style.position;
//         const wasHeight = contentEl.style.height;

//         contentEl.style.visibility = 'visible';
//         contentEl.style.pointerEvents = 'auto';
//         contentEl.style.position = 'static';
//         contentEl.style.height = 'auto';

//         contentEl.offsetHeight;

//         const topBar = 70;
//         const padding = 20;
//         const contentHeight = contentEl.scrollHeight;

//         contentEl.style.visibility = wasVisible;
//         contentEl.style.pointerEvents = wasPointerEvents;
//         contentEl.style.position = wasPosition;
//         contentEl.style.height = wasHeight;

//         return topBar + contentHeight + padding;
//       }
//     }
//     return 280;
//   };

//   const createTimeline = () => {
//     const navEl = navRef.current;
//     if (!navEl) return null;

//     gsap.set(navEl, { height: 70, overflow: 'hidden' });
//     gsap.set(cardsRef.current, { y: 50, opacity: 0 });

//     const tl = gsap.timeline({ paused: true });

//     tl.to(navEl, {
//       height: calculateHeight,
//       duration: 0.4,
//       ease
//     });

//     tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

//     return tl;
//   };

//   useLayoutEffect(() => {
//     const tl = createTimeline();
//     tlRef.current = tl;

//     return () => {
//       tl?.kill();
//       tlRef.current = null;
//     };
//   }, [ease, items]);

//   useLayoutEffect(() => {
//     const handleResize = () => {
//       if (!tlRef.current) return;

//       if (isExpanded) {
//         const newHeight = calculateHeight();
//         gsap.set(navRef.current, { height: newHeight });

//         tlRef.current.kill();
//         const newTl = createTimeline();
//         if (newTl) {
//           newTl.progress(1);
//           tlRef.current = newTl;
//         }
//       } else {
//         tlRef.current.kill();
//         const newTl = createTimeline();
//         if (newTl) {
//           tlRef.current = newTl;
//         }
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [isExpanded]);

//   const toggleMenu = () => {
//     const tl = tlRef.current;
//     if (!tl) return;
//     if (!isExpanded) {
//       setIsHamburgerOpen(true);
//       setIsExpanded(true);
//       tl.play(0);
//     } else {
//       setIsHamburgerOpen(false);
//       tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
//       tl.reverse();
//     }
//   };

//   const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
//     if (el) cardsRef.current[i] = el;
//   };

//   return (
//     <GlassSurface
//       width="100%"
//       height={isExpanded ? calculateHeight() : 70}
//       borderRadius={20}
//       blur={15}
//       opacity={0.9}
//       backgroundOpacity={0.1}
//       brightness={80}
//       displace={2}
//       borderWidth={0.05}
//       saturation={1.5}
//       className={`transition-all duration-300 ${className}`}
//     >
//       <div className={`card-nav-container w-full h-full`}>
//         <nav
//           ref={navRef}
//           className={`card-nav ${isExpanded ? 'open' : ''} block h-full p-0 rounded-2xl relative overflow-hidden will-change-[height]`}
//           style={{ 
//             backgroundColor: baseColor,
//           }}
//         >
//           <div className="card-nav-top absolute inset-x-0 top-0 h-[70px] flex items-center justify-between px-6 z-[2]">
//             <div
//               className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`}
//               onClick={toggleMenu}
//               role="button"
//               aria-label={isExpanded ? 'Close menu' : 'Open menu'}
//               tabIndex={0}
//               style={{ color: menuColor }}
//             >
//               <div
//                 className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
//                   isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
//                 } group-hover:opacity-75`}
//               />
//               <div
//                 className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
//                   isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
//                 } group-hover:opacity-75`}
//               />
//             </div>

//             <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
//               <div className="text-2xl font-bold tracking-wider" style={{ color: menuColor }}>
//                 QUASAR
//               </div>
//             </div>

//             <button
//               type="button"
//               className="card-nav-cta-button hidden md:inline-flex items-center justify-center border-0 rounded-xl px-6 h-12 font-medium cursor-pointer transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
//             >
//               Начать проект
//             </button>
//           </div>

//           <div
//             className={`card-nav-content absolute left-0 right-0 top-[70px] bottom-0 p-4 flex flex-col items-stretch gap-3 justify-start z-[1] ${
//               isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
//             } md:flex-row md:items-end md:gap-4`}
//             aria-hidden={!isExpanded}
//           >
//             {(items || []).slice(0, 3).map((item, idx) => (
//               <div
//                 key={`${item.label}-${idx}`}
//                 className="nav-card select-none relative flex flex-col gap-3 p-4 rounded-xl min-w-0 flex-[1_1_auto] h-auto min-h-[70px] md:h-full md:min-h-0 md:flex-[1_1_0%] border border-white/20 backdrop-blur-md"
//                 ref={setCardRef(idx)}
//                 style={{ backgroundColor: item.bgColor, color: item.textColor }}
//               >
//                 <div className="nav-card-label font-semibold tracking-[-0.5px] text-[20px] md:text-[24px]">
//                   {item.label}
//                 </div>
//                 <div className="nav-card-links mt-auto flex flex-col gap-2">
//                   {item.links?.map((lnk, i) => (
//                     <a
//                       key={`${lnk.label}-${i}`}
//                       className="nav-card-link inline-flex items-center gap-2 no-underline cursor-pointer transition-all duration-300 hover:opacity-75 text-[16px] md:text-[18px] hover:translate-x-1"
//                       href={lnk.href}
//                       aria-label={lnk.ariaLabel}
//                     >
//                       <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
//                       {lnk.label}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </nav>
//       </div>
//     </GlassSurface>
//   );
// };

// export default CardNav;







import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = 'rgba(255, 255, 255, 0.1)',
  menuColor = '#fff',
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 280; // Увеличили высоту

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 70; // Увеличили высоту верхней части
        const padding = 20;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 280; // Увеличили общую высоту
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 70, overflow: 'hidden' }); // Увеличили начальную высоту
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={`card-nav-container ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[70px] p-0 rounded-2xl relative overflow-hidden will-change-[height] border border-white/20 backdrop-blur-xl`}
        style={{ 
          backgroundColor: baseColor,
        }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[70px] flex items-center justify-between px-6 z-[2]">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor }}
          >
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
              } group-hover:opacity-75`}
            />
          </div>

          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            <div className="text-2xl font-bold tracking-wider" style={{ color: menuColor }}>
              QUASAR
            </div>
          </div>

<button
  type="button"
  className="card-nav-cta-button hidden md:inline-flex items-center justify-center border-0 rounded-xl px-6 h-12 font-medium cursor-pointer transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
>
  Начать проект
</button>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[70px] bottom-0 p-4 flex flex-col items-stretch gap-3 justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-4`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-3 p-4 rounded-xl min-w-0 flex-[1_1_auto] h-auto min-h-[70px] md:h-full md:min-h-0 md:flex-[1_1_0%] border border-white/20 backdrop-blur-md"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-semibold tracking-[-0.5px] text-[20px] md:text-[24px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-2">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-2 no-underline cursor-pointer transition-all duration-300 hover:opacity-75 text-[16px] md:text-[18px] hover:translate-x-1"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;