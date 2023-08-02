/*

model ClickRecord {
  id        Int      @id @default(autoincrement())
  urlRecord String
  clientIp String
  browserName String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

*/ 
const { PrismaClient } = require('@prisma/client')
// import prisma from './prismabase'
const prisma = new PrismaClient()

// CREATE
async function createClickRecord(urlRecord, clientIp, browserName) {
    const clickRecord = await prisma.clickRecord.create({
        data: {
            urlRecord,
            clientIp,
            browserName
        }
    })

    await prisma.$disconnect();
    return clickRecord
}

// READ
async function getClickRecordById(id) {
    const clickRecord = await prisma.clickRecord.findUnique({
        where: {
            id
        }
    })

    await prisma.$disconnect();
    return clickRecord
}

async function getAllClickRecords() {
    const clickRecords = await prisma.clickRecord.findMany()

    await prisma.$disconnect();
    return clickRecords
}

async function searchClickRecords(searchTerm) {
    const clickRecords = await prisma.clickRecord.findMany({
        where: {
            OR: [
                { urlRecord: { contains: searchTerm } },
                { clientIp: { contains: searchTerm } },
                { browserName: { contains: searchTerm } }
            ]
        }
    })

    await prisma.$disconnect();
    return clickRecords
}

// UPDATE
async function updateClickRecord(id, data) {
    const clickRecord = await prisma.clickRecord.update({
        where: {
            id
        },
        data
    })

    await prisma.$disconnect();
    return clickRecord
}

// DELETE
async function deleteClickRecord(id) {
    const clickRecord = await prisma.clickRecord.delete({
        where: {
            id
        }
    })

    await prisma.$disconnect();
    return clickRecord
}

// Test

// async function test() {
//     const create = await createClickRecord("xxxxxxxxxx", 'test', 'test');
//     console.log(create);
//     const read = await getClickRecordById(create.id);
//     console.log(read);
//     const update = await updateClickRecord(read.id, { urlRecord: "yyyyyyyyy" });
//     console.log(update);
//     const search = await searchClickRecords("yyyyyyyyy");
//     console.log(search);
//     const del = await deleteClickRecord(update.id);
//     console.log(del);
// }

// test();


module.exports = {
    createClickRecord,
    getClickRecordById,
    getAllClickRecords,
    searchClickRecords,
    updateClickRecord,
    deleteClickRecord
}
