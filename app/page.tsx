import TeacherForm from "../components/TeacherForm";
import StudentForm from "../components/StudentForm";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center p-2 mt-5">
      <h1 className="text-xl font-bold my-2 mx-4 text-green-700 items-center">
        Teacher and Student Management:
      </h1>
      <div className="flex flex-row gap-2">
        <TeacherForm />
        <StudentForm />
        {/* Display the list of teachers and students here */}
      </div>
    </div>
  );
}
