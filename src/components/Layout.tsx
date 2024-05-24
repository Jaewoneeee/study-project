export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* <NavBar /> */}
            <div>Header</div>
            <div>{children}</div>
        </>
    );
}
