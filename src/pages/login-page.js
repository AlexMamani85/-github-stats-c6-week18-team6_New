import { useState } from "react";
import Input from "../components/input/input";
import { useAuth } from "../context/auth.context";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            label="Email"
            placeholder="Example@mail.com"
            required
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            label="Password"
            placeholder="********"
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
