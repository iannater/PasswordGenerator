// Assignment Code
let generateBtn = document.querySelector("#generate");

let upperCase = ["A","B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"];
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let symbol  = ["!","@", "#","$","%","^","&","*","(",")","_","+"];
let number = ["1","2","3","4","5","6","7","8","9","0"];
let length = ""



function generatePassword(){
var result = [];
  //store characters to include in password
  var possibleChar=[];
  //contain one of ea.  chosen character, to ensure  use
  var guranteeChar =[];


  var length = parseInt(
    prompt ("What would you like the length of your password to be? Must be between 8 and 128 characters."))

    if (length < 8){
      alert('password to short')
    }
    if(length > 128){
      alert('password to long')
    }
  var lowerCaseQ = confirm("Would you like to use lowercase letter?")
  var upperCaseQ = confirm("Would you like to use uppercase letters?")
  var numberQ = confirm("Would you like to use numbers?")
  var specCharQ = confirm("would you like to use special characters?")

  if (lowerCaseQ===false && upperCaseQ === false && numberQ === false && specCharQ === false){

    alert("Must select at least one type in order to generate password")
  }

  var answersObj = {
    lengthObj : length,
    upperObj : upperCaseQ,
    lowerObj : lowerCaseQ,
    numberObj : numberQ,
    specObj : specCharQ,

  }

  if (answersObj.upperObj){
      possibleChar = possibleChar.concat(upperCase);
      guranteeChar.push(random(upperCase));

  }
  if (answersObj.numberObj){
    possibleChar = possibleChar.concat(number);
    guranteeChar.push(random(number));

}

  for (let i = 0; i < answersObj.lengthObj; i++) {
    console.log(possibleChar)
    var res = random(possibleChar)
    result.push(res)
  }

  console.log(result)
  console.log(result.join(""))
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