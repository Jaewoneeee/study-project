import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div>Layout부분</div>
            <div>{children}</div>
            <footer>footer부분</footer>
        </>
    );
}
