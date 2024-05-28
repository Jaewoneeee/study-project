import Link from "next/link";

export default function Navbar() {
    return (
        <ul>
            <li>
                <Link href={"/"}>home</Link>
            </li>
            <li>
                <Link href={"/test"}>test</Link>
            </li>
        </ul>
    );
}
