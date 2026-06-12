const {
  listOOSCases,
  getOOSCaseById,
  createOOSCase,
  updateOOSCase,
} = require("../services/oos.service");

const requiredFields = [
  "productName",
  "batchNumber",
  "testType",
  "method",
  "resultObtained",
  "specification",
];

async function getAllOOSCases(req, res) {
  try {
    const cases = await listOOSCases();

    res.json({
      success: true,
      data: cases,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving OOS cases.",
      error: error.message,
    });
  }
}

async function getOOSCase(req, res) {
  try {
    const { id } = req.params;
    const oosCase = await getOOSCaseById(id);

    if (!oosCase) {
      return res.status(404).json({
        success: false,
        message: "OOS case not found.",
      });
    }

    res.json({
      success: true,
      data: oosCase,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving OOS case.",
      error: error.message,
    });
  }
}

async function createOOS(req, res) {
  try {
    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields.",
        missingFields,
      });
    }

    const createdCase = await createOOSCase(req.body);

    res.status(201).json({
      success: true,
      message: "OOS case created successfully.",
      data: createdCase,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating OOS case.",
      error: error.message,
    });
  }
}

async function updateOOS(req, res) {
  try {
    const { id } = req.params;
    const existingCase = await getOOSCaseById(id);

    if (!existingCase) {
      return res.status(404).json({
        success: false,
        message: "OOS case not found.",
      });
    }

    const updatedCase = await updateOOSCase(id, req.body);

    res.json({
      success: true,
      message: "OOS case updated successfully.",
      data: updatedCase,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating OOS case.",
      error: error.message,
    });
  }
}

module.exports = {
  getAllOOSCases,
  getOOSCase,
  createOOS,
  updateOOS,
};