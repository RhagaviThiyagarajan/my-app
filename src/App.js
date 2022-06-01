      import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
function App()
{
// const name="Rhagavi"
// const time=30;
const names=["Rhagavi","swathi","Anu","Pooja"];
const students=[
{
  nm:"Rhagavi",
  pic:"https://thumbs.dreamstime.com/z/happy-blonde-woman…t-happy-blonde-woman-fashion-golden-141968924.jpg"
  
},
{
  nm:"Swathi",
  pic :"https://thumbs.dreamstime.com/z/profile-view-happy…tudio-shot-against-white-background-176896120.jpg"
},
{
  nm:"Anu",
  pic:"https://www.designbolts.com/wp-content/uploads/2019/02/girl-laughing-smiling-free-stock-photo-1.jpg"

},
{
  nm:"Pooja",
  pic:"https://thumbs.dreamstime.com/z/side-view-attractive-happy-woman-making-add-170901128.jpg"
},
];


return(
  <div className='App'>
    
    
   
{
students.map(student=>
<Welcome names={student.nm} pic={student.pic}/>)
}

 {/* {
 names.map(nm=>
 <Message names={nm}/>)
}  */}


   
</div>
);

}
//props are the way to pass arg to components

export default App;
 
//create Component  
 //func becoming component

 //first letter should be component

// it should return one and only jsx elem
 
   //defined the component 
 //logic + view part
 function Message(pic,name)
 {
   console.log(pic,name);
   // const name=props.name;
   return( 
   <div>
     <img className="profile-pic"src={pic} alt={name}/>
 
 <h1>Hello,{name}🎉</h1>
 </div>)
 }

 function Welcome(props)
 {
    console.log(props);
   // const name=props.name;
   return( 
   <div>
     <img className="profile-pic"src={props.pic} alt={props.names}/>
 
 <h1>Hello,{props.names  }🎉</h1>
 </div>)
 }