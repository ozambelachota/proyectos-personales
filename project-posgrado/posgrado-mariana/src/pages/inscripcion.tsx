import { Typography, Container, Box } from "@mui/material";
import FormInscripcion from "../components/inscripcion.component";

const Inscripcion = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#06B24B",
      }}
    >
      <div>
        <Container
          style={{
            display: "flex",
            margin: "20 px 9px 9px 9px",
            justifyContent: "center",
          }}
          maxWidth="lg"
        >
          <img
            src={"./src/assets/LogoPosgradoSF.png"}
            alt="Imagen"
            style={{ width: "100px", height: "140px" }}
          />
          <Box
            height="100%"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            margin={"px 0 15px 0"}
          >
            <Typography color={"white"} variant="h3">
              UNIVERSIDAD NACIONAL DE UCAYALI
            </Typography>
            <Typography color={"white"} variant="h4">
              ESCUELA DE POSGRADO
            </Typography>
          </Box>
        </Container>
      </div>
      <Container
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <FormInscripcion />
      </Container>
    </div>
  );
};

export default Inscripcion;
