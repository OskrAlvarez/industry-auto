"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Dispatch, SetStateAction } from "react";

interface Props {
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalItems: number;
}

export function PaginationComponent({
  itemsPerPage,
  currentPage,
  setCurrentPage,
  totalItems,
}: Props) {
  const pageNumbers: number[] = [];
  const lenghtPage = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= lenghtPage; i++) {
    pageNumbers.push(i);
  }

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onLinkPage = (linkNumber: number) => {
    setCurrentPage(linkNumber);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            className={`${currentPage === 1 ? 'bg-gray-400 text-gray-200/50 pointer-events-none' : 'cursor-pointer'}`} 
            onClick={onPrevPage}
          />
        </PaginationItem>
        {
          pageNumbers.map((page, index) => (
            <PaginationItem key={`page-item-${index}`}>
              <PaginationLink 
                onClick={() => onLinkPage(page)}
                className={`cursor-pointer ${page === currentPage ? 'bg-red-700 text-white font-bold' : ''}`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))
        }
        <PaginationItem>
          <PaginationNext  
            className={`${currentPage >= pageNumbers.length ? 'bg-gray-400 text-gray-200/50 pointer-events-none' : 'cursor-pointer'}`}
            onClick={onNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
