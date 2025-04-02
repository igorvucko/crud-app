import { Form, Input, Button } from "antd";

interface Props {
  onLogin: (email: string, password: string) => void;
}

const Userlogin = ({ onLogin }: Props) => {
  const [form] = Form.useForm();

  const handleFinish = (values: { email: string; password: string }) => {
onLogin(values.email, values.password);

  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Lozinka"
        rules={[{ required: true }]}
      >
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Prijavi se
      </Button>
    </Form>
  );
};

export default Userlogin;