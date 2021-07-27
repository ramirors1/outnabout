import { addNewPost } from "/scripts/data/provider.js"

const applicationElement = document.querySelector(".outnabout")


//click event and function for displaying initially hidden new post form

applicationElement.addEventListener("click", (event) => {
   if (event.target.id === "miniMode") {
      showEventDiv()
   } 
})

const showEventDiv = () => {
   document.getElementById("miniMode").style.display = "none"
   document.getElementById("newEvent").style.display = "block"
}


//click event and function for hiding post form

applicationElement.addEventListener("click", (event) => {
   if (event.target.id === "newEvent__cancel") {
      showMiniMode()
   }
})

const showMiniMode = () => {
   document.getElementById("miniMode").style.display = "block"
   document.getElementById("newEvent").style.display = "none"
}


//click event for posting new post to api

applicationElement.addEventListener(
    "click", event => {
        if (event.target.id === "newEvent__submit") {
            const eventTitle = document.getElementById("postTitle").value
            const eventURL = document.getElementById("postURL").value
            const eventDescription = document.getElementById("postDescription").value
            const eventUserId = parseInt(localStorage.getItem('gg_user'))

            const eventObj = {
               userId: eventUserId,
               title: eventTitle,
               url: eventURL,
               description: eventDescription,
               timestamp: Date.now()
            }

            addNewEvent(eventObj)

            console.log(`New event sent to api: ${eventObj}`)
        }
    }
)


//build the html for displaying the new post form

export const addEventForm = () => {

   let addEventHTML = `<div id="addEvent">`

   addEventHTML += `
      <div class="miniMode" id="miniMode">
         Have an event to post?
      </div>
      <div id="newEvent" class="newEvent">
         <div>
            <input value="" id="eventTitle" name="eventTitle" class="newEvent__input" type="text" placeholder="Title">
         </div>
         <div>
            <input value="" id="eventURL" name="eventURL" class="newEvent__input" type="text" placeholder="URL of event">
         </div>
         <textarea id="eventDescription" name="eventDescription" class="newEvent__input newEvent__description" placeholder="Story behind your event..."></textarea>
         <button id="newEvent__submit">Save</button>
         <button id="newEvent__cancel">Delete</button>
      </div>
   `

   addEventHTML += `</div>`

   return addEventHTML
}