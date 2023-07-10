import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ totalDePaginas, currentPage, handleGoToPage, handlePreviousPage, handleNextPage }) => {


    const pageLinks = [];

    for (let i = 1; i <= totalDePaginas; i++) {
        pageLinks.push(i);
    }

    return (
        <>
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <Link className="pagination-previous" onClick={() => { handlePreviousPage() }}
                    disabled={currentPage === 1}>Previous</Link>
                <Link className="pagination-next"
                    onClick={() => { handleNextPage() }}
                    disabled={currentPage === totalDePaginas}>Next page</Link>
                <ul className="pagination-list">
                    {
                        pageLinks.map(page => {
                            return (
                                <li key={page}>
                                    <Link to={`#/${page}`} className={`pagination-link ${currentPage === page ? "is-current" : ""}`}
                                        aria-label={`Goto page ${page}`}
                                        onClick={() => handleGoToPage(page)}>{page}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Pagination;
