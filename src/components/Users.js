import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h1>user1</h1>
      <h1>user2</h1>
      <h1>user3</h1>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
        {showActiveUsers ? (
          <h1>Showing active users</h1>
        ) : (
          <h1>Showing All users</h1>
        )}
      </div>
    </div>
  );
};

export default Users;
