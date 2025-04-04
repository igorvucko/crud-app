import { Form, Input } from "antd";

const EditUser = () => {
  return (
    <>
      <Form.Item name="firstName" label="Ime">
        <Input />
      </Form.Item>
      <Form.Item name="lastName" label="Prezime">
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
    </>
  );
};

export default EditUser;