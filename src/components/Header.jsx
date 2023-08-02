import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

    return (
        <div
            className="flex flex-col justify-center items-center"
        >
            <div className="mt-5">
                <Image
                    src="/logo.png"
                    alt="Link Shortener Logo"
                    width={200}
                    height={200}
                />
            </div>
            <div>
                <h1 className="text-7xl text-center font-bold text-primary-200 mt-10">
                    <span className="" style={{ textShadow: '5px 5px 4px #144b66' }}>
                        <span className="text-primary-500">Open</span> <span className="text-primary-200">Shorter</span>
                    </span>
                </h1>
            </div>
        </div>
    )
}