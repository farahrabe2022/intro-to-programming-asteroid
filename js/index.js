// Add copyright to the footer thru DOM manipulation
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = " &copy Faratiana Rabenjamina "+ thisYear;
footer.appendChild(copyright);

// Create list of technical skills
var skills = ["HTML", "CSS", "Javascript", "PHP", "MySQL", "BOOTSTRAP", "JELIX", "C++", "JAVA"];
const skillsSection = document.getElementById('skills');
var skillList = skillsSection.querySelector('ul');

for(let i=0; i<skills.length; i++)
{
    //console.log(skills[i]);
    // Inside the loop, create a new list item (li) element and store it in a variable named skill
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillList.appendChild(skill);

}