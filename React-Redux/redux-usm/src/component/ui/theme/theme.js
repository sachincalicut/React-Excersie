import { createTheme } from "@mui/material/styles";

const colors = {
    primary: "#404040",
    secondary: "#B2B2B2",
    success: "#99CA3B",
    info: "#2680EB",
    danger: "#FF5722",
    light: "#000029",
    muted:"#00001F",
    border: "#EBEDF2",
    inverse: "#F1F2F7",
    shaft: "#404040",
    dove_gray: "#484848",
    body_bg:"#F1F2F7",
    white: "#ffffff",
    black: "#404040",
};

const theme = createTheme({
    palette: {
        primary: {
            main: "#fff"
            
        },
        secondary: {
            main: colors.secondary
        }

    },
    
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            }
        }
    },
    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
       }

});

export default theme;

    