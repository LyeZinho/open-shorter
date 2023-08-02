/*

model UrlRecord {
  id        Int      @id @default(autoincrement())
  url       String
  shortCode String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  expiresAt DateTime?
}

*/ 
const { PrismaClient } = require('@prisma/client')
// import prisma from './prismabase'
const prisma = new PrismaClient()

// CREATE
async function createUrlRecord(url, shortCode, expiresAt) {
    const newUrlRecord = await prisma.urlRecord.create({
        data: {
            url,
            shortCode,
            expiresAt
        }
    })

    await prisma.$disconnect();
    return newUrlRecord
}

// READ
async function getUrlRecordById(id) {
    const urlRecord = await prisma.urlRecord.findUnique({
        where: {
            id
        }
    })
    return urlRecord
}

async function getUrlRecordByShortCode(shortCode) {
    const urlRecord = await prisma.urlRecord.findUnique({
        where: {
            shortCode
        }
    })
    return urlRecord
}

async function getAllUrlRecords() {
    const urlRecords = await prisma.urlRecord.findMany()
    return urlRecords
}

// UPDATE
async function updateUrlRecord(id, data) {
    const updatedUrlRecord = await prisma.urlRecord.update({
        where: {
            id
        },
        data
    })
    return updatedUrlRecord
}

// DELETE
async function deleteUrlRecord(id) {
    const deletedUrlRecord = await prisma.urlRecord.delete({
        where: {
            id
        }
    })
    return deletedUrlRecord
}

module.exports = {
    createUrlRecord,
    getUrlRecordById,
    getUrlRecordByShortCode,
    getAllUrlRecords,
    updateUrlRecord,
    deleteUrlRecord
}
