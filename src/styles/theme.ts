const theme = {
    colors: {
        primary: "#000000",
        secondary: {
            red: "#FF5630",
            orange: "#FFAB00",
            green: "#38CB89",
            blue: "#377DFF",
        },
        neutral: {
            "10": "#FEFEFE",
            "20": "#F3F5F7",
            "30": "#E8ECEF",
            "40": "#6C7275",
            "50": "#343839",
            "60": "#232627",
            "70": "#141718",
        },
    },
    typography: {
        fontFamily: "'Arial', sans-serif",
        fontSize: {
            small: "12px",
            medium: "16px",
            large: "20px",
        },
        fontWeight: {
            normal: 400,
            bold: 700,
        },
    },
};

export type ThemeType = typeof theme;
export default theme;
