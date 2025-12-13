import React from 'react';
import styles from './styles.module.scss';
import type { TableProps } from '@/types/table';

const Table = <T,>({
  columns,
  data,
  onRowClick,
  keyExtractor,
  className = '',
}: TableProps<T>) => {
  const handleRowClick = (item: T) => {
    if (onRowClick) {
      onRowClick(item);
    }
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={styles.header}
                style={{
                  width: column.width || 'auto',
                  textAlign: column.align || 'left',
                }}
              >
                <p>{column.title}</p>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={keyExtractor(item)}
              className={styles.row}
              onClick={() => handleRowClick(item)}
              style={{ cursor: onRowClick ? 'pointer' : 'default' }}
            >
              {columns.map((column) => (
                <td
                  key={`${keyExtractor(item)}-${column.key}`}
                  className={styles.cell}
                  style={{ textAlign: column.align || 'left' }}
                  data-label={column.title}
                >
                  {column.render
                    ? column.render(item, index)
                    : (item[column.key as keyof T] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
