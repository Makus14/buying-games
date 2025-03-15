import { HelpCircle } from "lucide-react";

const InformationMark = () => {
  return (
    <div
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF]"
      style={{ display: "flex", width: "15px" }}
    >
      <HelpCircle className="text-white w-6 h-6" style={{ color: "white" }} />
    </div>
  );
};

export default InformationMark;
