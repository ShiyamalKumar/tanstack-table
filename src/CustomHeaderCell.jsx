import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function CustomHeaderCell({ column }) {
    return (
        <div className="custom-header-cell">
            <span className="header-text">{column.render('Header')}</span>
            {column.isSorted && (
                <FontAwesomeIcon
                    icon={faArrowDown}
                    className={`sort-arrow ${column.isSortedDesc ? 'sorted-desc' : 'sorted-asc'}`}
                />
            )}
        </div>
    );
}

export default CustomHeaderCell;
