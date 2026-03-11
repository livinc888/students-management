import { useEffect, useState } from "react";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const res = await fetch("http://localhost:3000/students");
    const data = await res.json();
    setStudents(data);
  };

  const addStudent = async (student) => {
    await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    loadStudents();
  };

  const updateStudent = async (id, student) => {
    await fetch(`http://localhost:3000/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    setEditingStudent(null);
    loadStudents();
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    await fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    });

    loadStudents();
  };

  return (
    <div className="container">

      <h1>Students Management</h1>

      <StudentForm
        addStudent={addStudent}
        updateStudent={updateStudent}
        editingStudent={editingStudent}
      />

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
        setEditingStudent={setEditingStudent}
      />

    </div>
  );
}

export default App;