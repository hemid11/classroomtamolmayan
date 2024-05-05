import React from 'react'
import { Tabs } from 'antd';
import Teachers from './Teachers';
import Students from './Students';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Teachers',
    children: <Teachers/>,
  },
  {
    key: '2',
    label: 'Students',
    children: <Students/>,
  },

];
const LoginTab = () => {
    return (
        <>
           <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}

export default LoginTab