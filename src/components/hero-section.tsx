import { StatsSection } from "./stats-section";

export function HeroSection() {
  return (
    <section className="xl:space-y-20 2xl:space-y-40">
      <div className="flex flex-col xl:gap-10">
        <span className="text-primary">Hello</span>
        <h1 className="text-2xl lg:text-[47px] xl:text-[64px] text-white font-bold leading-18">
          I'm Sonfack Nelson Mandela, Full-stack web developer
        </h1>
        <p className="text-base xl:text-xl font-normal">
          I build scalable, performant web apps with React, Next.js & Node.js.
          Whether it’s a sleek UI or a solid backend, I’m passionate about
          turning ideas into digital experiences.
        </p>
      </div>
      <StatsSection />
    </section>
  );
}
