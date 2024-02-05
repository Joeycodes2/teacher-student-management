"use client";

import { useState } from "react";
import axios from "axios";

const StudentForm: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [NIN, setNIN] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate Date of Birth
    const dobDate = new Date(dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();

    if (age > 22) {
      setError("Age may not be more than 22.");
      return;
    }

    // Make API request to store student details
    try {
      await axios
        .post("/api/students", { name, surname, dob, NIN, phoneNumber })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 w-[500px]">
        <h1 className="text-xl font-bold my-4 text-zinc-600">
          Student Registration
        </h1>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="bg-inherit"
          />
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Surname"
            required
            className="bg-inherit"
          />
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Date of birth"
            required
            className="bg-inherit"
          />
          <input
            type="text"
            value={NIN}
            onChange={(e) => setNIN(e.target.value)}
            placeholder="National ID Number"
            required
            className="bg-inherit"
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone number"
            required
            className="bg-inherit"
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-bold px-6 py-2 my-1 cursor-pointer 
             hover:bg-zinc-500 tracking-wider hover:text-green-500"
          >
            Add Student
          </button>
        </form>
        <a href="/" className="group transition-color hover:text-zinc-700">
          <h2 className={`text-sm font-semibold`}>
            Back to home{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </div>
  );
};

export default StudentForm;
