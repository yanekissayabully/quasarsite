"use client"
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

// Логотипы технологий с иконками
const techLogos = [
  { node: <SiReact className="text-blue-400" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-cyan-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiFigma className="text-purple-600" />, title: "Figma", href: "https://figma.com" },
  { node: <SiVercel className="text-black dark:text-white" />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiGit className="text-orange-600" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiMongodb className="text-green-500" />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiPostgresql className="text-blue-700" />, title: "PostgreSQL", href: "https://postgresql.org" },
  { node: <SiDocker className="text-blue-500" />, title: "Docker", href: "https://docker.com" },
  { node: <SiGraphql className="text-pink-600" />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiJest className="text-red-600" />, title: "Jest", href: "https://jestjs.io" },
  { node: <SiCypress className="text-green-500" />, title: "Cypress", href: "https://cypress.io" },
  { node: <SiStorybook className="text-pink-500" />, title: "Storybook", href: "https://storybook.js.org" },
];


function TechCapabilities() {
  return (
    <section className="mt-20 py-10 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      {/* Декоративные элементы */}      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3">
              Технологии которые мы используем
            </h3>
            <p className="text-muted-foreground">
              Современный стек для максимальной производительности
            </p>
          </div>
          
          <div className="relative bg-background/50  p-8 backdrop-blur-sm">
            <LogoLoop
              logos={techLogos}
              speed={30}
              direction="left"
              logoHeight={60}
              gap={48}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#000000ff"
              ariaLabel="Technology stack"
              className="py-4"
            />
          </div>
        </div>

        {/* Статистика */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "50+", label: "Успешных проектов" },
            { number: "3+", label: "Лет опыта" },
            { number: "98%", label: "Довольных клиентов" },
            { number: "24/7", label: "Техподдержка" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-background/50 border border-border rounded-xl">
              <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <TechCapabilities />
    </div>
  );
}

export default App;