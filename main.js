setTimeout(function() {
    clock()
}, 1000)

function clock() {
    // Get the current date and time
    let date = new Date();

    // Extract hours, minutes, and seconds (fixing second variable name)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds(); // Corrected variable name

    // Formatting for 12-hour clock
    if (hours === 0) {
        hours = 12; // Display 12 for midnight
    }
    if (hours > 12) {
        hours -= 12; // Convert to 12-hour format for afternoon/evening
    }
    hours = hours < 10 ? "0" + hours : hours; // Add leading zero for single-digit hours
    minutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero for single-digit minutes

    // Determine AM/PM indicator
    let period = hours >= 12 ? "PM" : "AM"; // More concise AM/PM logic

    // Construct the formatted time string
    let formattedTime = `${hours}:${minutes}:${seconds}:${period}`;

    // Update the clock element on the HTML page (assuming a class of "clock")
    document.querySelector(".clock").innerText = formattedTime;

    // Log the current hour to the console for debugging purposes (optional)
    // console.log(hours);
    setTimeout(function() {
        clock()
    }, 1000)
}


// Call the clock function initially and set an interval to call it every second