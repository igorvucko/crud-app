import { Table, Button } from "antd";
import { User } from "../../users/types/UserTypes";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onAdd: (user: User) => void;
  openAddModal: () => void;
}

const UsersTable = ({ users, onEdit, openAddModal }: Props) => {
  return (
    <>


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
      <Button
        type="primary"
        onClick={openAddModal}
        style={{ marginBottom: 16 }}
      >
        Dodaj
      </Button>
    </>
  );
};

export default UsersTable;