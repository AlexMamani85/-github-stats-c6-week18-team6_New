import { useState } from "react";
import styled from "@emotion/styled";
import { useAuth } from "../context/auth.context";
import Input from "../components/input/input";
import {updateUser} from '../services/user-service'
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const ProfilePage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    email: user.email,
    password: user.password,
    first_name: user.first_name,
    last_name: user.last_name,
  });


  const { email, password, first_name, last_name } = formData;

  const PageTitle = styled.h1`
  color: ${colors.black};
  font-size: ${typography.head.md};
  line-height: ${typography.head.md};
  text-align: center;
  font-weight: 400;
`;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser(formData)
  };
  console.log('profile')
  return (
    <>
      <PageTitle> Profile Page </PageTitle>
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
        <input type="submit" value="Update" />

      </form>
    </>

  );
};

export default ProfilePage;