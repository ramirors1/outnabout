import { deleteEvents, getEvents, getUsers } from "../data/provider.js";

const applicationElement = document.querySelector(".outnabout");


applicationElement.addEventListener("click", (click) => {
    if (click.target.id.startsWith("event--")) {
        const [, eventId] = click.target.id.split("--");
        deleteEvent(parseInt(eventId));
    }
});

/*
applicationElement.addEventListener("change", (event) => {
    if (event.target.id === "userOption") {
        let [, userId] = event.target.value.split("--")
        userId = parseInt(userId)
        let usersPosts = document.getElementsByClassName("post").map((post) => post.
        let shownPosts = usersPosts.map((post) => {userId === post.id
            )
   }
})
const hidePosts = () => {
   document.getElementById.(`userPost--${foundUser.id}`).style.display = "none"
}
/*
document.addEventListener("click", (click) => {
    if (click.target.id.startsWith("post--")) {
        const [, postId] = click.target.id.split("--");
        deletePosts(parseInt(postId));
    }
});
*/

export const Events = () => {
    const events = getEvents().sort((a, b) => {
        return b.id - a.id;
    });
    
    const users = getUsers()
    const currentUser = parseInt(localStorage.getItem("gg_user"));
    let foundUser

    let eventHTML = `<div id="eventList" class="eventList">`

    eventHTML += `${events
        .map((event) => {
        foundUser = users.find((user) => user.id === event.userId)
            return `
                <section id="userEvent--${foundUser.id}" class="event">
                    <header>
                        <h2 class="event__title">${event.title}</h2>
                    </header>
                    <img class="event__image" src="${event.url}">
                    <div class="event__description">
                        ${event.description}
                    </div>
                    <div class="event__tagline">
                        Posted by
                        <a href="#" class="profileLink" id="userId">
                        ${foundUser.name}
                        </a>
                        on ${new Date(event.timestamp).toLocaleString()}
                    </div>
                    <div class="event__actions">
                        <div>
                            <img id="favoriteEvent--4" class="actionIcon" src="/images/favorite-star-blank.svg">
                            ${currentUser !==  event.userId ? `<br>` : `<img id="event--${event.id}" class="actionIcon" src="/images/block.svg" alt>`}
                        </div>
                    </div>
                </section>
            `
    })
    .join("")}`

    eventHTML += `</div>`

  return eventHTML;
};