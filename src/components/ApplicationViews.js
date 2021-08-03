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


export const ApplicationViews = () => {
    return (
        <>
      {/* Render the location list when http://localhost:3000/ */}
      
      <Route exact path="/">
        <Home />
      </Route>

      <UserProvider>
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


                <FriendProvider>
                    <Route path="/friends">
                        {/* Render the component for list of friends */}
                    </Route>
                </FriendProvider>

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

                {/* Render the component for the user's tasks */}
                {/* <TaskProvider>
                    <UserProvider>
                        <Route exact path="/tasks">
                            <TaskList />
                        </Route>
                        <Route exact path="/tasks/create">
                            <TaskForm />
                        </Route>
                        <Route path="/tasks/edit/:taskId(\d+)">
                            <TaskForm />
                        </Route>
                    </UserProvider>
                </TaskProvider> */}

                {/* <FriendProvider>
                    <PlannedEventProvider>
                        <Route exact path="/plannedEvents">
                            <PlannedEventList />
                        </Route>
                        <Route exact path="/plannedEvents/create">
                            <PlannedEventForm />
                        </Route>
                        <Route
                            exact
                            path="/plannedEvents/edit/:plannedEventId(\d+)"
                        >
                            <PlannedEventForm />
                        </Route>
                    </PlannedEventProvider>
                </FriendProvider> */}
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
//       {/* <EventProvider>
//             <Route exact path="/">
//             <Home />
//                 <EventList />
//             </Route>
//             <Route exact path="/events/create">
//               <EventForm />
//             </Route>  
//             <Route exact path="/event/detail/:eventId(\d+)">
// 		          <EventDetail />
// 	          </Route>
//       </EventProvider>
      
//       <MessageProvider>
//            <FriendProvider>
//               <Route exact path="/messages">
//                 <MessageList />
//                 </Route>
//                  <Route exact path="/messages/edit/:messageId(\d+)">
//                 <MessageForm />
//               </Route>
//           </FriendProvider>
//       </MessageProvider>
//  */}
//       {/* <UserProvider>
//         <LocationProvider>
//           <Route exact path="/employees">
//             <EmployeeList />
//           </Route>
//           <Route exact path="/employees/create">
//             <EmployeeForm />
//           </Route>
//         </LocationProvider>
//       </UserProvider> */} 
 

//       {/* <Route path="/login">
//         <Login />
//       </Route> */}
//     {/* </>
//   );
// }; */}
          