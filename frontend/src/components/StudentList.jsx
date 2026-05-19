import { useContext } from "react";
import StudentContext from "../context/StudentContext";

const StudentList = () => {
    // const h2Element = React.createElement("h1", null, "Hello");
    const studentName = useContext(StudentContext)
    return (
        <>
            <h1>Hello</h1>
            {/* { h2Element } */}
            <p>Welcome {studentName}</p>
        </>
    )
}

export default StudentList
