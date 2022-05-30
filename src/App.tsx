import Pings from "./components/Pings";
import { Grid } from "@mui/material";
import "./GlobalStyles.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Main } from "./layout/Main";
import Status from "./components/Status";
import DashboardCard from "./components/DashboardCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Grid container spacing={5}>
          <Grid item xs={4} component="section">
            <DashboardCard title="Status of service">
              <Status />
            </DashboardCard>
          </Grid>
          <Grid item xs={8} component="section">
            <DashboardCard title="Ping service">
              <Pings />
            </DashboardCard>
          </Grid>
        </Grid>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
