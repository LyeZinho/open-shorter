import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

/*

------------------------
<h1> View Metrics of Url</h1>
[ Imput shortened url ] [ Button]
------------------------

This will redirect to /generate/[url]

*/

export default function ViewMetrics() {
    const [url, setUrl] = useState("");
    
    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };
    
    const handleUrlSubmit = (e) => {
        e.preventDefault();
        // Remove everything before the last slash
        let redirect = url.substring(url.lastIndexOf('/') + 1);
        window.location.href = `/metrics/${redirect}`;
    };
    
    return (
        <div className="flex flex-col justify-center items-center
            m-10
            bg-primary-400
            p-10
            space-y-2
            rounded-2xl
            shadow-2xl
        ">
            <div>
                <h1 className="text-2xl text-center font-bold text-primary-200 p-4">
                    View Metrics of Url.
                </h1>
            </div>
            <div className="flex justify-center items-center
            flex-wrap
            mt-4
            space-x-2
            space-y-2
            ">
            <div>
                <Input
                        type="text"
                        outline={'false'}
                        placeholder="https://opshorter.vercel.app/r/xxxxxxxxx"
                        className="
                        lg:w-96
                        md:w-96
                        sm:w-2/3 
                        outline-none rounded-2xl p-4 font-bold text-primary-500
                        sm:text-sm
                        md:text-md
                        "
                        value={url}
                        onChange={handleUrlChange}
                    />
                </div>
                <div>
                    <Button
                        buttonType={"solid"}
                        rounded={false}
                        block={false}
                        onClick={handleUrlSubmit}
                        className="
                            bg-primary-500
                            p-4
                            rounded-2xl
                            text-primary-50
                        "
                    >
                    View
                </Button>
                </div>
            </div>
            <div>
                <p className="text-md text-center font-bold text-primary-200 p-4">
                    The metrics of the url will be displayed here. 
                    this will include the number of clicks and the browsers used.
                </p>
            </div>
    </div>
    );
}