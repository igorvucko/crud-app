import { Form, Input, Button } from "antd";
import { User } from "../../users/types/UserTypes";
import { toast } from 'react-toastify';

interface Props {
  onAdd: (user: User) => void;
}

const AddUser = ({ onAdd }: Props) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: Omit<User, "id">) => {
    const newUser: User = {
      ...values,
      id: Date.now(),
    };
    onAdd(newUser);
    form.resetFields();
    toast.success( "Uspješno ste dodali novog korisnika!");
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item name="firstName" label="Ime" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="lastName" label="Prezime" rules={[{ required: true }]}>
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
      <Form.Item name="oib" label="OIB"
      rules={[
        {
          required:true,
          message:"OIB je obavezab"
        },
        {
          pattern: /^\d{11}$/ ,
          message :"OIB mora sadržavati točno 11 znamenki",
        },
      ]}
      >
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Spremi
      </Button>
    </Form>
  );
};

export default AddUser;