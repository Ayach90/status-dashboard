import { Box, BoxProps } from "@mui/material";

const Logo = ({ ...props }: BoxProps) => {
  return (
    <Box {...props}>
      <img src="./logo.svg" alt="logo" width="100%" />
    </Box>
  );
};

export default Logo;
