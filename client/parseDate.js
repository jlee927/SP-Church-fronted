// parseDate.js
function parseDate(dateString) {
   const date = new Date(dateString);

   // Extract year, month, and day
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
   const day = String(date.getDate()).padStart(2, "0");

   // Extract hours, minutes, and seconds
   const hours = String(date.getHours()).padStart(2, "0");
   const minutes = String(date.getMinutes()).padStart(2, "0");
   const seconds = String(date.getSeconds()).padStart(2, "0");
   const isMorning = date.getHours() < 12;

   return { year, month, day, hours, minutes, seconds, isMorning };
}

export default parseDate;
