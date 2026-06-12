const prisma = require("../config/prisma");
const generateOosCode = require("../utils/generateOosCode");

async function listOOSCases() {
  return prisma.oOSCase.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
  });
}

async function getOOSCaseById(id) {
  return prisma.oOSCase.findUnique({
    where: { id },
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
  });
}

async function createOOSCase(data) {
  let createdById = data.createdById;

  if (!createdById) {
    const adminUser = await prisma.user.findFirst({
      where: {
        role: "ADMIN",
        isActive: true,
      },
    });

    if (!adminUser) {
      throw new Error("No active admin user found. Please run the database seed first.");
    }

    createdById = adminUser.id;
  }

  return prisma.oOSCase.create({
    data: {
      code: data.code || generateOosCode(),
      productName: data.productName,
      batchNumber: data.batchNumber,
      area: data.area || null,
      testType: data.testType,
      method: data.method,
      resultObtained: data.resultObtained,
      specification: data.specification,
      microorganism: data.microorganism || null,
      description: data.description || null,
      createdById,
    },
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
  });
}

async function updateOOSCase(id, data) {
  return prisma.oOSCase.update({
    where: { id },
    data: {
      productName: data.productName,
      batchNumber: data.batchNumber,
      area: data.area,
      testType: data.testType,
      method: data.method,
      resultObtained: data.resultObtained,
      specification: data.specification,
      microorganism: data.microorganism,
      description: data.description,
      status: data.status,
      phase: data.phase,
    },
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
  });
}

module.exports = {
  listOOSCases,
  getOOSCaseById,
  createOOSCase,
  updateOOSCase,
};