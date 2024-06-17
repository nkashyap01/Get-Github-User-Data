async function fetchListOfUsers() {
  try {
    const apiResponse = await fetch("http://dummyjson.com/users");
    const result = await apiResponse.json();

    return result.users;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function ServerSideDataFetching() {
  const listOfUsers = await fetchListOfUsers();
  console.log(listOfUsers);
  return (
    <div>
      <h1> Server Side Data Fetching </h1>
    </div>
  );
}
