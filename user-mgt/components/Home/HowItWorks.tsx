import { details } from "@/constant/mock";
import DetailsBox from "./DetailsBox";

const HowItWorks = (): JSX.Element => {
  return (
    <div className="md:px-12 px-6 mt-8 py-8 md:py-14 ">
      <h2 className="font-bold text-center mb-4 text-lg md:text-3xl">
        How it works
      </h2>
      <p className="text-center md:px-28 mb-12 text-sm md:text-base text-text">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. reader will be
        distracted by the readable content of a page when looking at its layout.
      </p>
      <div className="flex flex-col justify-center items-center md:space-y-0 space-y-4 md:flex-row md:space-x-5">
        {details.map((item, idx) => (
          <DetailsBox
            key={idx}
            Icon={item.Icon}
            content={item.content}
            color={item.color}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
