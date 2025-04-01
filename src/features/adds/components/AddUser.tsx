import { Form, Input, Button } from "antd";
import { User } from "../../users/types/UserTypes";

interface Props {
  onAdd: (user: User) => void;
}

const AddUser = ({ onAdd }: Props) => {
  const [form] = Form.useForm();

  const handleFinish = (values: Omit<User, "id">) => {
    const newUser: User = {
      ...values,
      id: Date.now(),
    };
    onAdd(newUser);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
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

      <Button type="primary" htmlType="submit">
        Spremi
      </Button>
    </Form>
  );
};

export default AddUser;