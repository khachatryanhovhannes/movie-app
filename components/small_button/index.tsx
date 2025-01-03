interface ISmallButtonProps {
  text: string;
  color: string;
  bgColor: string;
}

export default function SmallButton({ ...props }: ISmallButtonProps) {
  const { text, color, bgColor } = props;

  return (
    <button style={{ color, backgroundColor: bgColor }} className='text-xs sm:text-sm lg:text-base py-2 px-4 sm:py-3 sm:px-6 rounded-2xl'>
      {text}
    </button>
  );
}
