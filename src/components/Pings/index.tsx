import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import useGetPings from "../../hooks/useGetPings";
import PingsTable from "./PingsTable";

const Pings = () => {
  const [sequences, setSequences] = useState(1);
  const [pings, getPings] = useGetPings(sequences);

  return (
    <div className="App">
      {pings ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "25px",
              padding: "25px 0 ",
            }}
          >
            <TextField
              id="sequences-number"
              label="Sequences"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                width: "150px",
              }}
              defaultValue={1}
              InputProps={{
                inputProps: {
                  max: 10,
                  min: 1,
                },
              }}
              onChange={(e) =>
                setSequences(Number(e.target.value) as SetStateAction<number>)
              }
            />
            <Button onClick={() => getPings(sequences)} variant="contained">
              Ping!
            </Button>
          </Box>

          <PingsTable rows={pings} />
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <CircularProgress />
          <Typography variant="h4">Pinging! Wait please... </Typography>
        </Box>
      )}
    </div>
  );
};

export default Pings;
