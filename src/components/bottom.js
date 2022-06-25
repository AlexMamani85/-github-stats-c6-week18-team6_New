import styled from "@emotion/styled";
import { FaSearch, FaUser, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { colors } from "../styles";

const BottomDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  height: 66px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const linksData = [
  {
    href: "search",
    icon: <FaSearch size={25} />,
  },
  {
    href: "profile",
    icon: <FaUser size={25} />,
  },
  {
    href: "favorites",
    icon: <FaStar size={25} />,
  },
];

const Bottom = () => {
  return (
    <BottomDiv>
      {linksData.map((e) => (
        <NavLink
          to={e.href}
          style={({ isActive }) => ({
            color: isActive ? colors.yellow[500] : colors.black,
          })}
        >
          {e.icon}
        </NavLink>
      ))}
    </BottomDiv>
  );
};

export default Bottom;
