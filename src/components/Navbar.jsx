import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="my-6 font-bold text-xl">
            <ul className="flex items-center justify-center text-amber-50 gap-6">
                <Link className="hover:text-blue-600" href='/'> Home</Link>
                <Link className="hover:text-blue-600" href='/projects'> Projects</Link>
                <Link className="hover:text-amber-400" href='/articles'> Articles</Link>
                <Link className="hover:text-amber-400" href='/contact'> Reach out</Link>
            </ul>
        </nav>
    );
};