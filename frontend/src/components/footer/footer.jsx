import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

const footerStyles = {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
};

export const Footer = () => {
  return (
    <Box component="footer" sx={footerStyles}>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          flexGrow={1}
        >
          <AdbIcon sx={{ mr: 1, fontSize: 24 }} />
          <Typography
            variant="body2"
            component={Link}
            href="https://vk.com/tomorrow__never__waits"
            target="_blank"
            rel="noopener"
            sx={{
              fontFamily: "sans-serif",
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Разработчик: Иунин Егор
          </Typography>
        </Box>
      </Toolbar>
    </Box>
  );
};
