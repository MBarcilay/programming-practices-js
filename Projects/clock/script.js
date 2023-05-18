// Get references to the hour, minute, and second elements
const hourHand = document.getElementById('hr');
const minuteHand = document.getElementById('mn');
const secondHand = document.getElementById('sc');

// Get reference to the time element
const timeElement = document.createElement('div');
timeElement.className = 'time'; // Add a CSS class for styling

// Append the time element to the clock div
const clockDiv = document.querySelector('.clock');
clockDiv.appendChild(timeElement);

// Get reference to the date elements
const dayNameElement = document.getElementById('dayname');
const monthElement = document.getElementById('month');
const dayNumElement = document.getElementById('daynum');
const yearElement = document.getElementById('year');

// Function to update the clock and date
function updateClock() {
  // Get the current date and time
  const now = new Date();

  // Update the time
  const hours = now.getHours() % 12; // Get hours in 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the rotation angles of the clock hands
  const hourAngle = (hours * 30) + (minutes * 0.5); // Each hour represents 30 degrees (360 degrees / 12 hours = 30 degrees)
  const minuteAngle = (minutes * 6) + (seconds * 0.1); // Each minute represents 6 degrees (360 degrees / 60 minutes = 6 degrees)
  const secondAngle = seconds * 6; // Each second represents 6 degrees (360 degrees / 60 seconds = 6 degrees)

  // Apply the rotation angles to the clock hands
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;

  // Update the time
  const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timeElement.textContent = time;

  // Update the date
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  dayNameElement.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
  monthElement.textContent = now.toLocaleDateString('en-US', { month: 'long' });
  dayNumElement.textContent = now.toLocaleDateString('en-US', { day: 'numeric' });
  yearElement.textContent = now.toLocaleDateString('en-US', { year: 'numeric' });
}

// Call the updateClock function initially to avoid delay
updateClock();

// Update the clock and date every second
setInterval(updateClock, 1000);
