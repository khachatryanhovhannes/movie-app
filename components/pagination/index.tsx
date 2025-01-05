import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface IPaginationProps {
  length: number;
  page: number;
  href: string;
}

const Pagination = ({ length, page, href }: IPaginationProps) => {
  const postLength = length;
  const perPage = 20;

  const totalPage = Math.ceil(postLength / perPage);

  const generatePaginationNumbers = (page: number, totalPage: number) => {
    const paginationArray = [];

    for (let i = +page - 2; i <= +page + 2; i++) {
      if (i < 1) continue;
      if (i > totalPage) break;
      paginationArray.push(i);
    }

    return paginationArray;
  };

  const generatedNumbers = generatePaginationNumbers(page, totalPage);

  return (
    <div className="text-center">
      <div className="flex items justify-center gap-2">
        {/* Previous Page Button */}
        {+page - 1 >= 1 && (
          <Link
            href={`${href}&page=${+page - 1}`}
            className="text-2xl text-red-600 bg-white inline-block gap-1 p-1 rounded-lg border"
            aria-label="Previous Page"
          >
            <MdKeyboardArrowLeft />
          </Link>
        )}

        {/* Pagination Numbers */}
        {generatedNumbers.map((number) => (
          <Link
            key={number}
            className={`${
              page == number ? "bg-red-600 text-white" : "text-red-600 bg-white"
            } inline-block py-1 px-3 rounded-lg border hover:border-red-600`}
            href={`${href}&page=${number}`}
            aria-current={page === number ? "page" : undefined} // Indicates the current page
          >
            {number}
          </Link>
        ))}

        {/* Next Page Button */}
        {+page + 1 <= totalPage && (
          <Link
            href={`${href}&page=${+page + 1}`}
            className="text-2xl text-red-600 bg-white inline-block gap-1 p-1 rounded-lg border"
            aria-label="Next Page"
          >
            <MdKeyboardArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
};
export default Pagination;
