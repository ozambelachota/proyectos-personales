import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const FormInscripcion = () => {
  return (
    <>
      <Container
        style={{
          width: "900px",
          height: "300px",
          padding: 0,
          margin: 0,
        }}
      >
        <Box
          component="form"
          sx={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: 4,
            boxShadow: 1,
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">FORMULACION DE INSCRIPCIÓN</Typography>
          <Typography variant="body1" color="initial">
            Recuerde que puedes realizar su inscripcion al dia siguiente de
            haber hecho su pago.
          </Typography>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id="tipoDocumentoLabel">Tipo de Documento</InputLabel>
            <Select
              labelId="tipoDocumentoLabel"
              id="tipoDocumento"
              label="Tipo de Documento"
            >
              <MenuItem value="DNI">DNI</MenuItem>
              <MenuItem value="Pasaporte">Pasaporte</MenuItem>
              {/* Agrega más opciones según tus necesidades */}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Número de Documento"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Número de Operación"
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Checkbox />
            <Typography variant="body2" color="initial">
              Aceptar términos y condiciones
            </Typography>
          </Box>

          <Button type="submit" variant="contained" color="success">
            Ingresar
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default FormInscripcion;
