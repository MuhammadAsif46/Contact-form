import React from "react";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";

const AntdForm = ({setIsTrue}) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    if (values) {
      setIsTrue(false)
    }

  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-full p-4">
      <Form className="flex flex-wrap"
        name="basic"
        
        wrapperCol={{
          span: 25,
        }}
        style={{
          width:"100%",
        }}
        initialValues={{remember: true,}}
        
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          
          style={{width: "50%",}}
          rules={[
            {
              required: true,
              message: "Enter your username!",
            },
          ]}
        >
          <Input style={{height:"40px"}} placeholder="Username"/>
        </Form.Item>
        <Form.Item
          name="email"
          wrapperCol={{
            offset:1
          }}
          style={{width: "50%",}}
          rules={[
            {
              required: true,
              message: "Enter your email!",
            },
          ]}
        >
          <Input style={{height:"40px"}}  placeholder="Email"/>
        </Form.Item>
        <Form.Item
          name="phone"
          style={{width:"50%"}}
          rules={[
            {
              required: true,
              message: "Enter your number!",
            },
          ]}
        >
          <InputNumber style={{width:"100%",height:"40px"}} placeholder="Phone"/>
        </Form.Item>
        <Form.Item
          name="subject"
          wrapperCol={{offset:1}}
          style={{width:"50%"}}
          rules={[
            {
              required: true,
              message: "Enter your subject!",
            },
          ]}
        >
          <Input style={{height:"40px"}} placeholder="Subject"/>
        </Form.Item>
        <Form.Item
          name="textarea"
          style={{width:"100%"}}
          rules={[
            {
              required: true,
              message: "Enter description!",
            },
          ]}
        >
          <TextArea rows={7} placeholder="Description"/>
        </Form.Item>

        <Form.Item
        style={{width:"100%"}}
         
        >
          <Button className="bg-[#0AB5D3] text-white" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AntdForm;
