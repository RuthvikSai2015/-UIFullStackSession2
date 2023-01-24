function TraceComponent({componentname="Trace Default",title,name,number,showTitle}){
    // console.log(props);
    let value = 10+number;
    console.log("number-----------",value);
    console.log("show title ----------",showTitle);
    return(
        <>
         {/* <h1> Trace Component {props.componentname}</h1><br/>
         <span> Title {props.title}</span><br/>
         <span> Name {props.name}</span><br/> */}
          <h1> {componentname}</h1><br/>
         <span> Title {title}</span><br/>
         <span> Name {name}</span><br/>
        </>
    )
}
export default TraceComponent;