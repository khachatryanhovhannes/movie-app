import Link from "next/link";

interface ISmallButtonProps {
  text: string;
  color: string;
  bgColor: string;
  href: string;
  ariaLabel?: string;
}

export default function SmallButton({ ...props }: ISmallButtonProps) {
  const { text, color, bgColor, href, ariaLabel } = props;

  return (
    <Link href={href} passHref>
      <button
        style={{ color, backgroundColor: bgColor }}
        className="text-xs sm:text-sm lg:text-base py-2 px-4 sm:py-3 sm:px-6 rounded-2xl"
        aria-label={ariaLabel || text}
        role="link"
      >
        {text}
      </button>
    </Link>
  );
}
