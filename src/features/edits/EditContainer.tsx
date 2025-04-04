import { Modal, Form, Input } from "antd";
import { useEffect } from "react";
import { User } from "../users/types/UserTypes";
import { toast } from "react-toastify";

interface Props {
  user: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
}

const EditContainer = ({ user, onClose, onSave }: Props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        ...user,
        oib: user.oib ? String(user.oib) : "",
      });
    }
  }, [user, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedUser = { ...user, ...values } as User;
        onSave(updatedUser);
        toast.success("Uspješno ste izmijenili podatke!");
        onClose();
      })
      .catch(() => {
        toast.error("Došlo je do pogreške")
      });
  };

  return (
    <Modal open={!!user} onCancel={onClose} onOk={handleOk} title="Uredi korisnika">
      <Form form={form} layout="vertical">
        <Form.Item
          name="firstName"
          label="Ime"
          rules={[{ required: true, message: "Ime je obavezno" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Prezime"
          rules={[{ required: true, message: "Prezime je obavezno" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Adresa">
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email je obavezan" },
            { type: "email", message: "Email nije ispravan" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Telefon"
          rules={[
            { required: true, message: "Telefon je obavezan" },
            {
              pattern: /^(\+385|0)[0-9]{8,9}$/,
              message: "Telefon nije ispravan",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="oib"
          label="OIB"
          rules={[
            { required: true, message: "OIB je obavezan" },
            {
              pattern: /^\d{11}$/,
              message: "OIB mora sadržavati točno 11 znamenki",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditContainer;