const theme = {
    colors: {
        primary: "#0070f3",
        secondary: "#1c1c1e",
        background: "#333333",
        text: "#f5f5f5",
        success: "#28a745",
        warning: "#ffc107",
        danger: "#dc3545",
        info: "#17a2b8",
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
