import React from 'react'
import { Link } from 'react-router-dom'

export const Pagination = ({ page, pages, keyword }) => {

  return (
    pages > 1 && (
      <nav>
        <ul className="pagination justify-content-center">
          {[...Array(pages).keys()]?.map((pageNum) => (
            <li key={pageNum + 1} className={`page-item  ${pageNum + 1 === page ? "active" : ""}`} to={"#"}>
              <Link className="page-link" to={keyword ? `/search/${keyword}/page/${pageNum + 1}` : `/page/${pageNum + 1}`}>
                {pageNum + 1}
              </Link>
            </li>
          ))}
         
        </ul>
      </nav>
    )
  );
}
