import { use, useEffect, useState } from "react";

export default function Movie() {
    const [movies, setMoves] = useState<any>([]);

    const getMovies = async () => {
        const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        const movies = await res.json();
        console.log("🚀 ~ getMovies ~ movies:", movies);
        setMoves(movies);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {movies.map((item: any) => (
                <>
                    <p>{item.title}</p>
                </>
            ))}
        </div>
    );
}
