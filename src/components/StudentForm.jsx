import { useEffect, useState } from "react";

function StudentForm({ addStudent, updateStudent, editingStudent }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setEmail(editingStudent.email);
      setAge(editingStudent.age);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !age) {
      alert("All fields are required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    const student = { name, email, age };

    if (editingStudent) {
      updateStudent(editingStudent.id, student);
    } else {
      addStudent(student);
    }

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

    </form>
  );
}

export default StudentForm;