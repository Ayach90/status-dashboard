import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

type Props = {
  children: JSX.Element;
  title: string;
};

const DashboardCard = ({ children, title }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" pb="10px">
          {title}
        </Typography>
        <Divider variant="fullWidth" sx={{ marginBottom: "10px" }} />
        <Box>{children}</Box>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
