import styled from "@emotion/styled";
import LoginPage from "./pages/login-page";
import { colors } from "./styles/colors";
import { typography } from "./styles/typography";

const PageTitle = styled.h1`
  color: ${colors.black};
  font-size: ${typography.head.md};
  line-height: ${typography.head.md};
  text-align: center;
  font-weight: 400;
`;

const UnauthenticatedApp = () => {
  return (
    <div>
      <PageTitle>Welcome to Github Stats</PageTitle>
      <LoginPage />
    </div>
  );
};

export default UnauthenticatedApp;
