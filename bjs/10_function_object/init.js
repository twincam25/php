const secondName = document.querySelector("#surnameOutput");
const firstName = document.querySelector("#firstNameOutput");
const personGender = document.querySelector("#genderOutput");
const yearOfBirthDay = document.querySelector("#birthYearOutput");

function initPerson(){
    const onePerson = personGenerator.getPerson();
    const personGenderVar = onePerson.gender;
    personGender.innerText = personGenderVar; 
    yearOfBirthDay.innerText = onePerson.yearOfBirthDay;
    firstName.innerText = onePerson.firstName + ' ' + onePerson.middleName;
    secondName.innerText = onePerson.secondName;
    personHistory.innerText = onePerson.personHistory; 
};

window.onload = initPerson;

document.querySelector("#btnSubmit").addEventListener('click', initPerson);

document.querySelector("#btnClear").addEventListener('click', (event) => {
    personGender.innerText = ""; 
    yearOfBirthDay.innerText = ""; 
    secondName.innerText = "";
    firstName.innerText = ""; 
    personHistory.innerText = ""; 
});
