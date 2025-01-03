import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div className="text-red-600 text-6xl">G</div>
        <div className="flex flex-col text-lg">
          <span>MOVIES</span>
          <span>APP</span>
        </div>
      </div>
    </Link>
  );
}
