"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

function TeacherForm() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [NIN, setNIN] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate Date of Birth
    const dobDate = new Date(dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();

    // Make API request to store teacher details
    try {
      const resExists = await fetch("pages/api/teacherExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ NIN }),
      });
      const { teacher } = await resExists.json();

      console.log("This is the Teacher NIN: ", teacher);

      if (age < 21) {
        setError("Age must be at least 21 and above.");
        return;
      }

      if (teacher) {
        setError("Teacher already exists!");
        return;
      } else {
        const res = await fetch("pages/api/teachers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            name,
            surname,
            dob,
            NIN,
            phoneNumber,
            salary,
          }),
        });

        if (res.ok) {
          setTitle("");
          setName("");
          setSurname("");
          setDob("");
          setNIN("");
          setPhoneNumber("");
          setSalary("");
          setError("");
          router.push("/");
        } else {
          console.log("Registration failed.");
        }
      }
    } catch (error) {
      console.log("Error during registraton: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen w-screen mt-10">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-violet-400 w-[400px] md:max-w-md lg:w-[900px] xl:w-[900px]">
        <h1 className="text-xl font-bold my-4 text-zinc-600">
          Teacher Registration
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title:  Mr, Mrs, Miss, Dr, Prof"
            required
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Surname"
            required
          />
          <input
            className="text-zinc-400 hover:text-green-900"
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Date of Birth"
            required
          />
          <input
            type="text"
            value={NIN}
            onChange={(e) => setNIN(e.target.value)}
            placeholder="National ID number"
            required
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone number"
            required
          />
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Salary: optional"
          />
          <button
            className="bg-zinc-400 text-white font-bold px-6 py-2 my-1 cursor-pointer 
             hover:bg-violet-400 tracking-wider hover:text-zinc-900"
          >
            Add Teacher
          </button>

          {error && (
            <div className="bg-red-700 text-sm text-white py-1 px-3 w-fit rounded-md tracking-wide">
              {error}
            </div>
          )}

          <Link
            href="/"
            className="group transition-color text-fuchsia-500 hover:text-zinc-500"
          >
            <h2 className={`text-sm font-semibold underline`}>
              Back to home{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                =&gt;
              </span>
            </h2>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default TeacherForm;
