const dateOfBirth =document.querySelector("#date-of-birth");
const luckyNumber =document.querySelector("#lucky-number");
const checkButton=document.querySelector("#check-button");
const outputBox =document.querySelector("#output-box");

function luckyNumberCalculator()
{
    const dob=dateOfBirth.value;
  const sum=dateOfBirthSum(dob);
  compareValues(sum,luckyNumber.value);
};
function dateOfBirthSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));}
    return sum;}
    function compareValues(birthDate,luckyNumber)
{
    if(birthDate%luckyNumber==0)
    {outputBox.innerText="your birthdate is lucky";
           }
    else{outputBox.innerText="your luck doesnt works so plzz u work hardest"
           }
}
checkButton.addEventListener("click", luckyNumberCalculator);