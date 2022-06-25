import styled from "@emotion/styled";
import { FaSearch, FaUser, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { colors } from "../styles";

const BottomDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 3rem;
  gap: 1rem;
  height: 66px;
  width: 100%;
  border-top: 3px solid ${colors.gray.medium};
  position: absolute;
  bottom: 0;
`;

const linksData = [
  {
    href: "profile",
    icon: <FaUser size={25} />,
  },
  {
    href: "search",
    icon: <FaSearch size={25} />,
  },
  {
    href: "favorites",
    icon: <FaStar size={25} />,
  },
];

const Bottom = () => {
  return (
    <BottomDiv>
      {linksData.map((e, i) => (
        <NavLink
          key={`bottom-link-${i + 1}`}
          to={e.href}
          style={({ isActive }) => ({
            color: isActive ? colors.yellow[500] : colors.gray.dark,
          })}
        >
          {e.icon}
        </NavLink>
      ))}
    </BottomDiv>
  );
};

export default Bottom;
