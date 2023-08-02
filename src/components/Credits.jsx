import Link from "next/link";

export default function Credits() {

    return (
        <div
            className="flex flex-col justify-center items-center
            bg-primary-400">
                <h1 className="text-2xl text-center font-bold text-primary-200 p-4 ">
                    Made by <Link href="https://github.com/LyeZinho">
                        <span className="text-primary-50 hover:text-primary-700 transition duration-500 ease-in-out
                        hover:underline
                        ">LyeZinho</span>
                    </Link>
                </h1>
        </div>
    )
}
