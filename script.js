// Assignment code here


// Get references to the #generate element
 let generateBtn = document.querySelector("#generate");
 let symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
 let passLength = 128;

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

for (let i = 8; i <= passLength; i++) {
  let randomNumber = Math.floor(Math.random() * symbols.length);
  password += symbols.substring(randomNumber, randomNumber +1);
}
// Add event listener to generate button
document.getElementById("password").value = password;
generateBtn.addEventListener("click", writePassword);

//const password = document.querySelector('password');
//const btn = document.querySelector('button');

//let items = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()'
//et passLength = 128;
//let passValue = '';

//const createPass = () => {
  //passValue = '';

  //for(let i = 7; i < passLength; i++) {
    //let number = Math.floor(Math.random() * items.length);
    //passValue += items.substring(number, number + 1);
  //}

 //password.value = passValue;
//}

//btn.addEventListener('click', createPass);