// Define sets of animal names for each time frame and day
const gameset = {
    // Sunday
    sunday: {
      "9am-3pm": ["71% - PG স্লটের Cruise Royale", "70% - PP স্লটের Gates of Olympus™", "72% - JILI স্লটের Wild Ace", "66% - PP স্লটের Barn Festival"],
      "3pm-9pm": ["81% - JILI ফিসিং Bombing Fishing", "79% - JILI স্লটের Super Ace", "75% - JILI স্লটের Fortune Gems", "75% - BNG স্লটের Black Wolf"],
      "9pm-3am": ["68% - JILI স্লটের Dragon & Tiger", "81% - JILI স্লটের Mines", "71% - PG স্লটের Wild Bounty Showdown", "71% - PG স্লটের Reel Love"],
      "3am-9am": ["71% - BNG স্লটের Prosperity Fortune Tree", "71% - BNG স্লটের Sun of Egypt 2", "82% - JILI ফিসিং Dinosaur Tycoon II", "81% - JILI ফিসিং Golden Land"],
      }
      ,
    // Monday
    monday: {
      "9am-3pm": ["72% - REVO স্লটের Alchemy Book", "75% - BNG স্লটের Black Wolf", "69% - JILI স্লটের Dragon Treasure", "79% - JILI স্লটের Super Ace"],
      "3pm-9pm": ["81% - JILI ফিসিং Golden Land", "71% - PG স্লটের Cruise Royale", "71% - BNG স্লটের Sun of Egypt 2", "71% - PG স্লটের Reel Love"],
      "9pm-3am": ["71% - PG স্লটের Wild Bounty Showdown", "69% - JILI স্লটের Dragon Treasure", "75% - JILI স্লটের Fortune Gems", "63% - HAK ক্রাশ খেলা Mines"],
      "3am-9am": ["76% - BNG স্লটের Book of Wizard", "81% - JILI স্লটের Mines", "78% - PG স্লটের Secrets of Cleopatra", "72% - JILI স্লটের Wild Ace"],
      }
      ,
    // Tuesday
    tuesday: {
      "9am-3pm": ["79% - JILI স্লটের Aztec Priestess", "82% - JILI ফিসিং Dinosaur Tycoon II", "71% - BNG স্লটের Sun of Egypt 2", "68% - JILI স্লটের Dragon & Tiger"],
      "3pm-9pm": ["68% - JILI স্লটের GoRush", "81% - JILI স্লটের Mines", "71% - BNG স্লটের Prosperity Fortune Tree", "63% - HAK ক্রাশ খেলা Mines"],
      "9pm-3am": ["79% - JILI স্লটের Super Ace", "69% - JILI স্লটের Dragon Treasure", "70% - PP স্লটের Gates of Olympus™", "81% - JILI ফিসিং Golden Land"],
      "3am-9am": ["75% - BNG স্লটের Black Wolf", "68% - BNG স্লটের Buddha Fortune", "72% - JILI স্লটের Wild Ace", "68% - PG স্লটের Safari Wilds"],
      }
      ,
    // Wednesday
    wednesday: {
      "9am-3pm": ["66% - PP স্লটের Barn Festival", "69% - JILI স্লটের Dragon Treasure", "79% - JILI স্লটের Aztec Priestess", "70% - PP স্লটের Gates of Olympus™"],
      "3pm-9pm": ["75% - BNG স্লটের Black Wolf", "71% - BNG স্লটের Sun of Egypt 2", "68% - JILI স্লটের Dragon & Tiger", "81% - JILI ফিসিং Royal Fishing"],
      "9pm-3am": ["69% - JILI স্লটের Dragon Treasure", "82% - JILI ফিসিং Dinosaur Tycoon II", "71% - PG স্লটের Wild Bounty Showdown", "81% - JILI ফিসিং Golden Land"],
      "3am-9am": ["71% - BNG স্লটের Prosperity Fortune Tree", "66% - PP স্লটের Barn Festival", "71% - PG স্লটের Cruise Royale", "70% - PP স্লটের Gates of Olympus™"],
      }
      ,
    // Thursday
    thursday: {
      "9am-3pm": ["69% - JILI স্লটের Dragon Treasure", "71% - BNG স্লটের Prosperity Fortune Tree", "71% - BNG স্লটের Sun of Egypt 2", "81% - JILI ফিসিং Bombing Fishing"],
      "3pm-9pm": ["81% - JILI ফিসিং Golden Land", "75% - JILI স্লটের Charge Buffalo", "81% - JILI স্লটের Mines", "71% - PG স্লটের Wild Bounty Showdown"],
      "9pm-3am": ["68% - BNG স্লটের Buddha Fortune", "63% - HAK ক্রাশ খেলা Mines", "82% - JILI ফিসিং Dinosaur Tycoon II", "71% - PG স্লটের Cruise Royale"],
      "3am-9am": ["79% - JILI স্লটের Aztec Priestess", "78% - PG স্লটের Secrets of Cleopatra", "68% - JILI স্লটের GoRush", "66% - PP স্লটের Barn Festival"],
      }
      ,
    // Friday
    friday: {
      "9am-3pm": ["81% - JILI ফিসিং Bombing Fishing", "69% - JILI স্লটের Dragon Treasure", "71% - PP স্লটের Aztec Gems Deluxe", "63% - HAK ক্রাশ খেলা Mines"],
      "3pm-9pm": ["78% - PG স্লটের Secrets of Cleopatra", "72% - REVO স্লটের Alchemy Book", "75% - JILI স্লটের Fortune Gems", "79% - JILI স্লটের Aztec Priestess"],
      "9pm-3am": ["81% - JILI ফিসিং Royal Fishing", "66% - PP স্লটের Barn Festival", "76% - BNG স্লটের Book of Wizard", "82% - JILI ফিসিং Dinosaur Tycoon II"],
      "3am-9am": ["71% - PG স্লটের Reel Love", "78% - PG স্লটের Secrets of Cleopatra", "72% - JILI স্লটের Wild Ace", "68% - BNG স্লটের Buddha Fortune"],
      }
      ,
    // Saturday
    saturday: {
      "9am-3pm": ["78% - PG স্লটের Secrets of Cleopatra", "71% - PP স্লটের Aztec Gems Deluxe", "68% - JILI স্লটের Dragon & Tiger", "75% - JILI স্লটের Fortune Gems"],
      "3pm-9pm": ["71% - PG স্লটের Reel Love", "81% - JILI ফিসিং Golden Land", "71% - BNG স্লটের Prosperity Fortune Tree", "75% - JILI স্লটের Charge Buffalo"],
      "9pm-3am": ["79% - JILI স্লটের Aztec Priestess", "70% - PP স্লটের Gates of Olympus™", "72% - REVO স্লটের Alchemy Book", "66% - PP স্লটের Barn Festival"],
      "3am-9am": ["69% - JILI স্লটের Dragon Treasure", "82% - JILI ফিসিং Dinosaur Tycoon II", "71% - PG স্লটের Wild Bounty Showdown", "76% - BNG স্লটের Book of Wizard"],
      }
      ,
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
