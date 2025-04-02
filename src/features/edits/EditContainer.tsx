import { Modal, Form, Input } from "antd";
import { User } from "../users/types/UserTypes";
import { toast } from "react-toastify";
interface Props {
  user: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
}

const EditContainer = ({ user, onClose, onSave }: Props) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      const updatedUser = { ...user, ...values } as User;
      onSave(updatedUser);
      toast.success(`Uspješno ste izmijenili podatke !`);
    });
  };

  return (
    <Modal
      open={!!user}
      onCancel={onClose}
      onOk={handleOk}
      title="Uredi korisnika"
    >
      <Form form={form} initialValues={user ?? {}}>
        <Form.Item name="firstName" label="Ime" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="lastName" label="Prezime" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Adresa">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Telefon">
          <Input />
        </Form.Item>
        <Form.Item name="oib" label="OIB">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditContainer;