"use client";

import Link from "next/link";
import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [NIN, setNIN] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate Date of Birth
    const dobDate = new Date(dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();

    // Make API request to store student details
    try {
      const res = await fetch("pages/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          dob,
          NIN,
          phoneNumber,
        }),
      });
      if (age > 22) {
        setError("Age may not be more than 22.");
        return;
      }
      if (res.ok) {
        setName("");
        setSurname("");
        setDob("");
        setNIN("");
        setPhoneNumber("");
        setError("");
      } else {
        console.log("Registration failed.");
      }
    } catch (error) {
      console.log("Error during registraton: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen mt-5">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 w-[500px]">
        <h1 className="text-xl font-bold my-4 text-zinc-600">
          Student Registration
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
            type="date"
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
          <button
            className="bg-green-600 text-white font-bold px-6 py-2 my-1 cursor-pointer 
             hover:bg-zinc-500 tracking-wider hover:text-green-500"
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
            className="group transition-color text-green-400 hover:text-zinc-500"
          >
            <h2 className={`text-sm font-semibold underline`}>
              Back to home{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
