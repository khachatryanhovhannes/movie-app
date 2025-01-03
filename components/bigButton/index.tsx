import { ReactNode } from "react";

interface IBigButtonProps {
  text: string;
  bgColor: string;
  icon: ReactNode;
}

export default function BigButton({ ...props }: IBigButtonProps) {
  const { text, bgColor, icon } = props;

  return (
    <button className={`color-white border-2 border-red-600 bg-[${bgColor}]`}>
      {text} {icon}
    </button>
  );
}
