import React, { PureComponent, PropTypes } from 'react';
import styles from './Pagination.css';

class Pagination extends PureComponent {

    render() {
        const { pageSize, totalCount, currentPage, onChangePage } = this.props;
        const totalPages = Math.ceil(totalCount/pageSize);

        if (totalPages < 2) {
            return null;
        }

        let startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        let pager = [];
        for (let i = startPage; i <= endPage; i++) {
            pager.push(i);
        }

        return (
            <ul className="pagination">
                {pager.map((page, index) =>
                    <li key={index} className={currentPage === page ? 'active' : ''}>
                        <a onClick={e => {
                            e.preventDefault();
                            this.props.onChangePage(page);
                        }}>
                            {page}
                        </a>
                    </li>
                )}
            </ul>
        );
    }
}

const propTypes = {
    pageSize: PropTypes.number,
    totalCount: PropTypes.number,
    currentPage: PropTypes.number,
    onChangePage: PropTypes.func.isRequired
}

Pagination.propTypes = propTypes;
export default Pagination;