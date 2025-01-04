import Link from "next/link";

interface ISmallButtonProps {
  text: string;
  color: string;
  bgColor: string;
  href: string;
}

export default function SmallButton({ ...props }: ISmallButtonProps) {
  const { text, color, bgColor, href } = props;

  return (
    <Link href={href}>
      <button
        style={{ color, backgroundColor: bgColor }}
        className="text-xs sm:text-sm lg:text-base py-2 px-4 sm:py-3 sm:px-6 rounded-2xl"
      >
        {text}
      </button>
    </Link>
  );
}
