export function StatsSection() {
  return (
    <div className="flex justify-between xl:gap-10">
      <div className="flex flex-col items-start gap-2.5">
        <h2 className="text-[64px] text-primary font-bold leading-18">5+</h2>
        <p className="text-base xl:text-lg">Years Experience</p>
      </div>
      <div className="flex flex-col items-start gap-2.5">
        <h2 className="text-[64px] text-primary font-bold leading-18">6+</h2>
        <p className="text-base xl:text-lg text-nowrap">
          Companies worked with
        </p>
      </div>
      <div className="flex flex-col items-start gap-2.5">
        <h2 className="text-[64px] text-primary font-bold leading-18">12+</h2>
        <p className="text-base xl:text-lg">Projects achieved</p>
      </div>
    </div>
  );
}
