
export function Welcome(){
    return <h1>Welcome</h1>
}
function UserGreeting(){
    return <h2> User Greet Component</h2>
}
function GuestGreeting(){
    return <h2> Guest Greeting Component</h2>
}
function Greet(props){
   const isLoggedIn = props.isLoggedIn;
//    if(isLoggedIn){
//      return <UserGreeting/>
//    }
//    return <GuestGreeting/>
 return isLoggedIn ? <UserGreeting/> : <GuestGreeting/>
}
export default Greet;