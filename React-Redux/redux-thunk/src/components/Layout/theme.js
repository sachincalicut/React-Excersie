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
            main: colors.primary
        },
        secondary: {
            main: colors.secondary
        }
    },
    appBar: {
        height: 55,
      },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
});

export default theme;

    