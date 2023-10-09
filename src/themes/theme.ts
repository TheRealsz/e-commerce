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
        body2: {
            fontSize: "1.46rem",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal"
        },
        h2: {
            fontSize: "2.25rem",
            mixBlendMode: "darken",
            color: "#EA3458",
            fontWeight: "800"
        },
        h5: {
           fontSize: "1.46rem",
           fontWeight: "800", 
           color: "#051626",
           textAlign: "center"
        },
        allVariants: {
            fontFamily: 'Roboto'
        }
    },
});

export default theme;