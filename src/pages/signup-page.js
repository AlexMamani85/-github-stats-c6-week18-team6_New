import { useState } from "react";
import { useAuth } from "../context/auth.context";
import Input from "../components/input/input";

const SingupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const { signup } = useAuth();

  const { email, password, first_name, last_name } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        label="Email"
        placeholder="Example@mail.com"
        required
      />
      <Input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        required
        label="Password"
        placeholder="********"
      />
      <Input
        name="first_name"
        value={first_name}
        onChange={onChange}
        label="First Name"
        placeholder="John"
      />
      <Input
        name="last_name"
        value={last_name}
        onChange={onChange}
        label="Last Name"
        placeholder="Doe"
      />
      <input type="submit" value="Signup" />
    </form>
  );
};

export default SingupPage;
