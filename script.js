const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// Function for checking user input is palindrome or not
const checkPalindrome = (input) => {
  // Cleaning non-alphanumeric user input
  const userInputCleaned = userInput.value
    .trim()
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();

  // Checking user input is empty or not
  if (userInputCleaned === "") {
    alert("Please input a value");
    result.innerText = "";
    return;
  }

  // Checking user input can spelling the same way both forward and backward or not
  const userInputReversed = userInputCleaned.split("").reverse().join("");
  if (userInputCleaned === userInputReversed) {
    result.innerText = `${userInput.value} is a palindrome`;
  } else {
    result.innerText = `${userInput.value} is not a palindrome`;
  }
};

// Call check palindrome function when user press Enter button
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkPalindrome();
  }
});

// Call check palindrome function when user click Check button
checkBtn.addEventListener("click", checkPalindrome);
