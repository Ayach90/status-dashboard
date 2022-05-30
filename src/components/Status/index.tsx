import { Button, Typography, CircularProgress, Box } from "@mui/material";
import useGetStatus from "../../hooks/useGetStatus";
import CircleIcon from "@mui/icons-material/Circle";
import { StatusList, StatusListItem } from "./styles";
import { format } from "date-fns";

const Status = () => {
  const [status, getStatus] = useGetStatus();
  return (
    <div className="App">
      {status ? (
        <>
          <StatusList>
            <StatusListItem>
              <Typography
                component="p"
                variant="h6"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <CircleIcon
                  sx={{ color: status.service ? "#16d916" : "#d91616" }}
                />
                Service is {status.service ? "Up" : "Down"}
              </Typography>
            </StatusListItem>
            <StatusListItem>
              <Typography
                variant="caption"
                component="p"
              >{`Version: ${status.version}`}</Typography>
            </StatusListItem>
            <StatusListItem>
              <Typography variant="caption" component="p">{`Timestamp: ${format(
                status.date,
                "dd/MM/yyyy - HH:mm:ss (OOOO)"
              )}`}</Typography>
            </StatusListItem>
          </StatusList>
          <Button onClick={getStatus} variant="contained" fullWidth>
            Check Status
          </Button>
        </>
      ) : (
        <Box display="flex" margin="50px" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default Status;
