export const searchFolders = {
  containers: {
    type: 'container',
    getColumns: (columnTypes, filter) => {
      const columns = [
        { accessorKey: 'id', header: 'ID' },
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'status', header: 'Status' },
        { accessorKey: 'amount', header: 'Amount' }
      ];
        console.log(filter?.activeOnly +'deepan ')
      //  Add your condition here
      if (filter?.activeOnly) {
        console.log(filter?.activeOnly +'test123 ')
        return columns.filter(col => col.accessorKey !== 'status');
      }

      return columns.filter(col => col.accessorKey !== 'amount');
    }
  }
};