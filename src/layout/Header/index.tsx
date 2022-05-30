import { Typography } from "@mui/material";
import Logo from "../../components/Logo";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo width="200px" />
      <Typography variant="h6" component="h1">
        Status dashboard
      </Typography>
    </HeaderContainer>
  );
};

export default Header;
