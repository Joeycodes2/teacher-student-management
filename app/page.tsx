"use client";

import { useState, useEffect } from "react";
import Student from "@/models/student";
import Teacher from "@/models/teacher";

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

export default function Home() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teacherRes = await fetch("/pages/api/registeredTeachers");
        const studentRes = await fetch("/pages/api/registeredStudents");

        const teacher = await teacherRes.json();
        const student = await studentRes.json();
        // console.log("THIS IS THE RES: ", teacher, student);

        setTeachers(teacher);
        setStudents(student);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="flex flex-col max-h-full w-screen md:max-h-full lg:max-h-full xl:max-h-full pt-20 2xl:max-h-full
      bg-gradient-to-r from-violet-400 to-fuchsia-400 items-center"
    >
      <div className="text-center py-6 px-2 mt-2 items-center">
        <h1 className="text-center text-2xl font-bold items-center">
          A TEACHER-STUDENT DATABOARD
        </h1>
      </div>
      <p className="text-center text-sm p-4 font-semibold items-center">
        Welcome to the board official portal for Teachers and students database
        registration and identification. The onboarding process includes
        registering as a new user and this requires completing the registration
        form with your correct credentials. Upon submission your credentials
        will automatically be uploaded to the database and data added to the
        portal ledger
      </p>

      <div
        className="flex flex-col w-screen py-6 px-12 bg-gradient-to-r from-violet-400
       to-fuchsia-400 items-center md:items-center lg:items-center xl:items-center"
      >
        <div
          className="card my-2 max-w-md md:max-w-md lg:max-w-lg xl:max-w-xl md:w-1/2 mx-2 
        rounded-lg shadow-md p-2 bg-gray-300 "
        >
          <div className="card-title bg-gray-200 px-4 py-2 rounded-t-lg items-center">
            <h1 className="text-2xl font-bold items-center">
              Registered Teachers
            </h1>
          </div>
          <ul className="mb-2 font-bold cursor-pointer">
            {teachers?.map((teacher) => (
              <li key={teacher._id}>
                <div className="flex text-sm m-2 p-1 text-white gap-1 bg-violet-700 rounded-lg">
                  <p>{teacher.title}</p>
                  <p>{teacher.name}</p>
                  <p>{teacher.surname}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="card max-w-md md:max-w-md lg:max-w-lg xl:max-w-xl md:w-1/2 
        mx-2 rounded-lg shadow-md p-2 bg-gray-300"
        >
          <div className="card-title bg-gray-200 px-4 py-2 rounded-t-lg items-center">
            <h1 className="text-2xl font-bold items-center">
              Registered Students
            </h1>
          </div>
          <ul className="mb-2 cursor-pointer">
            {students?.map((student) => (
              <li key={student._id}>
                <div className="flex text-sm m-2 p-1 text-white gap-1 bg-violet-700 rounded-lg">
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
