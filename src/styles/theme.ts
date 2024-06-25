import { css, SerializedStyles } from "@emotion/react";

export type TypographyKey = "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "body3" | "body4" | "caption";
export type WeightKey = "light" | "normal" | "medium" | "bold" | "semibold";

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

function gernerateTypoString() {
    return css``;
}

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
console.log("🚀 ~ typo:", typography);

const colors = {
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
        warning: {
            10: "#fff",
            20: "#fff",
            test: {
                10: "#aaa",
                20: "#f0d9b0",
            },
        },
    },
};

const theme = {
    colors,
    fontFamily: "'Arial', sans-serif",
    typography,
};

// <Text color="secondary.red" />

export type ThemeType = typeof theme;
export default theme;

type Colors = typeof colors;

/**
 * @example
 * ```ts
 * type Colors = {
 *   a:{ b: c: string }
 * }
 *
 * type Result = SpreadObjectKey<Colors>
 * // 'a.b.c' => ok
 * // 'a.b' => x
 * ```
 */

/**
 * @description 1. K extends keyof T
 *  - K는 T의 키값 중 하나여야한다(제약조건, K를 명시적으로 지정)
 *
 * @description 2. K = keyof T
 *  - K의 기본값은 T의 키값이다(제약조건 X)
 *
 * @description 3. K extends keyof T = keyof T
 *  - K의 기본값은 T이며, K를 명시적으로 지정하더라도 K는 T의 키값 중 하나여야한다
 *
 * @description 4. 아래 타입 명세서 작성
 *  1. 정의
 *      - 객체의 키를 재귀적으로 연결하여 '.'으로 구분된 문자열로 변환하는 타입
 *  2. 매개변수
 *      - T: 객체
 *      - S: 문자열, 기본값은 ""
 *      - K: T의 키값, ( = keyof T 를 통해 명시하지 않아도 된다)
 *  3. 동작
 *      - K가 문자열 또는 숫자여야 한다
 *      - T[K]가 문자열 또는 숫자일 경우, `${S}${K}`를 반환한다
 *      - T[K]가 객체일 경우, 두번째 매개변수로 `${S}${K}.`값을 주며 재귀적으로 SpreadObjectKey를 호출한다
 *      - 위의 조건에 해당하지 않으면 never 타입을 반환한다
 * */

type SpreadObjectKey<T, S extends string = "", K extends keyof T = keyof T> = K extends string | number
    ? T[K] extends string | number
        ? `${S}${K}`
        : T[K] extends object
        ? SpreadObjectKey<T[K], `${S}${K}.`>
        : never
    : never;

type ColorKey = SpreadObjectKey<Colors>;
