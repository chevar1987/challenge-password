// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
// Get the generate button
var generateBtn = document.querySelector("#generate");

// Write the password to the password text box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate the password based on user's criteria
function generatePassword() {
  // Ask the user for password length
  var passwordLength = prompt("Enter the password length (minimum 8, maximum 128 characters):");
  passwordLength = Number(passwordLength);

  // Check if the password length is correct, if not, ask again
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters. Please try again.");
    return generatePassword();
  }

  // Ask the user if they want to include lowercase characters
  var includeLowercase = confirm("Include lowercase characters in password?");
  // Ask the user if they want to include uppercase characters
  var includeUppercase = confirm("Include uppercase characters in password?");
  // Ask the user if they want to include special characters
  var includeSpecial = confirm("Include special characters in password?");

  // Check if the user selected at least one character type
  if (!includeLowercase && !includeUppercase && !includeSpecial) {
    alert("You must select at least one character type (lowercase, uppercase, special)");
    return generatePassword();
  }

  // Create lowercase characters
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  // Create  uppercase characters
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Create  special characters
  var specialChars = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";

  // Start with an empty characters
  var possibleChars = "";

  // Add lowercase characters to possible characters
  if (includeLowercase) {
    possibleChars = possibleChars + lowercaseChars;
  }
  // Add uppercase characters to possible characters
  if (includeUppercase) {
    possibleChars = possibleChars + uppercaseChars;
  }
  // Add special characters to possible characters
  if (includeSpecial) {
    possibleChars = possibleChars + specialChars;
  }

  // Start with an empty password string
  var password = "";

  // Repeat the password length times
  for (var i = 0; i < passwordLength; i++) {
    // Pick a random character from possible characters and add it to the password
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    password = password + possibleChars[randomIndex];
  }

  // Return the generated password
  return password;
}

// Add a click event to the generate button
generateBtn.addEventListener("click", writePassword);
