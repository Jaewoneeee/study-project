import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";

// export const getServerSideProps = (async () => {
//     // Fetch data from external API
//     const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
//     const movies = await res.json();
//     console.log("🚀 ~ getServerSideProps ~ movies:", movies);
//     // Pass data to the page via props
//     return { props: { movies } };
// }) satisfies GetServerSideProps<{ movies: any }>;

export default function Test({ movies }: any) {
    console.log(movies);
    const router = useRouter();
    return <div>Test page</div>;
}

export async function getServerSideProps() {
    const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const movies = await res.json();
    console.log("🚀 ~ getServerSideProps ~ movies:", movies);
    return { props: { movies: movies } };
}
