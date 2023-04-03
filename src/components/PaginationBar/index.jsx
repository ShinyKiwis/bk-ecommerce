import React from "react";
import { usePagination } from "../../hooks";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import PaginationBarStyle from "./PaginationBar.module.css";

function PaginationBar({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) {
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={PaginationBarStyle.pagination_container}>
      <li className={PaginationBarStyle.pagination_item}>
        <button disabled={currentPage === 1} onClick={onPrevious}>
          <TfiArrowCircleLeft />
        </button>
      </li>
      {paginationRange.map((page) => {
        if (page === "...") {
          return (
            <li className={`${PaginationBarStyle.pagination_item} ${PaginationBarStyle.dots}`}>
              <HiOutlineDotsHorizontal />
            </li>
          );
        }
        if (page === currentPage) {
            return <li className={`${PaginationBarStyle.pagination_item} ${PaginationBarStyle.selected}`} onClick={() => onPageChange(page)}>{page}</li>;
        }
        return <li className={PaginationBarStyle.pagination_item} onClick={() => onPageChange(page)}>{page}</li>;
      })}
      <li className={PaginationBarStyle.pagination_item}>
        <button disabled={currentPage === lastPage} onClick={onNext}>
          <TfiArrowCircleRight />
        </button>
      </li>
    </ul>
  );
}

export default PaginationBar;
