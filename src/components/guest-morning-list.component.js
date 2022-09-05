import React, { useState, useEffect, useMemo, useRef } from "react";
import GuestDataService from "../services/guest.service";
import { useTable } from "react-table";


const GuestMorningList = (props) => {
  const [tutorials, setTutorials] = useState([]);
  const tutorialsRef = useRef();

  tutorialsRef.current = tutorials;

  useEffect(() => {
    retrieveTutorials();
  }, []);


  const retrieveTutorials = () => {
    GuestDataService.getAll(1)
      .then((response) => {
        setTutorials(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Categoria",
        accessor: "guestType",
        Cell: (props) => {
          const type = props.value;
          console.log(type)
          return type === "AVISO" ? (
            <button className="btn btn-success"> {type}</button>
          ) : (
            <button className="btn btn-danger"> {type} </button>
          );
        }
      },
      {
        Header: "Nome",
        accessor: "name",
      },
      {
        Header: "Mensagem",
        accessor: "message",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: tutorials,
  });

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <div className="input-group-append">
            <h1>
              Visitantes e Avisos.
            </h1>
          </div>
        </div>
      </div>
      <div className="col-md-12 list">
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuestMorningList;