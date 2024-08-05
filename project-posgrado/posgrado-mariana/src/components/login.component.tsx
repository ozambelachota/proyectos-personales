import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const handleInicioSession = () => {
    navigate('/admin')
  };
  const handleInscripcion = () => {
    navigate("/inscripcion");
  };
  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        Iniciar Sesión
      </Typography>

      <form>
        <TextField
          label="Usuario"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <Box mt={2} display={"flex"} flexDirection={"row"}>
          <Button
            type="submit"
            variant="contained"
            style={{ background: "#06B24B", margin: "0 9px" }}
            fullWidth
            onClick={handleInicioSession}
          >
            Iniciar Sesión
          </Button>
          <Button
            type="submit"
            variant="contained"
            style={{ background: "#E0E0E0" }}
            fullWidth
            onClick={handleInscripcion}
          >
            Inscripcion
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoginComponent;
