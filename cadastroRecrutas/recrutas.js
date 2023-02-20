const firstName = prompt("What is your first name?")
const lastName = prompt("What is your last name?")
const studyField = prompt("What is your field of study?")
const birthYear = prompt("What year were you born?")

alert(
    "Registration completed successfully!\n" +
    "\nFull name: " + firstName + " " + lastName +
    "\nStudy Field: " + studyField + 
    "\nAge: " + (2022 - birthYear)
)