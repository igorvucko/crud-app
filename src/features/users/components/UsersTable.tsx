import { Table, Button, Popconfirm } from "antd";
import { User } from "../../users/types/UserTypes";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: number) => void;
  openAddModal: () => void;
  onAdd:(user:User) => void;
}

const UsersTable = ({ users, onEdit, onDelete, openAddModal }: Props) => {
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
              <>
                <Button
                  onClick={() => onEdit(user)}
                  style={{ marginRight: 8 }}
                >
                  Izmijeni
                </Button>
                <Popconfirm
                  title="Jeste li sigurni da želite obrisati korisnika?"
                  onConfirm={() => onDelete(user.id)}
                  okText="Da"
                  cancelText="Ne"
                >
                  <Button danger>Obriši</Button>
                </Popconfirm>
              </>
            ),
          },
        ]}
      />

      <Button
        type="primary"
        onClick={openAddModal}
        style={{ marginTop: 16 }}
      >
        Dodaj
      </Button>
    </>
  );
};

export default UsersTable;