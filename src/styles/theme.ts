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
        bold1: {
            size: 400,
            weight: 700,
            height: "10px",
        },
        // size, weight, height
    },
};

const fontSize = {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "22px",
    "4xl": "26px",
};

const fontWeight = {
    base: 400,
    semibold: 600,
    bold: 700,
};

const lineHeight = {
    small: "16px",
    medium: "24px",
    large: "32px",
};

export type ThemeType = typeof theme;
export default theme;
