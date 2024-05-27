/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ThemeType } from "@/styles/theme";
import theme from "@/styles/theme";

export const getServerSideProps = (async () => {
    const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const movies = await res.json();
    console.log("🚀 ~ getServerSideProps ~ movies:", movies);
    return { props: { movies } };
}) satisfies GetServerSideProps<{ movies: any }>;

// export async function getServerSideProps() {
//     const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
//     const movies = await res.json();
//     console.log("🚀 ~ getServerSideProps ~ movies:", movies);
//     return { props: { movies: movies } };
// }

const SomeText = styled.div`
    color: ${theme.colors.warning};
`;

export default function Test({ movies }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();

    console.log(movies);
    console.log("🚀 ~ Test ~ router:", router);
    // return <SomeText theme={theme}>Test page {router.query.id}</SomeText>;
    return <SomeText>Test page {router.query.id}</SomeText>;
}
