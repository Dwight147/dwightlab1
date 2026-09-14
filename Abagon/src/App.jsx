
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Students from './pages/Students.jsx';
import StudentDetails from './Pages/StudentDetails.jsx';
import AddStudent from './pages/AddStudent.jsx';    


export default function App(){

return (
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/add-student" element={<AddStudent />} />
    </Routes>
  </BrowserRouter>
);
}
