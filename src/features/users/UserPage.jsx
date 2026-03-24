import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userActions";

export default function UsersPage() {
  const dispatch = useDispatch();

  const { list, loading } = useSelector((state) => state.users);

  return (
    <div>
      <h2>Users</h2>

      <button onClick={() => dispatch(fetchUsers())}>
        Load Users
      </button>

      {loading && <p>Loading...</p>}

      {list.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}