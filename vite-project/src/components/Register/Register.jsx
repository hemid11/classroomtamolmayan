import React from 'react'
import StudentsR from './StudentsR';
import TeacherR from './TeacherR'
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Teachers',
    children: <TeacherR/>,
  },
  {
    key: '2',
    label: 'Students',
    children: <StudentsR/>,
  },

];
const Register = () => {
    return (
        <>
           <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}

export default Register