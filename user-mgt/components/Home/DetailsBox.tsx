import { DetailsBoxType } from "@/types/components";

const DetailsBox = ({ Icon, title, content, color }: DetailsBoxType) => {
  return (
    <div className="flex flex-col max-w-[300px] max-h-[300px] items-center bg-white border rounded-md  p-3 md:p-10">
      <span
        className={` p-2  my-4 ${
          color !== undefined ? color : "bg-primary"
        } rounded-full`}
      >
        <Icon className="text-white " />
      </span>
      <p className="font-bold mb-2 text-[#1E202B]">{title}</p>
      <p className="text-xs text-text  text-center">{content}</p>
    </div>
  );
};

export default DetailsBox;
