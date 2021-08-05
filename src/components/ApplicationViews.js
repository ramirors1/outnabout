import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { EventForm } from "./event/EventForm.js"
import { EventDetail } from "./event/EventDetail.js"
import { EventList } from "./event/EventList.js"
import { EventProvider } from "./event/EventProvider.js"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageList } from "./messages/MessageList"
import { MessageForm } from "./messages/MessageForm"
import { UserSearch } from "./users/UserSearch"
import { UserList } from "./users/UserList"
import { UserProvider } from "./users/UserProvider"
import { FriendProvider } from "./friends/FriendProvider"
import { FriendSearch } from "./friends/FriendSearch"
import { FriendDetail } from "./friends/FriendDetail"
import { FriendList } from "./friends/FriendList"
import { InterestedProvider } from "./interested/InterestedProvider"

export const ApplicationViews = () => {
    return (
        <>
      {/* Render the location list when http://localhost:3000/ */}
      
      <Route exact path="/">
        <Home />
      </Route>

      <UserProvider>
          <InterestedProvider>
            <FriendProvider>
                
                <EventProvider>
            <Route exact path="/events">
                <EventList />
            </Route>
            <Route exact path="/events/create">
              <EventForm />
            </Route>  
            <Route exact path="/events/detail/:eventId(\d+)">
		          <EventDetail />
	          </Route>
      </EventProvider>
                </FriendProvider>
                </InterestedProvider>

                <FriendProvider>
                    <Route path="/friends">
                        {/* Render the component for list of friends */}
                    </Route>
                </FriendProvider>

        <InterestedProvider>
          <Route exact path="/interested">
            {/* Render the component for list of interested */}
          </Route>
        </InterestedProvider>   

        <FriendProvider>
          <Route exact path="/friends">
              <FriendSearch />
              <FriendList />
            {/* Render the component for list of friends */}
          </Route>
        </FriendProvider>


        <FriendProvider>
          <UserProvider>
            <Route exact path="/friends/detail/:friendId(\d+)">
                <FriendDetail />
            </Route>
          </UserProvider>
        </FriendProvider>
                <MessageProvider>
                    <FriendProvider>
                        <Route exact path="/messages">
                            <MessageList />
                        </Route>
                        <Route exact path="/messages/edit/:messageId(\d+)">
                            <MessageForm />
                        </Route>
                    </FriendProvider>
                </MessageProvider>

            </UserProvider>

            <UserProvider>
            <Route exact path="/users">
                <UserSearch />
                <UserList />
            </Route>
          </UserProvider>

          </>
    )
} 
