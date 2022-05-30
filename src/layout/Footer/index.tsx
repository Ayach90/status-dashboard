import { FooterContainer } from "./styles";
import { Typography } from "@mui/material";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterContainer>
      <Typography variant="body2">Tangelo Games - Copyright 2022</Typography>
    </FooterContainer>
  );
};

export default Footer;
