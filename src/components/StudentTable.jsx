import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function StudentTable({ students, deleteStudent, setEditingStudent }) {

  const downloadExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const data = new Blob([excelBuffer], {
      type: "application/octet-stream"
    });

    saveAs(data, "students.xlsx");
  };

  return (

    <div className="table-container">

      <div className="table-header">
        <h2>Students List</h2>

        <button className="excel-btn" onClick={downloadExcel}>
          Download Excel
        </button>
      </div>

      <table className="students-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>

              <td className="actions">

                <button
                  className="edit-btn"
                  onClick={() => setEditingStudent(student)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default StudentTable;