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

{
    recordId: 2,
    urlRecord: '3uIkZmSPeI',
    totalClicks: 3,
    browsers: [
        {
            name: 'Chrome',
            count: 2
        },
        ...
    ],
    ips: [
        {
            name: '::1',
        },
        ...
    ]
}

*/ 

// let dummyData = [
//     {
//         id: 2,
//         urlRecord: '3uIkZmSPeI',
//         clientIp: '::1',
//         browserName: 'Chrome',
//         createdAt: "2023-08-01T19:50:14.849Z",
//         updatedAt: "2023-08-01T19:50:14.849Z"
//     },
//     {
//         id: 2,
//         urlRecord: '3uIkZmSPeI',
//         clientIp: '::1',
//         browserName: 'Chrome',
//         createdAt: "2023-08-01T19:50:14.849Z",
//         updatedAt: "2023-08-01T19:50:14.849Z"
//     },
//     {
//         id: 2,
//         urlRecord: '3uIkZmSPeI',
//         clientIp: '::1',
//         browserName: 'Chrome',
//         createdAt: "2023-08-01T19:50:14.849Z",
//         updatedAt: "2023-08-01T19:50:14.849Z"
//     }
// ];


function filterMetrics(data) {
    let filteredData = [];

    data.forEach((record) => {
        let recordId = record.id;
        let urlRecord = record.urlRecord;
        let clientIp = record.clientIp;
        let browserName = record.browserName;
        let createdAt = record.createdAt;
        let updatedAt = record.updatedAt;

        let recordExists = filteredData.find((record) => record.recordId === recordId);

        if (recordExists) {
            let browserExists = recordExists.browsers.find((browser) => browser.name === browserName);

            if (browserExists) {
                browserExists.count++;
            } else {
                recordExists.browsers.push({
                    name: browserName,
                    count: 1
                });
            }

            let ipExists = recordExists.ips.find((ip) => ip.name === clientIp);

            if (!ipExists) {
                recordExists.ips.push({
                    name: clientIp
                });
            }

            recordExists.totalClicks++;
        } else {
            filteredData.push({
                recordId,
                urlRecord,
                totalClicks: 1,
                browsers: [
                    {
                        name: browserName,
                        count: 1
                    }
                ],
                ips: [
                    {
                        name: clientIp
                    }
                ]
            });
        }
    });

    return filteredData;
}

// console.log(JSON.stringify(filterMetrics(dummyData), null, 4));

module.exports = filterMetrics;