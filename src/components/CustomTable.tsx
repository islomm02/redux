import React, { useState } from 'react';
import { Divider, Table } from 'antd';
import type { TableProps } from 'antd';
import { useDispatch } from 'react-redux';
import { saveUsers } from '../redux/userSlice';

export interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  surname: string;
}

export interface User {
  key: string;
  name: string;
  surname: string;
  age: number;
  address: string;
  email: string;
}



const CustomTable: React.FC<{ columns: any; data?: DataType[] }> = ({ columns, data }) => {
  const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const dispatch = useDispatch();

  const rowSelection: TableProps<DataType>['rowSelection'] = {
  onChange: (_selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    const users: User[] = selectedRows.map(row => ({
      key: row.key.toString(),
      name: row.name,
      surname: row.surname,
      age: row.age,
      address: row.address,
      email: ''
    }));

    dispatch(saveUsers(users));
  },
};

  

  return (
    <div>
      <Divider />
      <Table<DataType>
        rowSelection={{ type: selectionType, ...rowSelection }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default CustomTable;
