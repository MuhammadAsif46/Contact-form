import React from "react";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";

const AntdForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="border w-full flex ">
      <Form className="flex flex-wrap"
        name="basic"
        // labelCol={{
        //   span: 8,
        // }}
        wrapperCol={{
          span: 20,
        }}
        style={{
          width:"100%",
        }}
        
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Enter your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Enter your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Enter your number!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="subject"
          rules={[
            {
              required: true,
              message: "Enter your subject!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="textarea"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AntdForm;
