import { useState, useEffect } from 'react';
import Link from 'next/link';
import { decodeUrl } from '../../lib/encodeUrl';
import { Button, Alert } from '@material-tailwind/react';
const makeUrl = require('../../lib/makeUrl');

export default function UrlInput({ data }) {
    const urlData = JSON.parse(data);
    const [alert, setAlert] = useState({ show: false });

    return (
        <div
            className="flex flex-col justify-center items-center
            m-10
            "
        >
            <div className="mt-20
                flex flex-col justify-center items-center
                bg-primary-500
                p-2
                rounded-2xl
            ">
                <div>
                    <h1 className="text-4xl text-center font-bold text-primary-50 mt-10">
                        Created Url
                    </h1>
                </div>
                <div>
                    <h1 className="cursor-pointer text-xl text-center font-bold text-primary-50 mt-10 hover:text-primary-700 transition duration-500 ease-in-out"
                        // On click, copy the url to the clipboard
                        onClick={() => {
                            navigator.clipboard.writeText(`https://opshort.vercel.app/r/${urlData.shortCode}`);
                            // setAlert({ show: true }); transition for showing the alert
                            setAlert({ show: true });
                            setTimeout(() => {
                                setAlert({ show: false });
                            }, 2000);
                        }}>
                        opshort.vercel.app/r/{urlData.shortCode}
                    </h1>
                    <Alert
                        color="blue"
                        className="z-50 fixed bottom-0 left-0 overflow-hidden flex items-center justify-center bg-red-500 p-5 m-10 rounded-xl text-white text-xl font-bold"
                        // When show use the transition to show the alert
                        style={{ display: alert.show ? "block" : "none" }}
                    >
                        Copied to clipboard!
                    </Alert>                        
                </div>
                <div>
                    <h1 className="text-sm text-center font-bold text-primary-50 mt-10 max-w-md">
                        This url will expire on {new Date(urlData.expiresAt).toLocaleDateString()}{" "}
                        so make sure to use it before then!
                    </h1>
                </div>
                <div>
                    <Button
                        buttonType={"solid"}
                        rounded={false}
                        block={false}
                        onClick={
                            () => {
                                window.location.href = `/`;
                            }
                        }
                        className="
                        mt-10
                        bg-primary-700
                        hover:bg-primary-800
                        transition duration-500 ease-in-out p-4 rounded-2xl"
                    >
                        Go back to home
                    </Button>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const url = context.query.url;
    const decodedUrl = decodeUrl(url);

    let urlData = await makeUrl(decodedUrl);

    // let dummyData = {
    //     id: 7,
    //     url: 'https://test.comtest',
    //     shortCode: 'E7OosfR2gz',
    //     createdAt: '2023-08-01T14:57:49.548Z',
    //     updatedAt: '2023-08-01T14:57:49.548Z',
    //     expiresAt: '2023-10-30T14:57:49.547Z'
    // };

    return {
        props: {
            data: JSON.stringify(urlData)
            // data: JSON.stringify(dummyData) 
        }
    }
}
