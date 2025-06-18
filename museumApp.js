document.addEventListener("DOMContentLoaded", function () {
  const hoursByDay = {
    0: "10:00–18:00",   // Sunday
    1: "Closed",         // Monday
    2: "10:00–18:00",   // Tuesday
    3: "10:00–18:00",   // Wednesday
    4: "10:00–18:00",   // Thursday
    5: "10:00–18:00",   // Friday
    6: "10:00–20:00",   // Saturday
  };

  const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  const today = new Date();
  const day = today.getDay();
  const hours = hoursByDay[day];
  const label = `Opening hours for ${daysOfWeek[day]}: ${hours}`;

  const openingHoursElement = document.getElementById("opening-hours");
  if (openingHoursElement) {
    openingHoursElement.textContent = label;
  }
});
