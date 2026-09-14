import {  Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
    
    export default function StudentDetails() {
        const location = useLocation();
        const { Students } = location.state;
        
        if (!Students) {
            return (<div><h1>Student not found</h1>
                <Link to="/students">Students List</Link>

            </div>

            );
        }

        return (
            <div>
                <h1>Student Details</h1>
                <p>Student Name: {Students.name}</p>
                <p>Student No.: {Students.id}</p>
                <p>Student Age: {Students.age}</p>
                <p>Student Grade: {Students.grade}</p>
                <Link to="/students">Students List</Link>
            </div>
        );
    }