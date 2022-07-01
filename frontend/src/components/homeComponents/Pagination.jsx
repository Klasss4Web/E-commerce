import React from 'react'
import { Link } from 'react-router-dom'

export const Pagination = () => {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item active" to={"#"}>
          <Link className="page-link" to={"#"}>
            1
          </Link>
        </li>
        <li className="page-item" to={"#"}>
          <Link className="page-link" to={"#"}>
            2
          </Link>
        </li>
        <li className="page-item" to={"#"}>
          <Link className="page-link" to={"#"}>
            3
          </Link>
        </li>
        <li className="page-item" to={"#"}>
          <Link className="page-link" to={"#"}>
            4
          </Link>
        </li>
        <li className="page-item" to={"#"}>
          <Link className="page-link" to={"#"}>
            5
          </Link>
        </li>
      </ul>
    </nav>
  )
}
