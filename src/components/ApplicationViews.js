import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { EventForm } from "./event/EventForm.js"
import { EventDetail } from "./event/EventDetail.js"
import { EventList } from "./event/EventList.js"
import { EventProvider } from "./event/EventProvider.js"

export const ApplicationViews = () => {
    return (
        <>
      {/* Render the location list when http://localhost:3000/ */}
      
      <EventProvider>
            <Route exact path="/">
            <Home />
                <EventList />
            </Route>
            <Route exact path="/events/create">
              <EventForm />
            </Route>  
            <Route exact path="/event/detail/:eventId(\d+)">
		          <EventDetail />
	          </Route>
      </EventProvider>
      
         

      

      {/* <CustomerProvider>
          <Route exact path="/customers">
             <CustomerList />
          </Route>
      </CustomerProvider>    

      <LocationProvider>
          <Route exact path="/locations">
            <LocationList />
          </Route>
          <Route exact path="/locations/create">
            <LocationForm />
          </Route>
      </LocationProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </EmployeeProvider> */}
 

      {/* <Route path="/login">
        <Login />
      </Route> */}
    </>
  );
};
          