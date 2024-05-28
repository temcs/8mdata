// Define sets of animal names for each time frame and day
const gameset = {
    // Sunday
    sunday: {
      "9am-3pm": ["PG স্লটের Secrets of Cleopatra", "PG স্লটের Wild Bounty Showdown", "PP স্লটের Barn Festival", "PP স্লটের Gates of Olympus™"],
      "3pm-9pm": ["HAK ক্রাশ খেলা Mines", "JILI স্লটের Fortune Gems", "JILI ফিসিং Royal Fishing", "JILI স্লটের Mines"],
      "9pm-3am": ["BNG স্লটের Sun of Egypt 2", "PP স্লটের Aztec Gems Deluxe", "JILI স্লটের Dragon Treasure", "JILI স্লটের GoRush"],
      "3am-9am": ["JILI ফিসিং Dinosaur Tycoon II", "JILI স্লটের Super Ace", "JILI ফিসিং Golden Land", "JILI স্লটের Charge Buffalo"],
      },
    // Monday
    monday: {
      "9am-3pm": ["PG স্লটের Secrets of Cleopatra", "JILI ফিসিং Dinosaur Tycoon II", "JILI স্লটের Aztec Priestess", "PP স্লটের Aztec Gems Deluxe"],
      "3pm-9pm": ["HAK ক্রাশ খেলা Mines", "PG স্লটের Reel Love", "JILI স্লটের Charge Buffalo", "BNG স্লটের Book of Wizard"],
      "9pm-3am": ["PP স্লটের Barn Festival", "BNG স্লটের Prosperity Fortune Tree", "BNG স্লটের Black Wolf", "BNG স্লটের Buddha Fortune"],
      "3am-9am": ["JILI স্লটের Dragon & Tiger", "JILI স্লটের Fortune Gems", "BNG স্লটের Sun of Egypt 2", "JILI স্লটের Super Ace"],
      },
    // Tuesday
    tuesday: {
      "9am-3pm": ["JILI ফিসিং Bombing Fishing", "PP স্লটের Barn Festival", "JILI স্লটের Wild Ace", "JILI স্লটের Aztec Priestess"],
      "3pm-9pm": ["JILI স্লটের Dragon Treasure", "BNG স্লটের Sun of Egypt 2", "JILI স্লটের Super Ace", "JILI ফিসিং Royal Fishing"],
      "9pm-3am": ["HAK ক্রাশ খেলা Mines", "PG স্লটের Safari Wilds", "PG স্লটের Reel Love", "BNG স্লটের Prosperity Fortune Tree"],
      "3am-9am": ["PG স্লটের Wild Bounty Showdown", "PP স্লটের Aztec Gems Deluxe", "JILI ফিসিং Dinosaur Tycoon II", "JILI স্লটের Charge Buffalo"],
      },
    // Wednesday
    wednesday: {
      "9am-3pm": ["BNG স্লটের Book of Wizard", "JILI ফিসিং Golden Land", "JILI স্লটের Aztec Priestess", "JILI ফিসিং Bombing Fishing"],
      "3pm-9pm": ["JILI স্লটের Charge Buffalo", "JILI স্লটের Super Ace", "JILI স্লটের GoRush", "REVO স্লটের Alchemy Book"],
      "9pm-3am": ["JILI ফিসিং Royal Fishing", "HAK ক্রাশ খেলা Mines", "PG স্লটের Safari Wilds", "PG স্লটের Reel Love"],
      "3am-9am": ["PG স্লটের Wild Bounty Showdown", "PP স্লটের Gates of Olympus™", "JILI স্লটের Dragon & Tiger", "JILI স্লটের Wild Ace"],
      },
    // Thursday
    thursday: {
      "9am-3pm": ["BNG স্লটের Book of Wizard", "JILI ফিসিং Golden Land", "JILI স্লটের Aztec Priestess", "JILI ফিসিং Bombing Fishing"],
      "3pm-9pm": ["JILI স্লটের Charge Buffalo", "JILI স্লটের Super Ace", "JILI স্লটের GoRush", "REVO স্লটের Alchemy Book"],
      "9pm-3am": ["JILI ফিসিং Royal Fishing", "HAK ক্রাশ খেলা Mines", "PG স্লটের Safari Wilds", "PG স্লটের Reel Love"],
      "3am-9am": ["PG স্লটের Wild Bounty Showdown", "PP স্লটের Gates of Olympus™", "JILI স্লটের Dragon & Tiger", "JILI স্লটের Wild Ace"],
      },
    // Friday
    friday: {
      "9am-3pm": ["BNG স্লটের Book of Wizard", "JILI ফিসিং Golden Land", "JILI স্লটের Aztec Priestess", "JILI ফিসিং Bombing Fishing"],
      "3pm-9pm": ["JILI স্লটের Charge Buffalo", "JILI স্লটের Super Ace", "JILI স্লটের GoRush", "REVO স্লটের Alchemy Book"],
      "9pm-3am": ["JILI ফিসিং Royal Fishing", "HAK ক্রাশ খেলা Mines", "PG স্লটের Safari Wilds", "PG স্লটের Reel Love"],
      "3am-9am": ["PG স্লটের Wild Bounty Showdown", "PP স্লটের Gates of Olympus™", "JILI স্লটের Dragon & Tiger", "JILI স্লটের Wild Ace"],
      },
    // Saturday
    saturday: {
      "9am-3pm": ["BNG স্লটের Book of Wizard", "JILI ফিসিং Golden Land", "JILI স্লটের Aztec Priestess", "JILI ফিসিং Bombing Fishing"],
      "3pm-9pm": ["JILI স্লটের Charge Buffalo", "JILI স্লটের Super Ace", "JILI স্লটের GoRush", "REVO স্লটের Alchemy Book"],
      "9pm-3am": ["JILI ফিসিং Royal Fishing", "HAK ক্রাশ খেলা Mines", "PG স্লটের Safari Wilds", "PG স্লটের Reel Love"],
      "3am-9am": ["PG স্লটের Wild Bounty Showdown", "PP স্লটের Gates of Olympus™", "JILI স্লটের Dragon & Tiger", "JILI স্লটের Wild Ace"],
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
