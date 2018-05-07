export default function reducer(state = { devices: [] }, action) {
   switch(action.type) {
      case "LOGGING_IN":
         return {...state, loggingIn: true}
      case "LOGGED_IN":
         return {...state, loggedIn: true}
   }
}