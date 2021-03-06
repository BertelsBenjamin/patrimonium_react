import React from 'react';
import { Table as TableBootstrap } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Table = ({ data, details }) => {
  //console.log(data);
  return (
    <TableBootstrap striped responsive bordered hover variant='dark'>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <th key={`${index}-${key}`}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </th>
          ))}
          {/* OPTIONAL HEADER CELL */}
          <th>More info</th>
        </tr>
      </thead>
      <tbody>
        {data.map((obj) => (
          <tr key={`tr-${obj._id}`}>
            {Object.values(obj).map((value, index) => (
              <td key={`td-${obj._id}-${index}`}>
                {typeof value === 'boolean' ? (
                  value.toString() === 'false' ? (
                    <i
                      className='mi-circle-error'
                      style={{ color: 'red', fontWeight: 'bold' }}
                    ></i>
                  ) : (
                    <i
                      className='mi-circle-check'
                      style={{ color: 'green' }}
                    ></i>
                  )
                ) : !value ? (
                  '/'
                ) : (
                  value.toString()
                )}
              </td>
            ))}
            {/* OPTIONAL DATA CELL */}
            <td>
              <Link to={`/${details}/${obj._id}`}>
                <i className='mi-circle-information'></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </TableBootstrap>
  );
};

export default Table;
