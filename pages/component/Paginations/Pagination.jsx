import React, { useState } from "react";
import { getRandomColor } from "@/pages/user";
const itemsPerPage = 9; // Number of items to display per page

const Pagination = ({ handlePageChange, currentPage }) => {
  return (
    <>
      <nav aria-label="Page navigation   ">
        <ul class="flex items-center -space-x-px h-10 text-base justify-center">
          <li
            className={`${currentPage <= 1 ? "pointer-events-none" : ""}`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-orange-500 border border-orange-300 rounded-l-lg  hover:text-gray-700 dark:bg-orange-500 dark:border-orange-00 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>

          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <li key={index} onClick={() => handlePageChange(index + 1)}>
              <a
                href="javascript:void(0)"
                className={`flex items-center justify-center   px-4 h-10 leading-tight text-gray-500  border border-orange-500 hover:bg-orange-500 hover:text-gray-700  dark:border-orange-500 dark:text-gray-400  dark:hover:text-white ${
                  currentPage == index + 1 ? "bg-orange-500" : null
                }`}
              >
                {index + 1}
              </a>
            </li>
          ))}

          <li
            className={`${currentPage >= 9 ? "pointer-events-none" : ""}`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <a
              href="#"
              class={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-orange-300 rounded-r-lg hover:bg-orange-100 hover:text-gray-700 dark:bg-orange-500 dark:border-orange-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white `}
            >
              <span class="sr-only">Next</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
