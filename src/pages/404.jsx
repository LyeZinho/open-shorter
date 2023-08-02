import Link from "next/link";
import { button } from "@material-tailwind/react";

export default function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <div className="flex flex-col justify-center items-center bg-primary-500 p-10 rounded-2xl">
        <div>
          <h1 className="text-xl text-center font-bold text-primary-50">
            The url you are trying to access does not exist or has expired.
          </h1>
          <p className="text-md text-center font-bold text-primary-50 mt-10 ">
            If you think this is a mistake, please contact the owner of the url. <br />If you are the owner of the url, please create a new one.
          </p>
        </div>

        <div>
            <button
                onClick={
                    () => {
                        window.location.href = `/`;
                    }
                }
                className="
                mt-10   
                text-bold
                text-primary-50
                bg-primary-700
                hover:bg-primary-800
                transition duration-500 ease-in-out p-4 rounded-2xl"
            >
                Go back to home
            </button>
        </div>
      </div>
    </div>
  );
}
