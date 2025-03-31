import { useState } from "react";
import { User } from "../types";
import UsersTable from "./components/UsersTable.tsx";



const UsersContainer = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);



  return (
    <>
      <UsersTable users={users} onEdit={setSelectedUser} />



    </>
  );
};

export default UsersContainer;