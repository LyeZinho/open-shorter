import Link from 'next/link';
import Image from 'next/image';
import { 
    FaShieldAlt,
} from 'react-icons/fa';
import {
    BiSolidLike,
    BiLink,
    BiStats,
    BiSolidBookOpen
} from 'react-icons/bi';
import {
    MdImportantDevices,
} from 'react-icons/md';

export default function BottonContent({ props }) {
    return (
        <div
            className="flex flex-col justify-center items-center
                p-10
                m-10
                space-y-10
            "
        >
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-center font-bold text-primary-50 mt-10">
                        Simple, Fast, and Reliable Url Shortener.
                    </h1>
                    <p className="text-md text-center font-bold text-primary-50 mt-10 max-w-2xl">
                        Opshort is a free and open source url shortener that is simple, fast, and reliable. 
                        We don&apos;t sell your data and we just collect the data to track how many people have clicked on your link.
                        without making you life like a living hell with ads. We care about your privacy and we are 100% open source for more transparency.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-center font-bold text-primary-50 mt-10">
                        How does it work?
                    </h1>
                    <p className="text-md text-center font-bold text-primary-50 mt-10 max-w-2xl">
                        It&apos;s simple, just paste your url in the input box and click the shorten button.
                        Then you will be redirected to a page with your shortened url.
                        You can then copy the url and share it with your friends.
                        You can also track how many people have clicked on your link by going to the metrics page.
                    </p>
                </div>
            </div>
            <div className="flex flex-col 
                justify-center items-center
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            ">
                <div className="flex flex-col justify-center items-center p-4">
                    <FaShieldAlt 
                        className="text-7xl text-center font-bold text-primary-50 mt-10"
                    />
                    <h1 className="text-sm text-center font-bold text-primary-50 mt-10">
                        Secure and Fast
                    </h1>
                    <p
                        className="text-md text-center font-bold text-primary-50 mt-10 max-w-2xl"
                    >
                        We use https to make sure that your data is secure and we use a fast server to make sure that your links are fast.
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center p-4">
                    <BiSolidBookOpen
                        className="text-7xl text-center font-bold text-primary-50 mt-10"
                    />
                    <h1 className="text-sm text-center font-bold text-primary-50 mt-10">
                        Open Source
                    </h1>
                    <p
                        className="text-md text-center font-bold text-primary-50 mt-10 max-w-2xl"
                    >
                        We are 100% open source so you can see what we are doing with your data.
                        And you can use our code to make something better.
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center p-4">
                    <BiLink
                        className="text-7xl text-center font-bold text-primary-50 mt-10"
                    />
                    <h1 className="text-sm text-center font-bold text-primary-50 mt-10">
                        Shorten Urls
                    </h1>
                    <p
                        className="text-md text-center font-bold text-primary-50 mt-10 max-w-2xl"
                    >
                        You can shorten urls with our service. No matter how long the url is, we will shorten it.
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center p-4">
                    <BiStats
                        className="text-7xl text-center font-bold text-primary-50 mt-10"
                    />
                    <h1 className="text-sm text-center font-bold text-primary-50 mt-10">
                        Track Metrics
                    </h1>
                    <p
                        className="text-md text-center font-bold text-primary-50 mt-10 max-w-2xl"
                    >
                        You can track how many people have clicked on your link and what browser they are using.
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center p-4">
                    <MdImportantDevices
                        className="text-7xl text-center font-bold text-primary-50 mt-10"
                    />
                    <h1 className="text-sm text-center font-bold text-primary-50 mt-10">
                        Works on all devices
                    </h1>
                    <p
                        className="text-md text-center font-bold text-primary-50 mt-10 max-w-2xl"
                    >
                        Our website works on all devices so you can shorten urls on your phone, tablet, or computer.
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center p-4">
                    <BiSolidLike
                        className="text-7xl text-center font-bold text-primary-50 mt-10"
                    />
                    <h1 className="text-sm text-center font-bold text-primary-50 mt-10">
                        Easy to use
                    </h1>
                    <p
                        className="text-md text-center font-bold text-primary-50 mt-10 max-w-2xl"
                    >
                        Our website is easy to use so you can shorten urls without any difficulty.
                        The only thing you need to do is paste your url in the input and confirm. 
                    </p>
                </div>
            </div>
        </div>
    )
}   