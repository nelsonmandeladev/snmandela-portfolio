interface CareerType {
  company: string;
  period: string;
  role: string;
}

const CAREERS: CareerType[] = [
  {
    company: "KEVMAX SARL",
    period: "May 2023 - May 2025, Yaounde",
    role: "Lead Full-stack web developer",
  },
  {
    company: "CARTEVO",
    period: "January 2025 - March 2025",
    role: "Free-lance web developer",
  },
  {
    company: "EVAGROUP SARL",
    period: "January 2023 - December 2024",
    role: "Freelancing and Digital Consulting",
  },
  {
    company: "Abyster Consulting",
    period: "December 2022 - May 2023, Yaounde",
    role: "Lead Frontend developer",
  },
  {
    company: "Digital Gateway",
    period: "March 2021 - December 2023, Yaounde",
    role: "Full-stack web developer",
  },
];

export function WorkHistory() {
  return (
    <div className="space-y-5 xl:mt-50">
      <p className="text-primary">Career</p>
      <h1 className="text-2xl lg:text-[30] xl:text-[40px] text-white font-bold leading-12">
        {"My journey so fare"}
      </h1>
      <p className="text-base xl:text-xl font-normal">
        A very brief overview of my growth and learning journey in web
        development, showcasing my experience across various companies and
        roles.
      </p>
      <div className="space-y-5 mt-10">
        {CAREERS.map((career, index) => (
          <WorkHistoryItem key={index} career={career} />
        ))}
      </div>
    </div>
  );
}

function WorkHistoryItem({ career }: { career: CareerType }) {
  return (
    <div className="space-y-2.5">
      <h4 className="text-white text-2xl">{career.company}</h4>
      <div className="">
        <p className="text-xs italic">{career.period}</p>
        <p>{career.role}</p>
      </div>
    </div>
  );
}
