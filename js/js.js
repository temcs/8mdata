// Define sets of animal names for each time frame and day
const gameset = {
    // Sunday
    sunday: {
        "9am-3pm": ["JILI স্লটের Fortune Gems", "PG স্লটের Wild Bounty Showdown", "JILI স্লটের Aztec Priestess", "PG স্লটের Jurassic Kingdom"],
        "3pm-9pm": ["BNG স্লটের Sun of Egypt 2", "JILI স্লটের Wild Ace", "PG স্লটের Secrets of Cleopatra", "BNG স্লটের Prosperity Fortune Tree"],
        "9pm-3am": ["PP স্লটের Gates of Olympus™", "PP স্লটের Barn Festival", "JILI স্লটের Mines", "BNG স্লটের Black Wolf"],
        "3am-9am": ["REVO স্লটের Alchemy Book", "JILI স্লটের Charge Buffalo", "PP স্লটের Aztec Gems Deluxe", "BNG স্লটের Buddha Fortune"]
      },
    // Monday
    monday: {
        "9am-3pm": ["PG স্লটের Safari Wilds", "PG স্লটের Secrets of Cleopatra", "PG স্লটের Reel Love", "JILI ফিসিং Bombing Fishing"],
        "3pm-9pm": ["JILI ফিসিং Golden Land", "JILI ফিসিং Dinosaur Tycoon II", "JILI ফিসিং Royal Fishing", "JILI স্লটের Super Ace"],
        "9pm-3am": ["PG স্লটের Cruise Royale", "BNG স্লটের Book of Wizard", "JILI স্লটের GoRush", "JILI স্লটের Dragon & Tiger"],
        "3am-9am": ["HAK ক্রাশ খেলা Mines", "", "", ""]
    },
    // Tuesday
    tuesday: {
        "9am-3pm": ["JILI স্লটের Wild Bounty Showdown", "BNG স্লটের Sun of Egypt 2", "JILI স্লটের Wild Ace", "PG স্লটের Secrets of Cleopatra"],
        "3pm-9pm": ["BNG স্লটের Prosperity Fortune Tree", "PP স্লটের Gates of Olympus™", "PP স্লটের Barn Festival", "JILI স্লটের Mines"],
        "9pm-3am": ["BNG স্লটের Black Wolf", "REVO স্লটের Alchemy Book", "JILI স্লটের Charge Buffalo", "PP স্লটের Aztec Gems Deluxe"],
        "3am-9am": ["BNG স্লটের Buddha Fortune", "PG স্লটের Safari Wilds", "PG স্লটের Secrets of Cleopatra", "PG স্লটের Reel Love"]
      },
    // Wednesday
    wednesday: {
        "9am-3pm": ["JILI ফিসিং Bombing Fishing", "JILI ফিসিং Golden Land", "JILI ফিসিং Dinosaur Tycoon II", "JILI ফিসিং Royal Fishing"],
        "3pm-9pm": ["JILI স্লটের Super Ace", "PG স্লটের Cruise Royale", "BNG স্লটের Book of Wizard", "JILI স্লটের GoRush"],
        "9pm-3am": ["JILI স্লটের Dragon & Tiger", "HAK ক্রাশ খেলা Mines", "", ""],
        "3am-9am": ["", "", "", ""]
      },
    // Thursday
    thursday: {
        "9am-3pm": ["BNG স্লটের Sun of Egypt 2", "JILI স্লটের Wild Ace", "PG স্লটের Secrets of Cleopatra", "BNG স্লটের Prosperity Fortune Tree"],
        "3pm-9pm": ["PP স্লটের Gates of Olympus™", "PP স্লটের Barn Festival", "JILI স্লটের Mines", "BNG স্লটের Black Wolf"],
        "9pm-3am": ["REVO স্লটের Alchemy Book", "JILI স্লটের Charge Buffalo", "PP স্লটের Aztec Gems Deluxe", "BNG স্লটের Buddha Fortune"],
        "3am-9am": ["PG স্লটের Safari Wilds", "PG স্লটের Secrets of Cleopatra", "PG স্লটের Reel Love", "JILI ফিসিং Bombing Fishing"]
      },
    // Friday
    friday: {
        "9am-3pm": ["JILI ফিসিং Golden Land", "JILI ফিসিং Dinosaur Tycoon II", "JILI ফিসিং Royal Fishing", "JILI স্লটের Super Ace"],
        "3pm-9pm": ["PG স্লটের Cruise Royale", "BNG স্লটের Book of Wizard", "JILI স্লটের GoRush", "JILI স্লটের Dragon & Tiger"],
        "9pm-3am": ["HAK ক্রাশ খেলা Mines", "", "", ""],
        "3am-9am": ["", "", "", ""]
      },
    // Saturday
    saturday: {
        "9am-3pm": ["JILI ফিসিং Golden Land", "JILI ফিসিং Dinosaur Tycoon II", "JILI ফিসিং Royal Fishing", "JILI স্লটের Super Ace"],
        "3pm-9pm": ["PG স্লটের Cruise Royale", "BNG স্লটের Book of Wizard", "JILI স্লটের GoRush", "JILI স্লটের Dragon & Tiger"],
        "9pm-3am": ["HAK ক্রাশ খেলা Mines", "", "", ""],
        "3am-9am": ["", "", "", ""]
      },
  };
  
  
  // Function to get the current day and time
  function getCurrentTime() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();
  
    return {
      day,
      hour
    };
  }
  
// Function to display game names based on current time
function displayGameNames() {
    const currentTime = getCurrentTime();
    const dayOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][currentTime.day];
    const timeOfDay =
      currentTime.hour >= 9 && currentTime.hour < 15 ? "9am-3pm" :
      currentTime.hour >= 15 && currentTime.hour < 21 ? "3pm-9pm" :
      currentTime.hour >= 21 || currentTime.hour < 3 ? "9pm-3am" :
      "3am-9am";
  
    const gameNames = gameset[dayOfWeek.toLowerCase()][timeOfDay];
  
    const gameNamesContainer = document.getElementById("gameList");
    // Clear previous content
    gameNamesContainer.innerHTML = "";
    // Append new game names
    gameNames.forEach(game => {
      gameNamesContainer.innerHTML += `<span>⚡ ${game}</span><br>`;
    });
  }
  
  // Call the function initially and every 10 seconds
  displayGameNames();
  setInterval(displayGameNames, 10000);
  





function copyText() {
            // Select the text div
            var textElement = document.getElementById("text");
            // Create a range object
            var range = document.createRange();
            // Select the text content of the text element
            range.selectNode(textElement);
            // Add the range to the current selection
            window.getSelection().addRange(range);
            // Execute the copy command
            document.execCommand("copy");
            // Remove the selection
            window.getSelection().removeAllRanges();
            // Inform the user that the text has been copied
        }



        // copy time popup 

        document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.querySelector('.copytext');
    var loadingOverlay = document.getElementById('loading-overlay');

    downloadButton.addEventListener('click', function() {
        // Show loading overlay
        loadingOverlay.textContent = 'Copy Data 0%';
        loadingOverlay.classList.add('active');

        var progress = 0;
        var interval = setInterval(function() {
            progress += 1;
            loadingOverlay.textContent = 'Copy Data ' + progress + '%';
            if (progress >= 100) {
                clearInterval(interval);
                // Change text to "Copied"
                loadingOverlay.textContent = 'Copied';
                // After 2 seconds, hide loading overlay
                setTimeout(function() {
                    loadingOverlay.classList.remove('active');
                }, 2000);
            }
        }, 8); // Adjust the interval here for faster counting
    });
});