// Metrics chart.js react-chartjs-2
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

const getMetrics = require("../../lib/getMetrics");
const filtermetrics = require('../../lib/filterMetrics');

// Recharts
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function RenderChart({ data }) {
  /*
  Data:
  [
    {browserName: 'Chrome', count: 2},
    {browserName: 'Firefox', count: 1},
    ...
  ]

  Possible browsers:
  opera|chrome|safari|firefox|msie|trident
  */ 

  return (
    <div>
      <BarChart width={250} height={250} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="browserName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#106a94" />
      </BarChart>
    </div>
  );
}

export default function Metrics({ data }) {
  const urlData = JSON.parse(data); 
  let metrics = filtermetrics(urlData);


  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-7xl text-center font-bold text-primary-50 mt-10 p-2">
            Metrics
          </h1>
        </div>
        <div className="mt-20 flex flex-col justify-center items-center bg-primary-500 lg:p-10 md:p-2 sm:p-2 rounded-2xl" >
          <div className="">
            <h1 className="text-3xl text-center font-bold text-primary-50">
              Total Clicks
              <br />
              <br />
              <span className="text-primary-800 text-5xl">{metrics.totalClicks}</span>
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
          <div className="mt-10 p-10">
            <RenderChart data={metrics.browsers} />
          </div>
          <div className="mt-10">
            <Button
              onClick={() => {
                window.location.href = `/`;
              }}
              className="mt-10 bg-primary-700 hover:bg-primary-800 transition duration-500 ease-in-out p-4 rounded-2xl">
              Go back to home
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl text-center font-bold text-primary-50 mt-10">
          <Link href={`/r/${metrics.urlRecord}`}>
            opshort.vercel.app/r/{metrics.urlRecord}
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
