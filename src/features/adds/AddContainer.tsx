import { Modal } from "antd";
import AddUser from "./components/AddUser";
import { User } from "../users/types/UserTypes";


interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (user: User) => void;
}

const AddContainer = ({ open, onClose, onAdd }: Props) => {
  const handleAdd = (user: User) => {
    onAdd(user);
    onClose();
  };

  return (
    <Modal open={open} onCancel={onClose} footer={null} title="Dodaj korisnika">
      <AddUser onAdd={handleAdd}
       />
    </Modal>
  );
};

export default AddContainer;