import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#EA3458', // Your primary color
        },
    },
    typography: {
        body1: {
            fontWeight: "600",
            fontStyle: "normal"
        },
        allVariants: {
            fontFamily: 'Roboto'
        }
    },
});

export default theme;