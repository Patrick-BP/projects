import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import AddUser from './Routes/Users/AddUser'
import EditUser from './Routes/Users/EditUser'
import User from './Routes/Users/User'
import AddCourse from './Routes/Courses/AddCourse'
import Course from './Routes/Courses/Course'
import CoursesList from './Routes/Courses/CoursesList'
import Nav from './Routes/Nav'
import UserList from './Routes/Users/UsersList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nav/>
  <Routes>
  <Route path ='/' element={<UserList />}></Route>
    <Route path ='/users' element={<UserList />}></Route>
    <Route path ='/users/add' element={<AddUser />}></Route>
    <Route path ='/users/:id' element={<User  />}></Route>
    <Route path ='/users/edit/:id' element={<EditUser/>}></Route>
   

   <Route path='courses' element={<CoursesList/>}>
    <Route path='add' element={<AddCourse/>}></Route>
    <Route path=':courseId' element={<Course/>}></Route>
   </Route>
   
    
    <Route extract path ='*' element={<><div className='container fs-1 text-center'>PAGE NOT FOUND </div><Link to="/users"><p className='container fs-5 text-center'>Home</p></Link></>}></Route>
  </Routes>
  </BrowserRouter>
    
);
