import React, { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from '@tanstack/react-table';
import { searchFolders } from './searchConfig';

export default function Search() {
  const data = [
    { id: 1, name: 'Container A', status: 'Active', amount: 10 },
    { id: 2, name: 'Container B', status: 'Inactive', amount: 5 },
    { id: 3, name: 'Container C', status: 'Active', amount: 20 }
  ];

  const [activeOnly, setActiveOnly] = useState(false);

  // Only depend on activeOnly
  const columns = useMemo(() => {
    console.log('mememo')
    return searchFolders.containers.getColumns({}, { activeOnly });
  }, [activeOnly]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Container Table</h2>
      <button onClick={() => setActiveOnly(true)}>
        Apply Filter
      </button>
      <table border="1" cellPadding="10">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell ?? cell.column.columnDef.accessorKey,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}