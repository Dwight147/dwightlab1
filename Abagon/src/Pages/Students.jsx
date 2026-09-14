import StudentData from '../Data/Students.json';
import Student from '../Components/Student';
 
export default function Students() {
    return (
        <div>
            <h1>Students List</h1>
            {StudentData.map((student) => (
                <Student id={student.id} name={student.name} age={student.age} grade={student.grade} />
            ))}
        </div>
    );
}
