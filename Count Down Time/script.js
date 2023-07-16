// Set the countdown date and time
const countdownDate = new Date("July 31, 2023 00:00:00").getTime();

// Update the countdown every 1 second
const countdownTimer = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const remainingTime = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is finished, display a message
  if (remainingTime < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Countdown finished!";
  }
}, 1000);
