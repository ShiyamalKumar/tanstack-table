import React, { useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';


function Table({ data, onFavoriteClick, onSelectRow }) {
    const [showMeatballMenu, setShowMeatballMenu] = useState(false);
    const [selectAll, setSelectAll] = useState(false);

    const columns = React.useMemo(
        () => [
            {
                Header: (
                    <div className="meatball-menu">
                        <FontAwesomeIcon icon={faEllipsisH} onClick={() => setShowMeatballMenu(!showMeatballMenu)} />
                        {showMeatballMenu && (
                            <div className="meatball-dropdown">
                                <button onClick={() => handleSelectAll(true)}>Select All</button>
                                <button onClick={() => handleSelectAll(false)}>Unselect All</button>
                            </div>
                        )}
                    </div>
                ),
                accessor: 'select',
                sortable: false,
                Cell: ({ row }) => (
                    <input type="checkbox" onChange={() => onSelectRow(row.original)} checked={row.original.select} />
                ),
            },

            {
                accessor: 'favorite',
                Cell: ({ row }) => (
                    <button onClick={() => onFavoriteClick(row.original)} className="favorite-button">
                        <FontAwesomeIcon icon={row.original.favorite ? solidHeart : regularHeart} />
                    </button>
                ),
            },



            {
                Header: 'PURCHASED MANUFACTURER',
                accessor: 'purchasedManufacturer',
                canSort: true,
            },
            {
                Header: 'PURCHASED PRODUCT',
                accessor: 'purchasedProduct',
                canSort: true,
            },
            {
                Header: 'MATCHED MANUFACTURER',
                accessor: 'matchedManufacturer',
                canSort: true,
            },
            {
                Header: 'MATCHED PRODUCT',
                accessor: 'matchedProduct',
                Cell: ({ row }) => (
                    <a href={`#/${row.original.matchedProduct}`} target="_blank" rel="noopener noreferrer">
                        {row.original.matchedProduct}
                    </a>
                ),
                canSort: true,

            },

        ],
        [onFavoriteClick, onSelectRow, showMeatballMenu]
    );


    const handleSelectAll = (value) => {
        setSelectAll(value);

        data.forEach((row) => {
            onSelectRow({ ...row, select: value });
        });
    };

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy
    );

    return (
        <table {...getTableProps()} className="custom-table">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="header-cell">
                                {column.render('Header')}
                                {column.isSorted && (
                                    <span className="sort-arrow">
                                        <FontAwesomeIcon
                                            icon={column.isSorted ? (column.isSortedDesc ? faArrowDown : faArrowUp) : faArrowDown}
                                            className={`sort-icon ${column.isSortedDesc ? 'sorted-desc' : 'sorted-asc'}`}
                                        />
                                    </span>
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr
                            {...row.getRowProps()}
                            className={row.index % 2 === 0 ? 'even-row' : 'odd-row'}
                        >
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()} style={{ border: '1px solid black', padding: '8px' }}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;
