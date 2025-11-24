const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const textInputCleaned = textInput.value
    .trim()
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();

  if (textInputCleaned === "") {
    alert("Please input a value");
    result.innerText = "";
    return;
  }

  const textInputReversed = textInputCleaned.split("").reverse().join("");
  if (textInputCleaned === textInputReversed) {
    result.innerText = `${textInputCleaned} is a palindrome`;
  } else {
    result.innerText = `${textInputCleaned} is not a palindrome`;
  }
});
