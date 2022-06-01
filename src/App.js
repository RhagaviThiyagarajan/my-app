import logo from './logo.svg';
import './App.css';

function App() {
  const name=["Rhagavi","Swathi","Anu"];

  const students=[
   { name="Rhagavi"
    pic="https://c.stocksy.com/a/JT7300/z9/743709.jpg?1573689277"/>
  },
  { name="Swathi"
    pic="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"/>
  },
  { 
    name="Anu"
    pic="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"/>
      </div> */}
    },
  ];

   /* <Message name="Rhagavi"
    pic="https://c.stocksy.com/a/JT7300/z9/743709.jpg?1573689277"/>

   <Message name="Swathi"
    pic="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"/>

   <Message name="Anu"
    pic="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"/>
      </div> */
      /* {/* // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p> */
      /* //     Edit <code>src/App.js</code> and save to reload.
      //   </p> */
      {/* //   <a */} 
      {/* //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   //> */}
     // {/* //     Learn React */}
      {/* //   </a> */}
      {/* // </header> */}
   
//   //;
// //
return(
  <div className="App">
    {students.map((student)=>(<Message name={student.name}pic={student.pic}/>
    ))}
</div>
  );
    }
export default App;
function Message(props)
{
  const name=(props);
console.log(props);
  return(
    <div>
      <img className='profilepic' src={props.pic} alt={props.name}/>
      
    <h1>Hello, {props.name}🎉🎉🤩</h1>
    </div> 
  
 

  );
   


}