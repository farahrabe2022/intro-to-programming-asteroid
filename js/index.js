// Add copyright to the footer thru DOM manipulation
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.querySelector('#copyright')
copyright.innerHTML = " &copy Faratiana Rabenjamina "+ thisYear;



// Create list of technical skills
var skills = ["HTML", "CSS", "Javascript", "PHP", "MySQL", "BOOTSTRAP", "JELIX", "C++", "JAVA"];


// DOM selection
const skillsSection = document.querySelector('#skills')
const skillsList = skillsSection.querySelector('ul')

// Inside the loop, create a new list item (li) element and store it in a variable named skill

for (let i = 0; i < skills.length; i++) {
  // DOM manipulation (create)
  const skill = document.createElement('li')
  skill.classList.add('tag')
  skill.innerText = skills[i]

  // DOM manipulation (modify)
  skillsList.appendChild(skill)
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
    

    

    document.getElementById("messageList").removeAttribute("class");//show the Message header

    
    // create new message
    newMessage.classList.add('list__item') ;
      newMessage.innerHTML = `<div>
      <a href=mailto: ${email.value} target='_blank'> ${name.value}</a> wrote <span class ="strong" > ${textarea.value} </span></div>`;


    //create a new <button> element
    const removeButton = document.createElement('button') ;
    //set the inner text to “remove”
    removeButton.innerText = 'X' ;

    //set the type attribute to “button”
    removeButton.type = 'button' ;
    removeButton.classList.add('button', 'button_remove');

    //add an event listener that handles the “click” event
    removeButton.addEventListener('click', (event) => {
      //find the button’s parent element using DOM Traversal
      const entry = event.target.parentNode
        
      //remove the entry element from the DOM
      const list = entry.parentNode

        // if there are no other messages, hide the section
          if(list.children.length <= 1) {
          //messageSection.style.display = 'none'
          document.getElementById("messageList").classList.add("hidden");

          }
          entry.remove();

    })


    // EDIT 

    // create edit button
    const editButton = document.createElement('button')
    editButton.innerText = 'Edit';
    editButton.type = 'button'
    editButton.classList.add('button','button_edit');

    editButton.addEventListener('click', (event) => {
      const button = event.target
      const entry = button.parentNode

      if (button.innerText === 'Edit') {
        const message = entry.querySelector('span')
        const input = document.createElement('input')
        input.type = 'text'
        input.value = message.innerText
        input.classList.add('field__input')

        message.after(input)
        message.remove()

        button.innerText = 'Save'
      } else {
        const input = entry.querySelector('input')
        const message = document.createElement('span')
        message.innerText = input.value
        message.classList.add('strong')

        input.after(message)
        input.remove()

        button.innerText = 'Edit';
      }
    })

    newMessage.appendChild(editButton)

    // END OF EDIT_CODE 
    
    //append the removeButton to the newMessage element
    newMessage.appendChild(removeButton)
    //append the newMessage to the messageList element
    messageList.appendChild(newMessage)

    // //add a new line of code to clear the form
    messageForm.reset();

    

   
  });


  //Add List of Public repositories retrieved from GitHub API via fetch 

  fetch('https://api.github.com/users/farahrabe2022/repos')
      .then((response) => response.json())
      .then((data) => {
        // filter out irrelevant repositories
        const filteredData = data.filter((repo) =>
          repo.name.includes('intro-to-programming')
        )

        const projectSection = document.querySelector('#projects')
        const projectList = projectSection.querySelector('ul')

        for (let repository of filteredData) {
          const project = document.createElement('li')
          project.innerHTML = `<a class="link link--no-decor" href="${repository.html_url}">${repository.name}</a>`
          projectList.appendChild(project)
        }
      })
      .catch(error=>console.log('Looks like there is an error',error))


  
  
  