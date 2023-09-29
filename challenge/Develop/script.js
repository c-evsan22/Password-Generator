// Assignment Code
var password = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';

  const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = '';

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}

const password = generatePassword();
console.log(password);