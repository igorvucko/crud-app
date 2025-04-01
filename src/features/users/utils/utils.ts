import { User } from "../types/UserTypes";


export const getUsers = (): User[] => {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
};

export const saveUsers = (users: User[]) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const plantUsers = () => {
  if (!localStorage.getItem("users")) {
    saveUsers([
      {
        id: 1,
        firstName: "Pero",
        lastName: "Perić",
        address: "Bračka 12",
        email: "ana@example.com",
        phone: "0975435435",
        oib: "10234512312",
      },
      {
        id: 2,
        firstName: "Savo",
        lastName: "Savić",
        address: "Vinkovačka 5",
        email: "ivan@example.com",
        phone: "092345513",
        oib: "10986546537",
      },
    ]);
  }
};