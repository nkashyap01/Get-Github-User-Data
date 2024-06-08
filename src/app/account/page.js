import { redirect } from "next/navigation";

export default function Account() {
  const userProfile = null;
  if (userProfile == null) redirect("products?search=product1&randomValue=neha");
  return <h1> Account page</h1>;
}
