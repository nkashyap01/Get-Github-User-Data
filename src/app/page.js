import Image from "next/image";
const home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
