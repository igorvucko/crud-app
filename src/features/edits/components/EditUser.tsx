import { Modal, Form, Input } from "antd";
import { User } from "../../users/types/UserTypes";
import { useEffect } from "react";

interface Props {
  user: User;
  onClose: () => void;
  onSave: (updatedUser: User) => void;
}

const EditUser = ({ user, onClose, onSave }: Props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(user);
  }, [user]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onSave({ ...user, ...values });
    });
  };

  return (
    <Modal open onCancel={onClose} onOk={handleOk} title="Uredi korisnika">
      <Form form={form} layout="vertical">
        <Form.Item name="firstName" label="Ime" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="lastName" label="Prezime" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Adresa">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
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

export default EditUser;