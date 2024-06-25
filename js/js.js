// Define sets of animal names for each time frame and day
const gameset = {
    // Sunday
    // Sunday
    sunday: {
      "9am-3pm": ["75% - BNG স্লটের Black Wolf","72% - REVO স্লটের Alchemy Book", "81% - JILI ফিসিং Golden Land", "81% - JILI স্লটের Mines"],
      "3pm-9pm": [ "78% - PG স্লটের Secrets of Cleopatra","73% - HAK ক্রাশ খেলা Mines", "75% - JILI স্লটের Fortune Gems", "71% - JILI স্লটের Money Coming"],
      "9pm-3am": ["72% - JILI স্লটের Wild Ace", "71% - PG স্লটের Wild Bounty Showdown", "78% - PG স্লটের Candy Burst", "79% - JILI স্লটের Aztec Priestess",],
      "3am-9am": ["73% - HAK ক্রাশ খেলা Mines", "69% - JILI স্লটের Dragon Treasure", "81% - JILI ফিসিং Golden Land", "76% - BNG স্লটের Book of Wizard"],
      }
      
      ,
    // Monday
    monday: {
      "9am-3pm": ["71% - BNG স্লটের Sun of Egypt 2", "78% - PG স্লটের Secrets of Cleopatra", "82% - JILI ফিসিং Dinosaur Tycoon II", "70% - JILI স্লটের Dragon & Tiger"],
      "3pm-9pm": ["71% - JILI স্লটের Money Coming",  "79% - JILI স্লটের Aztec Priestess", "70% - PP স্লটের Gates of Olympus™", "75% - JILI স্লটের Fortune Gems"],
      "9pm-3am": ["71% - BNG স্লটের Prosperity Fortune Tree", "72% - REVO স্লটের Alchemy Book", "69% - JILI স্লটের Dragon Treasure", "76% - PP স্লটের Barn Festival"],
      "3am-9am": ["78% - BNG স্লটের Buddha Fortune", "71% - PP স্লটের Aztec Gems Deluxe","81% - JILI ফিসিং Bombing Fishing", "79% - JILI স্লটের Super Ace"],
      }
      
      ,
    // Tuesday
    tuesday: {
      "9am-3pm": ["76% - 81% - JILI স্লটের Mines", "79% - JILI স্লটের Aztec Priestess" ,"PP স্লটের Barn Festival", "79% - JILI স্লটের Super Ace"],
      "3pm-9pm": ["78% - PG স্লটের Candy Burst", "71% - PG স্লটের Wild Bounty Showdown", "73% - HAK ক্রাশ খেলা Mines", "76% - BNG স্লটের Book of Wizard"],
      "9pm-3am": [ "81% - JILI ফিসিং Bombing Fishing", "71% - JILI স্লটের Money Coming","75% - JILI স্লটের Fortune Gems", "78% - PG স্লটের Secrets of Cleopatra"],
      "3am-9am": ["81% - JILI ফিসিং Golden Land","71% - BNG স্লটের Sun of Egypt 2",  "71% - BNG স্লটের Prosperity Fortune Tree", "71% - PP স্লটের Aztec Gems Deluxe"],
      }
      
      ,
    // Wednesday
    wednesday: {
      "9am-3pm": ["76% - BNG স্লটের Book of Wizard", "82% - JILI ফিসিং Dinosaur Tycoon II", "75% - BNG স্লটের Black Wolf", "71% - PP স্লটের Aztec Gems Deluxe"],
      "3pm-9pm": ["79% - JILI স্লটের Aztec Priestess", "70% - PP স্লটের Gates of Olympus™","69% - JILI স্লটের Dragon Treasure", "73% - HAK ক্রাশ খেলা Mines"],
      "9pm-3am": [ "76% - PP স্লটের Barn Festival", "78% - BNG স্লটের Buddha Fortune","78% - PG স্লটের Candy Burst", "78% - PG স্লটের Candy Burst"],
      "3am-9am": ["71% - BNG স্লটের Prosperity Fortune Tree", "75% - JILI স্লটের Charge Buffalo", "79% - JILI স্লটের Super Ace", "71% - PG স্লটের Symbols of Egypt"],
      }
      
      ,
    // Thursday
    thursday: {
      "9am-3pm": ["71% - PP স্লটের Aztec Gems Deluxe", "71% - JILI স্লটের Money Coming", "76% - BNG স্লটের Book of Wizard", "81% - JILI ফিসিং Golden Land"],
      "3pm-9pm": ["79% - JILI স্লটের Super Ace", "71% - PG স্লটের Wild Bounty Showdown", "78% - PG স্লটের Secrets of Cleopatra", "75% - JILI স্লটের Charge Buffalo"],
      "9pm-3am": [ "81% - JILI ফিসিং Golden Land", "81% - JILI ফিসিং Bombing Fishing", "78% - BNG স্লটের Buddha Fortune", "71% - PG স্লটের Reel Love"],
      "3am-9am": ["76% - BNG স্লটের Book of Wizard", "81% - JILI ফিসিং Golden Land", "79% - JILI স্লটের Super Ace", "71% - PG স্লটের Wild Bounty Showdown"],
      }
      
      ,
    // Friday
    friday: {
      "9am-3pm": ["71% - PG স্লটের Wild Bounty Showdown", "75% - BNG স্লটের Black Wolf", "71% - PG স্লটের Symbols of Egypt", "79% - JILI স্লটের Super Ace"],
      "3pm-9pm": ["71% - PG স্লটের Reel Love", "73% - HAK ক্রাশ খেলা Mines", "75% - JILI স্লটের Charge Buffalo", "70% - JILI স্লটের Dragon & Tiger"],
      "9pm-3am": ["81% - JILI ফিসিং Bombing Fishing", "71% - BNG স্লটের Sun of Egypt 2", "81% - JILI স্লটের Mines", "75% - JILI স্লটের Fortune Gems"],
      "3am-9am": ["75% - BNG স্লটের Black Wolf", "71% - JILI স্লটের Money Coming", "71% - PP স্লটের Aztec Gems Deluxe", "69% - JILI স্লটের Dragon Treasure"],
      }
      
      ,
    // Saturday
    saturday: {
      "9am-3pm": ["69% - JILI স্লটের Dragon Treasure","71% - BNG স্লটের Sun of Egypt 2", "72% - REVO স্লটের Alchemy Book", "76% - PP স্লটের Barn Festival", "81% - JILI ফিসিং Bombing Fishing"],
      "3pm-9pm": ["71% - JILI স্লটের Money Coming","71% - BNG স্লটের Sun of Egypt 2",  "81% - JILI ফিসিং Royal Fishing", "82% - JILI ফিসিং Dinosaur Tycoon II"],
      "9pm-3am": ["75% - BNG স্লটের Black Wolf", "81% - JILI ফিসিং Golden Land","71% - BNG স্লটের Prosperity Fortune Tree", "81% - JILI স্লটের Mines"],
      "3am-9am": ["75% - JILI স্লটের Charge Buffalo","71% - PG স্লটের Wild Bounty Showdown",  "70% - JILI স্লটের Dragon & Tiger", "70% - PP স্লটের Gates of Olympus™" ],
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



// screenshoot 


document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById('screenshotButton');

  button.addEventListener('click', function() {
    html2canvas(document.body, {
      useCORS: true,
      onrendered: function(canvas) {
          var link = document.createElement('a');
          link.download = 'screenshot.png';
          link.href = canvas.toDataURL();
          link.click(); // Trigger the download
      }
    });

      
  });
});


