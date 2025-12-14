import Link from "next/link";

export default function RightSidebar() {
    return (
        <div className="fixed top-1/2 right-10 transform -translate-y-1/2 z-50 hidden xl:flex flex-col items-center">
            <Link
                href="mailto:vin@example.com"
                className="text-gray-500 hover:text-amber-400 font-mono text-xs tracking-[0.2em] transition-all duration-300 hover:scale-110"
                style={{ writingMode: 'vertical-rl' }}
            >
                vin@example.com
            </Link>
        </div>
    );
}
