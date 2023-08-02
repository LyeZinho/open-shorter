import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";
import { data } from "autoprefixer";

const { getUrlRecordByShortCode } = require('../../dbacess/urlrecord');
const registerClick = require('../../lib/registerClick');

/*
Things to do later:
*/ 
export default function Redirect({ props }) {
    return (
        <div></div>
    )
}

export async function getServerSideProps(context) {
  const url = context.params.url;

    const userAgent = context.req.headers['user-agent'];
    const browserName = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)[1];
    let ipAddress = 
    context.req.headers['x-forwarded-for'] ||
    context.req.connection.remoteAddress ||
    context.req.headers['x-real-ip']

    const urlRecord = await getUrlRecordByShortCode(url);  
    if (urlRecord) {
        await registerClick(url, ipAddress, browserName);
        return {
            redirect: {
                destination: urlRecord.url,
            }
        };
    } else {
        return {
            redirect: {
                destination: '/404'
            }
        }
    }
}
