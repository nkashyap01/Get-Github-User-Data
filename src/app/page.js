"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> welcome to Next JS </h1>
      <Link href="/products"> Navigate to product page </Link>
    </main>
  );
};

export default Home;
