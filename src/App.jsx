import { useEffect, useState } from "react";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL + "/students";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setStudents(data);
  };

  const addStudent = async (student) => {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    loadStudents();
  };

  const updateStudent = async (id, student) => {
    await fetch(`${API_URL}/${id}`, {
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

    await fetch(`${API_URL}/${id}`, {
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