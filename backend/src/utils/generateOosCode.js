function generateOosCode() {
  const year = new Date().getFullYear();
  const timestamp = Date.now().toString().slice(-6);

  return `OOS-${year}-${timestamp}`;
}

module.exports = generateOosCode;