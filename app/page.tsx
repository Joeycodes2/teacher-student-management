"use client";

import react from "react";
import { useState, useEffect } from "react";

interface Teacher {
  _id: string;
  title: string;
  name: string;
  surname: string;
  dob: string;
  NIN: string;
  phoneNumber: string;
  salary: string;
}

interface Student {
  _id: string;
  name: string;
  surname: String;
  dob: string;
  NIN: string;
  phoneNumber: string;
}

function Home(req: Request, res: Response) {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teacherRes = await fetch("/pages/api/registeredTeachers");
        const studentRes = await fetch("/pages/api/registeredStudents");

        const teacher = await teacherRes.json();
        const student = await studentRes.json();
        console.log("THIS IS THE RES: ", teacher, student);

        setTeachers(teacher);
        setStudents(student);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading state to false after fetching (regardless of success or error)
      }
    };

    fetchData();
  }, []);

  if (isLoading)
    return (
      <p className="text-2xl text-green-700 font-bold rounded-2xl bg-slate-500 items-center">
        Loading Teachers...
      </p>
    );

  return (
    <div
      className="container h-screen mx-auto mt-20 pt-16 max-w-full flex flex-wrap 
    justify-between bg-gradient-to-r from-violet-400 to-fuchsia-400"
    >
      <div className="mx-auto pt-6 mt-2 items-center">
        <h1 className="text-2xl font-bold">THE TEACHER-STUDENT PORTAL</h1>
      </div>
      <p className="mx-8 font-semibold items-center">
        Welcome to the board official portal for Teachers and students database
        registration and identification. The onboarding process includes
        registering as a new user and this requires completing the registration
        form with your correct credentials. Upon submission your credentials
        will automatically be uploaded to the database and Name added to the
        portal ledger
      </p>

      <div className="flex flex-row w-full py-6 px-12 bg-gradient-to-r from-violet-400 to-fuchsia-400 justify-between">
        <div className="card max-w-xl md:w-1/2 mx-2 rounded-lg shadow-md p-2 bg-fuchsia-500">
          <div className="card-title bg-gray-200 px-4 py-2 rounded-t-lg">
            <h1 className="text-2xl font-bold items-center">
              Registered Teachers
            </h1>
          </div>
          <ul className="mb-2 font-bold cursor-pointer">
            {teachers.map((teacher) => (
              <li key={teacher._id}>
                <div className="flex text-lg m-2 text-white gap-1">
                  <p>{teacher.title}</p>
                  <p>{teacher.name}</p>
                  <p>{teacher.surname}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card max-w-xl md:w-1/2 sm:mx-2 rounded-lg shadow-md p-2 bg-fuchsia-600">
          <div className="card-title bg-gray-200 px-4 py-2 rounded-t-lg">
            <h1 className="text-2xl font-bold items-center">
              Registered Students
            </h1>
          </div>
          <ul className="mb-2 cursor-pointer">
            {students.map((student) => (
              <li key={student._id}>
                <div className="flex text-lg m-2 text-white gap-1">
                  <p className="font-bold">{student.name}</p>
                  <p className="font-bold">{student.surname}</p>
                  <p>{student.dob}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
