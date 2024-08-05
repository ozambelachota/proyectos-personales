import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Home, Whatshot, Grain } from "@mui/icons-material";
const Navbar = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/"
      >
        <Home sx={{ mr: 0.5 }} fontSize="inherit" />
        MUI
      </Link>
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        <Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />
        Core
      </Link>
      <Typography
        sx={{ display: "flex", alignItems: "center" }}
        color="text.primary"
      >
        <Grain sx={{ mr: 0.5 }} fontSize="inherit" />
        Breadcrumb
      </Typography>
    </Breadcrumbs>
  );
};

export default Navbar;
