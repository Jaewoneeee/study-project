import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import theme from "@/styles/theme";
import Button from "@/components/ui/Button";

// export async function getServerSideProps() {
//     const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
//     const movies = await res.json();
//     console.log("🚀 ~ getServerSideProps ~ movies:", movies);
//     return { props: { movies: movies } };
// }

export const getServerSideProps = (async () => {
    const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const movies = await res.json();
    console.log("🚀 ~ getServerSideProps ~ movies:", movies);
    return { props: { movies } };
}) satisfies GetServerSideProps<{ movies: any }>;

const SomeText = styled.div`
    color: ${theme.colors.secondary.red};
`;

export default function Test({ movies }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();

    console.log(movies);
    console.log("🚀 ~ Test ~ router:", router);
    return (
        <>
            <SomeText>테스트 동적 라우팅 {router.query.id}</SomeText>
            {/* <Button>버튼</Button> */}
        </>
    );
}
