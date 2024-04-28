export function generateIsoFormattedDate(normalDate) {
  // Convert the data string to a javascript date object
  const expiryDateObject = new Date(normalDate);

  // Format the data as a string in ISO 8601 format
  const isoFormattedDate = expiryDateObject.toISOString();

  return isoFormattedDate;
}
