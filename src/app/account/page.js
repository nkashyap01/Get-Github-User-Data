import { redirect } from "next/navigation";

export default function Account() {
  const userProfile = null;
  if (userProfile == null) redirect("profile");
  return <h1> Account page</h1>;
}
