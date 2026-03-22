// "use client"
// import { useEffect, useRef, useState } from 'react';
// import LogoLoop from './LogoLoop';
// import { 
//   SiReact, 
//   SiNextdotjs, 
//   SiTypescript, 
//   SiTailwindcss,
//   SiNodedotjs,
//   SiFigma,
//   SiVercel,
//   SiGit,
//   SiMongodb,
//   SiPostgresql,
//   SiDocker,
//   SiGraphql,
//   SiJest,
//   SiCypress,
//   SiStorybook
// } from 'react-icons/si';

// // Логотипы технологий с иконками
// const techLogos = [
//   { node: <SiReact className="text-blue-400" />, title: "React", href: "https://react.dev" },
//   { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
//   { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//   { node: <SiTailwindcss className="text-cyan-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
//   { node: <SiNodedotjs className="text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
//   { node: <SiFigma className="text-purple-600" />, title: "Figma", href: "https://figma.com" },
//   { node: <SiVercel className="text-black dark:text-white" />, title: "Vercel", href: "https://vercel.com" },
//   { node: <SiGit className="text-orange-600" />, title: "Git", href: "https://git-scm.com" },
//   { node: <SiMongodb className="text-green-500" />, title: "MongoDB", href: "https://mongodb.com" },
//   { node: <SiPostgresql className="text-blue-700" />, title: "PostgreSQL", href: "https://postgresql.org" },
//   { node: <SiDocker className="text-blue-500" />, title: "Docker", href: "https://docker.com" },
//   { node: <SiGraphql className="text-pink-600" />, title: "GraphQL", href: "https://graphql.org" },
//   { node: <SiJest className="text-red-600" />, title: "Jest", href: "https://jestjs.io" },
//   { node: <SiCypress className="text-green-500" />, title: "Cypress", href: "https://cypress.io" },
//   { node: <SiStorybook className="text-pink-500" />, title: "Storybook", href: "https://storybook.js.org" },
// ];

// // Компонент счетчика
// function AnimatedCounter({ targetValue, suffix = "", duration = 2000 }: { targetValue: number, suffix?: string, duration?: number }) {
//   const [count, setCount] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const counterRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//           let startTime: number | null = null;
//           const startValue = 0;
//           const endValue = targetValue;

//           const animateCount = (currentTime: number) => {
//             if (startTime === null) startTime = currentTime;
//             const elapsed = currentTime - startTime;
//             const progress = Math.min(elapsed / duration, 1);
            
//             // Используем easing function для плавности
//             const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//             const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
            
//             setCount(currentCount);
            
//             if (progress < 1) {
//               requestAnimationFrame(animateCount);
//             } else {
//               setCount(endValue);
//             }
//           };
          
//           requestAnimationFrame(animateCount);
//         }
//       },
//       { threshold: 0.3 } // Запускаем когда элемент виден на 30%
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => {
//       if (counterRef.current) {
//         observer.unobserve(counterRef.current);
//       }
//     };
//   }, [targetValue, duration, hasAnimated]);

//   return (
//     <div ref={counterRef} className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
//       {count}{suffix}
//     </div>
//   );
// }

// function TechCapabilities() {
//   return (
//     <section className="mt-12 md:mt-20 py-8 md:py-10 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="mb-12 md:mb-16">
//           <div className="text-center mb-6 md:mb-8">
//             <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 flex items-center justify-center gap-3">
//               Технологии которые мы используем
//             </h3>
//           </div>
          
//           <div className="relative bg-background/50 p-4 md:p-8 backdrop-blur-sm rounded-xl">
//             <LogoLoop
//               logos={techLogos}
//               speed={30}
//               direction="left"
//               logoHeight={60}
//               gap={48}
//               pauseOnHover={true}
//               scaleOnHover={true}
//               fadeOut={true}
//               fadeOutColor="rgba(0, 0, 0, 0)"
//               ariaLabel="Technology stack"
//               className="py-4"
//             />
//           </div>
//         </div>

//         {/* Статистика */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16">
//           {[
//             { number: 150, label: "Успешных проектов", suffix: "+", isAnimated: true },
//             { number: 3, label: "Года опыта", suffix: "+", isAnimated: true },
//             { number: 98, label: "Довольных клиентов", suffix: "%", isAnimated: true },
//             { number: null, label: "Техподдержка", value: "24/7", isAnimated: false }
//           ].map((stat, index) => (
//             <div 
//               key={index} 
//               className="text-center p-4 md:p-6 bg-background/50 backdrop-blur-sm rounded-xl hover:bg-background/70 transition-colors duration-300"
//             >
//               {stat.isAnimated ? (
//                 <AnimatedCounter 
//                   targetValue={stat.number as number} 
//                   suffix={stat.suffix as string}
//                   duration={2000}
//                 />
//               ) : (
//                 <div className="text-2xl md:text-3xl font-bold text-accent mb-1 md:mb-2">
//                   {stat.value}
//                 </div>
//               )}
//               <div className="text-xs md:text-sm text-muted-foreground font-medium">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function App() {
//   return (
//     <div>
//       <TechCapabilities />
//     </div>
//   );
// }

// export default App;


// "use client"
// import { useEffect, useRef, useState } from 'react';
// import LogoLoop from './LogoLoop';
// import { 
//   SiReact, 
//   SiNextdotjs, 
//   SiTypescript, 
//   SiTailwindcss,
//   SiNodedotjs,
//   SiFigma,
//   SiVercel,
//   SiGit,
//   SiMongodb,
//   SiPostgresql,
//   SiDocker,
//   SiGraphql,
//   SiJest,
//   SiCypress,
//   SiStorybook
// } from 'react-icons/si';
// import { motion, useInView } from 'framer-motion';

// // Логотипы технологий с иконками
// const techLogos = [
//   { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
//   { node: <SiNextdotjs className="text-foreground" />, title: "Next.js", href: "https://nextjs.org" },
//   { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//   { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
//   { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
//   { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma", href: "https://figma.com" },
//   { node: <SiVercel className="text-foreground" />, title: "Vercel", href: "https://vercel.com" },
//   { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
//   { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://mongodb.com" },
//   { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://postgresql.org" },
//   { node: <SiDocker className="text-[#2496ED]" />, title: "Docker", href: "https://docker.com" },
//   { node: <SiGraphql className="text-[#E10098]" />, title: "GraphQL", href: "https://graphql.org" },
//   { node: <SiJest className="text-[#C21325]" />, title: "Jest", href: "https://jestjs.io" },
//   { node: <SiCypress className="text-[#69D3A7]" />, title: "Cypress", href: "https://cypress.io" },
//   { node: <SiStorybook className="text-[#FF4785]" />, title: "Storybook", href: "https://storybook.js.org" },
// ];

// // Компонент счетчика с дерзкой анимацией
// function AnimatedCounter({ targetValue, suffix = "", duration = 2000 }: { targetValue: number, suffix?: string, duration?: number }) {
//   const [count, setCount] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const counterRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//           let startTime: number | null = null;
//           const startValue = 0;
//           const endValue = targetValue;

//           const animateCount = (currentTime: number) => {
//             if (startTime === null) startTime = currentTime;
//             const elapsed = currentTime - startTime;
//             const progress = Math.min(elapsed / duration, 1);
            
//             const easeOutExpo = 1 - Math.pow(2, -10 * progress);
//             const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutExpo);
            
//             setCount(currentCount);
            
//             if (progress < 1) {
//               requestAnimationFrame(animateCount);
//             } else {
//               setCount(endValue);
//             }
//           };
          
//           requestAnimationFrame(animateCount);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => {
//       if (counterRef.current) {
//         observer.unobserve(counterRef.current);
//       }
//     };
//   }, [targetValue, duration, hasAnimated]);

//   return (
//     <div ref={counterRef} className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
//       {count}{suffix}
//     </div>
//   );
// }

// function TechCapabilities() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

//   return (
//     <section 
//       ref={sectionRef}
//       className="py-16 md:py-24 bg-background border-t border-border relative overflow-hidden"
//     >
//       {/* Дерзкий градиентный фон */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Заголовок секции */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
//             Технологический стек
//           </span>
//           <h2 
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance"
//             style={{ fontFamily: 'var(--font-syne)' }}
//           >
//             Работаем на{' '}
//             <span className="text-primary">современном стеке</span>
//           </h2>
//           <div className="w-20 h-px bg-primary mx-auto mt-5" />
//         </motion.div>
        
//         {/* Логотипы технологий */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg"
//         >
//           <LogoLoop
//             logos={techLogos}
//             speed={30}
//             direction="left"
//             logoHeight={60}
//             gap={48}
//             pauseOnHover={true}
//             scaleOnHover={true}
//             fadeOut={true}
//             fadeOutColor="hsl(var(--card))"
//             ariaLabel="Technology stack"
//             className="py-4"
//           />
//         </motion.div>

//         {/* Статистика — дерзкие цифры */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
//           {[
//             { number: 150, label: "Успешных проектов", suffix: "+", isAnimated: true },
//             { number: 3, label: "Года опыта", suffix: "+", isAnimated: true },
//             { number: 98, label: "Довольных клиентов", suffix: "%", isAnimated: true },
//             { number: null, label: "Техподдержка", value: "24/7", isAnimated: false }
//           ].map((stat, index) => (
//             <motion.div 
//               key={index} 
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//               className="text-center p-5 md:p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
//             >
//               {stat.isAnimated ? (
//                 <AnimatedCounter 
//                   targetValue={stat.number as number} 
//                   suffix={stat.suffix as string}
//                   duration={2000}
//                 />
//               ) : (
//                 <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
//                   {stat.value}
//                 </div>
//               )}
//               <div className="text-xs md:text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
//                 {stat.label}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TechCapabilities;


"use client"
import { useEffect, useRef, useState } from 'react';
import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiVercel,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGraphql,
  SiJest,
  SiCypress,
  SiStorybook
} from 'react-icons/si';
import { motion, useInView } from 'framer-motion';

// Логотипы технологий с иконками
const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-foreground" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma", href: "https://figma.com" },
  { node: <SiVercel className="text-foreground" />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://postgresql.org" },
  { node: <SiDocker className="text-[#2496ED]" />, title: "Docker", href: "https://docker.com" },
  { node: <SiGraphql className="text-[#E10098]" />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiJest className="text-[#C21325]" />, title: "Jest", href: "https://jestjs.io" },
  { node: <SiCypress className="text-[#69D3A7]" />, title: "Cypress", href: "https://cypress.io" },
  { node: <SiStorybook className="text-[#FF4785]" />, title: "Storybook", href: "https://storybook.js.org" },
];

// Компонент счетчика
function AnimatedCounter({ targetValue, suffix = "", duration = 2000 }: { targetValue: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const startValue = 0;
          const endValue = targetValue;

          const animateCount = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutExpo = 1 - Math.pow(2, -10 * progress);
            const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutExpo);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animateCount);
            } else {
              setCount(endValue);
            }
          };
          
          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [targetValue, duration, hasAnimated]);

  return (
    <div ref={counterRef} className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
      {count}{suffix}
    </div>
  );
}

function TechCapabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id='stack'
      ref={sectionRef}
      className="py-24 px-6 bg-background border-t border-border relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
            Технологический стек
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Работаем на{' '}
            <span className="text-primary">современном стеке</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
            style={{ originX: 0.5 }}
            className="w-20 h-px bg-primary mx-auto mt-6"
          />
        </motion.div>
        
        {/* Логотипы технологий */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-card border border-border rounded-2xl p-6 md:p-8"
        >
          <LogoLoop
            logos={techLogos}
            speed={30}
            direction="left"
            logoHeight={60}
            gap={48}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="hsl(var(--card))"
            ariaLabel="Technology stack"
            className="py-4"
          />
        </motion.div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-16 rounded-xl overflow-hidden">
          {[
            { number: 150, label: "Успешных проектов", suffix: "+", isAnimated: true },
            { number: 3, label: "Года опыта", suffix: "+", isAnimated: true },
            { number: 98, label: "Довольных клиентов", suffix: "%", isAnimated: true },
            { number: null, label: "Техподдержка", value: "24/7", isAnimated: false }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card p-6 md:p-8 text-center"
            >
              {stat.isAnimated ? (
                <AnimatedCounter 
                  targetValue={stat.number as number} 
                  suffix={stat.suffix as string}
                  duration={2000}
                />
              ) : (
                <div 
                  className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {stat.value}
                </div>
              )}
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechCapabilities;