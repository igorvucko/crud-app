import { useState, useEffect } from "react";
import UsersTable from "../users/components/UsersTable";
import { User } from "../users/types/UserTypes";
import EditContainer from "../edits/EditContainer";
import AddContainer from "../adds/AddContainer";
import { dummyUsers } from "./utils/dummyUsers";
import { saveUsers } from "./utils/utils";
import { toast } from "react-toastify";

const UsersContainer = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isAddOpen, setIsAddOpen] = useState(false);

  useEffect(() => {
    setUsers(dummyUsers);
  }, []);

  const handleDelete = (userId:number) => {
    const updatedUsers = users.filter((user) => user.id !== userId)
    saveUsers(updatedUsers);
    setUsers(updatedUsers);
    toast.success("Korisnik je obrisan");
  }

  const handleAddUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  const handleSaveUser = (updatedUser: User) => {
    setUsers((prev) =>
prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
    setEditingUser(null);
  };

  const openAddModal = () => {
    setIsAddOpen(true);
  };

  return (
    <>
      <UsersTable
        users={users}
        onEdit={handleEditUser}
        onAdd={handleAddUser}
        openAddModal={openAddModal}
        onDelete={handleDelete}
      />

      <AddContainer
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={handleAddUser}
      />

      <EditContainer
        user={editingUser}
        onClose={() => setEditingUser(null)}
        onSave={handleSaveUser}
      />
    </>
  );
};

export default UsersContainer;