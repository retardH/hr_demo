import { Box, Stack } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box px={2} py={1}>
      <Stack component="nav" direction="row" gap={2} mb={2}>
        <Box component={NavLink} to="/">
          Home
        </Box>
        <Box component={NavLink} to="/sample">
          Sample
        </Box>
        <Box component={NavLink} to="/about">
          About
        </Box>
      </Stack>
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
