// Metrics chart.js react-chartjs-2
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

const getMetrics = require("../../lib/getMetrics");

ChartJS.register(ArcElement, Tooltip, Legend);

import filterMetrics from "../../lib/filterMetrics";

export default function Metrics({ data }) {
  const urlData = JSON.parse(data);

  const filterMetricsData = filterMetrics(urlData);
  // console.log(filterMetricsData);
  const browsers = filterMetricsData[0].browsers;
  // const ips = filterMetricsData[0].ips; *Dont need this for now*
  const totalClicks = filterMetricsData[0].totalClicks;

  const [browserData, setBrowserData] = useState({
    labels: [],
    /*
        Opera:
        backgroundColor: ‘rgba(255, 99, 132, 0.2)’
        borderColor: ‘rgba(255, 99, 132, 1)’
        Firefox:
        backgroundColor: ‘rgba(54, 162, 235, 0.2)’
        borderColor: ‘rgba(54, 162, 235, 1)’
        Safari:
        backgroundColor: ‘rgba(255, 206, 86, 0.2)’
        borderColor: ‘rgba(255, 206, 86, 1)’
        Chrome:
        backgroundColor: ‘rgba(75, 192, 192, 0.2)’
        borderColor: ‘rgba(75, 192, 192, 1)’
        MSIE and Trident:
        backgroundColor: ‘rgba(153, 102, 255, 0.2)’
        borderColor: ‘rgba(153, 102, 255, 1)’
        */
    datasets: [
      {
        label: "Browser",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)", //Opera
          "rgba(54, 162, 235, 0.2)", //Firefox
          "rgba(255, 206, 86, 0.2)", //Safari
          "rgba(75, 192, 192, 0.2)", //Chrome
          "rgba(153, 102, 255, 0.2)", //MSIE and Trident
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", //Opera
          "rgba(54, 162, 235, 1)", //Firefox
          "rgba(255, 206, 86, 1)", //Safari
          "rgba(75, 192, 192, 1)", //Chrome
          "rgba(153, 102, 255, 1)", //MSIE and Trident
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    let labels = [];
    let data = [];
    for (let i = 0; i < browsers.length; i++) {
      labels.push(browsers[i].name);
      data.push(browsers[i].count);
    }
    setBrowserData({
      labels: labels,
      datasets: [
        {
          label: "Browser",
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)", //Opera
            "rgba(54, 162, 235, 0.2)", //Firefox
            "rgba(255, 206, 86, 0.2)", //Safari
            "rgba(75, 192, 192, 0.2)", //Chrome
            "rgba(153, 102, 255, 0.2)", //MSIE and Trident
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)", //Opera
            "rgba(54, 162, 235, 1)", //Firefox
            "rgba(255, 206, 86, 1)", //Safari
            "rgba(75, 192, 192, 1)", //Chrome
            "rgba(153, 102, 255, 1)", //MSIE and Trident
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [
    browsers,
  ]);

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-7xl text-center font-bold text-primary-50 mt-10 p-2">
            Metrics
          </h1>
        </div>
        <div
          className="mt-20
                    flex flex-col justify-center items-center
                    bg-primary-500
                    lg:p-10
                    md:p-2
                    sm:p-2
                    rounded-2xl
                "
        >
          <div className="">
            <h1 className="text-3xl text-center font-bold text-primary-50">
              Total Clicks
              <br />
              <br />
              <span className="text-primary-800 text-5xl">{totalClicks}</span>
            </h1>
            <p className="text-md text-center font-bold text-primary-50 mt-10 max-w-xl">
              The metrics below are based on the total clicks of the url. And
              the clent ip and browser name are recorded per click. So if you
              click on the url 3 times, the client ip and browser name will be
              recorded 3 times.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl text-center font-bold text-primary-50">
              Browsers
            </h1>
          </div>
          <div
            className="mt-10
                            bg-primary-50
                            rounded-2xl
                            p-5
                        "
          >
            <Pie
              data={browserData}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                      color: "black",
                    },
                  },
                },
              }}
              className="
                                lg:w-96
                                md:w-96
                                sm:w-10

                                lg:h-96
                                md:h-96
                                sm:h-96
                            "
            />
          </div>
          <div className="mt-10">
            <Button
              buttonType={"solid"}
              rounded={false}
              block={false}
              onClick={() => {
                window.location.href = `/`;
              }}
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
      <div className="mt-10">
        <h1 className="text-2xl text-center font-bold text-primary-50 mt-10">
          <Link href={`/r/${filterMetricsData[0].urlRecord}`}>
            opshort.vercel.app/r/{filterMetricsData[0].urlRecord}
          </Link>
        </h1>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const url = context.params.url;
  const metrics = await getMetrics(url);

  if (metrics.length > 0) {
    return {
      props: {
        data: JSON.stringify(metrics),
      },
    };
  }
  else {
    return {
      redirect: {
        destination: '/404'
      }
    }
  }
}
