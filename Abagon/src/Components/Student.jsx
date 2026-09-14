
import { Link } from 'react-router-dom';

export default function Student(props) {
    return (
        <div>
            <h1>Student Details</h1>
                <p>Student No. : {props.id}</p>
                <p>Student Name: {props.name}</p>
                <p>Student Age: {props.age}</p>
                <p>Student Grade: {props.grade}</p>
            <Link to={`/Students/${props.id}`} state={{ Students: props }}>View Details</Link>
        </div>
    );
}