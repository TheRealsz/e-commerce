import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Roboto'
        },
        subtitle1: {
            fontSize: "1.17rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal"
        },
        subtitle2: {
            fontSize: "1.17rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal"
        },
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
            fontSize: "2.28rem",
            fontWeight: "800",
            fontStyle: "normal",
            lineHeight: "normal"
        },
        h4: {
            fontSize: "1.83rem",
            fontWeight: "700",
            fontStyle: "normal",
            lineHeight: "normal"
        },
        h5: {
           fontSize: "1.46rem",
           fontWeight: "800", 
           textAlign: "center"
        },
    },
});

export default theme;