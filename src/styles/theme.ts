const fontSize = {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "22px",
    "3xl": "24px",
    "4xl": "26px",
    "5xl": "34px",
    "6xl": "40px",
    "7xl": "54px",
    "8xl": "72px",
    "9xl": "80px",
};

const fontWeight = {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
};

const lineHeight = {
    xs: "20px",
    sm: "22px",
    base: "24px",
    lg: "26px",
    xl: "28px",
    "2xl": "30px",
    "3xl": "32px",
    "4xl": "34px",
    "5xl": "38px",
    "6xl": "40px",
    "7xl": "44px",
    "8xl": "58px",
    "9xl": "76px",
    "10xl": "84px",
};

type TypographyStyle = {
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
};

const createTypographyStyle = (
    size: keyof typeof fontSize,
    weight: keyof typeof fontWeight,
    height: keyof typeof lineHeight
): TypographyStyle => ({
    fontSize: fontSize[size],
    fontWeight: fontWeight[weight],
    lineHeight: lineHeight[height],
});

const createTextStyles = (weight: keyof typeof fontWeight) => ({
    xs: createTypographyStyle("xs", weight, "xs"),
    sm: createTypographyStyle("sm", weight, "sm"),
    base: createTypographyStyle("base", weight, "lg"),
    lg: createTypographyStyle("lg", weight, "2xl"),
    xl: createTypographyStyle("xl", weight, "3xl"),
    "2xl": createTypographyStyle("2xl", weight, "4xl"),
    "4xl": createTypographyStyle("4xl", weight, "6xl"),
});

const typography = {
    title: {
        h1: createTypographyStyle("9xl", "medium", "10xl"),
        h2: createTypographyStyle("8xl", "medium", "9xl"),
        h3: createTypographyStyle("7xl", "medium", "8xl"),
        h4: createTypographyStyle("6xl", "medium", "7xl"),
        h5: createTypographyStyle("5xl", "medium", "5xl"),
        h6: createTypographyStyle("4xl", "medium", "4xl"),
        h7: createTypographyStyle("xl", "medium", "xl"),
    },
    text_normal: createTextStyles("normal"),
    text_semibold: createTextStyles("semibold"),
    text_bold: createTextStyles("bold"),
    button: {
        xsmall: createTypographyStyle("sm", "medium", "base"),
        small: createTypographyStyle("base", "medium", "xl"),
        medium: createTypographyStyle("lg", "medium", "3xl"),
        large: createTypographyStyle("2xl", "medium", "4xl"),
        xlarge: createTypographyStyle("4xl", "medium", "5xl"),
    },
};

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
    fontFamily: "'Arial', sans-serif",
    typography,
};

export type ThemeType = typeof theme;
export default theme;
