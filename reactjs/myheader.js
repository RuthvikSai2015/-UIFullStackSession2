//create element
const element = React.createElement("h1",draggable=true,"Welcome to React JS");

//taking the container
const mycontainer = document.getElementById("root");

//render
ReactDOM.render(element,mycontainer);