export function ServicesSection() {
  return (
    <div className="space-y-5 xl:mt-50">
      <p className="text-primary">Services</p>
      <h1 className="text-2xl lg:text-[30] xl:text-[40px] text-white font-bold leading-12">
        {"Expertise and services"}
      </h1>
      <p className="text-base xl:text-xl font-normal">
        I believe my expertise can help transform your ideas into powerful
        digital solutions. With a focus on modern web technologies and best
        practices, I deliver robust and scalable applications tailored to your
        needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <div className="flex flex-col justify-center items-center gap-2 border border-body rounded-[20px] py-7.5">
          <h4 className="text-xl text-white">Front-ends</h4>
          <p className="text-base">21 PROJECTS</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 border border-body rounded-[20px] py-7.5">
          <h4 className="text-xl text-white">Back-ends</h4>
          <p className="text-base">21 PROJECTS</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 border border-body rounded-[20px] py-7.5">
          <h4 className="text-xl text-white">Digital Consulting</h4>
          <p className="text-base">21 PROJECTS</p>
        </div>
      </div>
    </div>
  );
}
