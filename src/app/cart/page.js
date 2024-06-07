"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {
  const pathName = usePathname();
  console.log(pathName);
  const searchParams = useSearchParams();
  console.log(searchParams.get("search"), searchParams.get("randomValue"));
  return <h1> This is cart page </h1>;
}
