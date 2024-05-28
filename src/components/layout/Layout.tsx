import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div>Layout 정상</div>
            <div>{children}</div>
            <footer>footer부분</footer>
        </>
    );
}
