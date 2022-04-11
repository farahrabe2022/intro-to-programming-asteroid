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

// handle Message Form Submit


//using “DOM Selection”, select the “leave_message” form by name attribute
var messageForm = document.getElementsByName('leave_message')[0];
//add an event listener to the messageForm element that handles the “submit” event

messageForm.addEventListener('submit', (event) => {
    //inside the callback function, create a new variable for each of the three form fields
    event.preventDefault(); // new line to prevent the default refreshing behavior of the "submit" event
    const name = event.target.name;
    const email = event.target.email;
    const textarea = event.target.message;
    console.log(name.value, email.value, textarea.value);

    //Display Messages in List

    //using “DOM Selection”, select the #messages section by id
    const messageSection = document.getElementById('messages');

    //using “DOM Selection”, query the messageSection to find the <ul> element
    const messageList = messageSection.querySelector('ul');

    //create a new list item (li) element
    const newMessage = document.createElement('li');

    //set the innerHTML of your newMessage with the following information:
    //<a> element that displays the “name” and links to the “email” (hint: use the mailto: prefix)
    //<span> element that displays the “message”

    
    
    newMessage.innerHTML = `<a href=mailto: ${email.value} target='_blank'> ${name.value}</a> <span> wrote: ${textarea.value} </span>`;


    //create a new <button> element
    const removeButton = document.createElement('button') ;
    //set the inner text to “remove”
    removeButton.innerText = 'remove' ;

    //set the type attribute to “button”
    removeButton.type = 'button' ;

    //add an event listener that handles the “click” event
    removeButton.addEventListener('click', (event) => {
      //find the button’s parent element using DOM Traversal
     const entry = event.target.parentNode
      //remove the entry element from the DOM
    entry.remove();

})
    
    //append the removeButton to the newMessage element
    newMessage.appendChild(removeButton)
    //append the newMessage to the messageList element
    messageList.appendChild(newMessage)

    // //add a new line of code to clear the form
    messageForm.reset();
  });