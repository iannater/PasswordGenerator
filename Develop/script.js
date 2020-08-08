// Assignment Code
let generateBtn = document.querySelector("#generate");
//Created these variables and arrays in order to allow users to select different password options.
let upperCase = ["A","B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let symbol  = ["!","@", "#","$","%","^","&","*","(",")","_","+"];
let number = ["1","2","3","4","5","6","7","8","9","0"];



function generatePassword(){
  var result = [];
  //store characters to include in password
  var possibleChar=[];
  //contain one of ea.  chosen character, to ensure  use
  var guranteeChar =[];

  // Asking the user how many characters they would like their password to be.
  var length = parseInt(
    prompt ("What would you like the length of your password to be? Must be between 8 and 128 characters."))
  // if statement to keep users from selecting a password that is too short or too long. 
    if (length < 8){
      alert('password to short')
    }
    if(length > 128){
      alert('password to long')
    }

  // Showing the user some confirm messages in order to build their password to their desired spec. 
  var lowerCaseQ = confirm("Would you like to use lowercase letter?")
  var upperCaseQ = confirm("Would you like to use uppercase letters?")
  var numberQ = confirm("Would you like to use numbers?")
  var specCharQ = confirm("would you like to use special characters?")

  // If statement making sure that the user selects at least one option. If not we will alert them that they must select at least one type.

  if (lowerCaseQ===false && upperCaseQ === false && numberQ === false && specCharQ === false){

    alert("Must select at least one type in order to generate password")
  }

  // creating an object so that we can store the user inputs and pass them to the function below. 

  var answersObj = {
    lengthObj : length,
    upperObj : upperCaseQ,
    lowerObj : lowerCaseQ,
    numberObj : numberQ,
    specObj : specCharQ,

  }
  // if statements that are reading stored customer inputs from the answersObj and generating results based on selections. 
  if (answersObj.upperObj){
      possibleChar = possibleChar.concat(upperCase);
      guranteeChar.push(random(upperCase));

  }
  if (answersObj.numberObj){
    possibleChar = possibleChar.concat(number);
    guranteeChar.push(random(number));

}

  if (answersObj.specObj){
  possibleChar = possibleChar.concat(symbol);
  guranteeChar.push(random(symbol));
}

  if (answersObj.lowerObj){
  possibleChar = possibleChar.concat(lowerCase);
  guranteeChar.push(random(lowerCase));
}


  for (let i = 0; i < answersObj.lengthObj; i++) {
    console.log(possibleChar)
    var res = random(possibleChar)
    result.push(res)
  }

  return result.join("")

};

function random(arr){
  var index = Math.floor(Math.random() * arr.length)
  var el = arr[index];
  return el;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//addevntlistenr to button
  // call function
  // - propmt user w/ a series of questions 
  //    -ask length? if< 8 prompt to small / if > 128 prompt to large
  // - as a series of confirms (answers are only true or false);
  // if all 4 confirms are false , alert use with " must select at least on character"
  // create an obj. 5 keys ( length, speachchar, numericchar, lowerchar, upperchar)

  //if obj.speachar  
  // var possChar = []
// if obj.specChar -> possChar concat symbol, 