import React from "react";
import image from "./assets/contact-image.jpg";
import { Button, Checkbox, Form, Input } from "antd";

const ContactForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="row g-0 mx-10" style={{ height: "90vh" }}>
      <div className="col-6 bg-[#0AB5D3] flex gap-6 flex-col justify-center items-center text-white">
        {/* <img src={image} alt="contact-image" style={{width:"100%",height:"100%",objectFit:"cover"}}/> */}
        <h1 className="text-5xl font-bold">Let`s Chat</h1>
        <p className="text-center w-full px-8 text-2xl">
          Whether you have a question, want to start a project or simply want to
          connect.
        </p>
        <p className="text-center w-full px-16 text-2xl">
          Feel free to send me message in the contact form.
        </p>
      </div>
      <div className="col-6 bg-white flex flex-col justify-center items-center gap-3">
        <h1 className="text-slate-700 text-3xl font-bold">Contact Form</h1>
        <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
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
      </div>
    </div>
  );
};

export default ContactForm;
