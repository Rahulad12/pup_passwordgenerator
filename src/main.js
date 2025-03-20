import { generatePassword } from "./js/controllers/generatePassword.js";
import {
  getElements,
  copyToClipboard,
  refreshPassword,
  chageFooterYear,
} from "./js/helper.js";

const app = () => {
  const { passwordLength, uppercase, lowercase, numbers, symbols } =
    getElements();

  generatePassword(); //calling generatePassword function it will invoke when the page is loaded

  passwordLength.addEventListener("input", generatePassword); //calling generatePassword function it will invoke when the password length is changed
  uppercase.addEventListener("change", generatePassword); //calling generatePassword function it will invoke when the uppercase checkbox is checked
  lowercase.addEventListener("change", generatePassword); //calling generatePassword function it will invoke when the lowercase checkbox is checked
  numbers.addEventListener("change", generatePassword); //calling generatePassword function it will invoke when the numbers checkbox is checked
  symbols.addEventListener("change", generatePassword); //calling generatePassword function it will invoke when the symbols checkbox is checked

  copyToClipboard();
  refreshPassword();
  chageFooterYear();
};
app();
