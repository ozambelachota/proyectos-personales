import { Box, Grid, Paper } from "@mui/material";
import LoginComponent from "../components/login.component";

const Home = () => {
  return (
    <>
      <Grid container style={{ height: "100vh" }} spacing={0}>
        {/* Columna 1 */}
        <Grid item xs={6}>
          <Paper
            style={{
              height: "100%",
              backgroundColor: "#0A9318",
              border: "none",
              borderRadius: "0",
            }}
          >
            <Box
              display="flex"
              flexDirection={"column"}
              justifyContent={"space-around"}
              alignItems={"center"}
              height="100%"
            >
              <img
                src={"./src/assets/LogoPosgradoSF.png"}
                alt="Imagen"
                style={{ width: "225px", height: "340px" }}
              />
              <p style={{ color: "white" }}>UNIVERSIDAD NACIONAL DE UCAYALI</p>
            </Box>
          </Paper>
        </Grid>

        {/* Columna 2 */}
        <Grid
          item
          xs={6}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Paper elevation={0} style={{ padding: 20 }}>
            <LoginComponent />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
