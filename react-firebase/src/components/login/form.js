import { Button, Form, Input, message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "services/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, success, error } = useSelector((state) => state.authReducer);

  const onFinish = (values) => {
    dispatch(userLogin(values));
  };

  useEffect(() => {
    success && navigate("/");
    error && message.error(error);
  }, [success, error]);

  return (
    <Form name="login" onFinish={onFinish} layout="vertical" className="login-form">
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!"
          },
          { type: "email", message: "Email is not valid!" }
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
            message: "Please input your password!"
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
