//import { Box } from '@chakra-ui/react'
import React from 'react'

export const Pagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul style={{ display: "flex" }}>
        {pageNumbers?.map((number) => (
          <li
            key={number}
            style={{
              listStyle: "none",
              marginRight: "20px",
              border: "1px solid lightblue",
              width: "40px",
              textAlign: "center",
              borderRadius: "5px",
              cursor: "pointer",
              background: currentPage === number ? "#2A9D8F" : "#fff",
              color: currentPage === number ? "#fff" : "#2A9D8F",
            }}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};
