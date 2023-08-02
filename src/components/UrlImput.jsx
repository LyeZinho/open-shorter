import { Button, Input, Alert } from "@material-tailwind/react";
import { useState } from "react";

// Libs
const isSqlInjection = require("../lib/isSqlInjection");
const isValidUrl = require("../lib/isValidUrl");
const { encodeUrl } = require("../lib/encodeUrl");

/*

[ Imput url ] [ Button]

This will redirect to /generate/[url]

*/

export default function UrlImput() {
  const [url, setUrl] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    message: "",
  });

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  //   const handleUrlSubmit = (e) => {
  //     e.preventDefault();
  //     window.location.href = `/generate/${url}`;
  //   };

  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    if (isSqlInjection(url)) {
      setAlert({
        show: true,
        message: "Sql Injection Detected",
      });
    } else if (!isValidUrl(url)) {
      setAlert({
        show: true,
        message: "Invalid Url",
      });
    } else {
      window.location.href = `/generate/${encodeUrl(url)}`;
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center
        m-10
        bg-primary-400
        p-10
        space-y-2
        rounded-2xl
        shadow-2xl
        "
    >
      <h1 className="text-2xl text-center font-bold text-primary-200 p-4 ">
        Paste your url here to shorten it.
      </h1>
      <Alert
        color="red"
        className="z-50 fixed bottom-0 left-0 overflow-hidden flex items-center justify-center bg-red-500 p-5 m-10 rounded-xl text-white text-xl font-bold"
        style={{ display: alert.show ? "block" : "none" }}
      >
        {alert.message}
      </Alert>
      <div
        className="flex  justify-center items-center 
        space-x-2
        space-y-2
        flex-wrap
      "
      >
        <div className="flex flex-col justify-center items-center">
          <Input
            type="text"
            outline={"false"}
            placeholder="https://example.com"
            className="
            lg:w-96
            md:w-96
            sm:w-2/3 
            outline-none rounded-2xl p-4 font-bold text-primary-500"
            value={url}
            onChange={handleUrlChange}
          />
        </div>
        <div>
          <Button
            rounded={false}
            block={false}
            onClick={handleUrlSubmit}
            className="bg-primary-500 p-4 rounded-2xl text-primary-50"
          >
            Shorten
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <p className="text-primary-50 text-sm font-bold">
          This is a free and and open-source service, so please don&apos;t abuse it.
          We just redirect you to the url you want to go to. We collect only{" "}
          <ins>(browser name, client IP)</ins> for analytics of (
          <ins>browser most acess and region most acess</ins>).{" "}
          <ins>Take in mind that the url will be valid for 90 days</ins>, so
          make sure to use it before then!
        </p>
      </div>
    </div>
  );
}
