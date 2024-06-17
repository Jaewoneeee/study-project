import { css, SerializedStyles } from "@emotion/react";

type TypographyKey = "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "body3" | "body4" | "caption";
type WeightKey = "light" | "normal" | "medium" | "bold" | "semibold";

const sizeMap: Record<TypographyKey, number> = {
    h1: 72,
    h2: 48,
    h3: 36,
    h4: 30,
    body1: 20,
    body2: 18,
    body3: 16,
    body4: 14,
    caption: 12,
};

const weightMap: Record<WeightKey, number> = {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
};

const lineHeightMap: Record<TypographyKey, number> = {
    h1: 1.3,
    h2: 1.3,
    h3: 1.3,
    h4: 1.4,
    body1: 1.6,
    body2: 1.6,
    body3: 1.6,
    body4: 1.6,
    caption: 1.6,
};

const typographySchema: Record<TypographyKey, Array<WeightKey>> = {
    h1: ["semibold"],
    h2: ["semibold"],
    h3: ["semibold"],
    h4: ["semibold"],
    body1: ["normal", "semibold", "bold"],
    body2: ["normal", "semibold", "bold"],
    body3: ["normal", "semibold", "bold"],
    body4: ["normal", "semibold", "bold"],
    caption: ["normal", "semibold"],
};

const generateTypography = (schema: Record<TypographyKey, Array<WeightKey>>) => {
    const result: Record<TypographyKey, Record<WeightKey, SerializedStyles>> = {} as any;

    Object.keys(schema).forEach((key) => {
        const typographyKey = key as TypographyKey;
        result[typographyKey] = {} as Record<WeightKey, SerializedStyles>;

        schema[typographyKey].forEach((weight) => {
            const fontSize = `${sizeMap[typographyKey]}px`;
            const fontWeight = weightMap[weight];
            const lineHeight = `${lineHeightMap[typographyKey]}`;

            result[typographyKey][weight] = css`
                font-size: ${fontSize};
                font-weight: ${fontWeight};
                line-height: ${lineHeight};
            `;
        });
    });

    return result;
};

const typography = generateTypography(typographySchema);
//console.log("🚀 ~ typo:", typography);

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
