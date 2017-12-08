import React, { PureComponent, PropTypes } from 'react';
import styles from './Pagination.css';

export default class Pagination extends PureComponent {

    getPager = (pageSize, totalPages, currentPage) => {
        const pagerLength = 8;
        const center = pagerLength / 2;
        if (totalPages < 2) {
            return null;
        }

        let startPage, endPage;
        if (totalPages <= pagerLength) {
            startPage = 1;
            endPage = totalPages;
        } 
        else if (currentPage <= center + 1) {
            startPage = 1;
            endPage = pagerLength;
        } else if (currentPage + center - 1 >= totalPages) {
            startPage = totalPages - pagerLength + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - center;
            endPage = currentPage + center - 1;
        }

        let pager = [];
        for (let i = startPage; i <= endPage; i++) {
            pager.push(i);
        }

        return pager;
    }

    render() {
        const { pageSize, totalPages, currentPage, onChangePage } = this.props;
        const pager = this.getPager(pageSize, totalPages, currentPage);

        if (!pager) {
            return null;
        }

        return (
            <ul className="pagination">
                {pager.map((page, index) =>
                    {
                        return currentPage === page ?
                            <li key={index} className='page-item active'>
                                <span className="page-link">
                                    {page}
                                </span>
                            </li>
                            :
                            <li key={index} className="page-item">
                                <a 
                                    className="page-link" 
                                    onClick={e => {
                                        e.preventDefault();
                                        onChangePage(page);
                                    }}> 
                                    {page}
                                </a>
                            </li>
                    }
                )}
            </ul>
        );
    }
}

Pagination.propTypes = {
    pageSize: PropTypes.number,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    onChangePage: PropTypes.func.isRequired
};