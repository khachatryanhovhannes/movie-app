import { ReactNode } from "react";

interface IBigButtonProps {
  text: string;
  bgColor: string;
  icon: ReactNode;
}

export default function BigButton({ ...props }: IBigButtonProps) {
  const { text, bgColor, icon } = props;

  return (
    <button
      className={`color-white border-4 px-6 py-2 text-base sm:px-8 sm:py-3 sm:text-lg lg:px-10 lg:py-4 lg:text-xl text-white rounded-md border-red-600`}
      style={{ background: bgColor }}
    >
      {text} {icon}
    </button>
  );
}
