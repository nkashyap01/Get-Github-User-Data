"use client";
import Image from "next/image";
import { useState } from "react";
const home = () => {
  const [value, setValue] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <User name="neha" />
      <User name="neha" />
      <h1> Hello Next </h1>
    </main>
  );
};

const User = ({ name }) => {
  return (
    <div>
      <h1> Hello {name} </h1>
    </div>
  );
};

export default home;
