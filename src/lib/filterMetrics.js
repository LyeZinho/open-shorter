/*

This is a filter for the metrics data

The data is an array of objects in this format:
{
        id: 2,
        urlRecord: '3uIkZmSPeI',
        clientIp: '::1',
        browserName: 'Chrome',
        createdAt: "2023-08-01T19:50:14.849Z",
        updatedAt: "2023-08-01T19:50:14.849Z"
},

So we need to filter the data for only the data we want to display

We want to display the following:
{
    id: 2,
    urlRecord: '3uIkZmSPeI',
    browsers: [
        {
            browserName: 'Chrome',
            count: 1
        }
    ],
    ips: [
        {
            ip: '::1',
            count: 1
        }
    ]
}
*/



function filterMetricsData(data) {
    const filteredData = {
        id: data[0].id,
        totalClicks: data.length,
        urlRecord: data[0].urlRecord,
        browsers: [],
        ips: []
    };

    data.forEach((item) => {
        const browserIndex = filteredData.browsers.findIndex((browser) => browser.browserName === item.browserName);
        const ipIndex = filteredData.ips.findIndex((ip) => ip.ip === item.clientIp);

        if (browserIndex === -1) {
            filteredData.browsers.push({
                browserName: item.browserName,
                count: 1
            });
        } else {
            filteredData.browsers[browserIndex].count++;
        }

        if (ipIndex === -1) {
            filteredData.ips.push({
                ip: item.clientIp,
                count: 1
            });
        } else {
            filteredData.ips[ipIndex].count++;
        }
    });

    return filteredData;
}

module.exports = filterMetricsData;