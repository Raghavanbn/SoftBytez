import React, { useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import axios from 'axios';

const DataGrid = () => {
  const columns = [
    { field: "col1", headerName: "Title", width: 150 },
        { field: "col2", headerName: "Name", width: 150 },
        { field: "col3", headerName: "DOB", width: 150 },
        { field: "col4", headerName: "Gender", width: 150 },
        { field: "col5", headerName: "Active", width: 150 }
  ]; 

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: [],
      initialState: { pageIndex: 0 }, // Set the initial page index
    },
    usePagination
  );

  // Fetch data from your server and update the table data when the page index changes
  useEffect(() => {
    axios.get(`/api/data?page=${pageIndex + 1}`).then((response) => {
      // Replace '/api/data' with your API endpoint
      // Update the data with the response data
    });
  }, [pageIndex]);

  return (
    <div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      </div>
    </div>
  );
};

export default DataGrid;
