import { Table, Button } from "antd";
import { User } from "../types";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
}

const UsersTable = ({ users, onEdit }: Props) => {
  return (
    <Table
      dataSource={users}
      rowKey="id"
      columns={[
        { title: "Ime", dataIndex: "firstName" },
        { title: "Prezime", dataIndex: "lastName" },
        { title: "Adresa", dataIndex: "address" },
        { title: "Email", dataIndex: "email" },
        { title: "Telefon", dataIndex: "phone" },
        { title: "OIB", dataIndex: "oib" },
        {
          title: "Akcije",
          render: (_, user) => (
            <Button onClick={() => onEdit(user)}>Izmijeni</Button>
          ),
        },
      ]}
    />
  );
};

export default UsersTable;