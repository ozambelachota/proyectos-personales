import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Inscripcion from "./pages/inscripcion";

function App() {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Home />} />
            <Route path="/inscripcion" element={<Inscripcion />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
