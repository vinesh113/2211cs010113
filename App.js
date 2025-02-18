import React,{useState} from 'react';
import './App.css';
function App(){
  const[key, setKey]=useState("");
  const handleKeyDown=(event)=>{
    setKey(event.key);
  };
  return(
    <div className="app">
      <h1>Welcome to vinesh solutions</h1>
      {key && <h2>Pressed key:{key}</h2>}
      <input type="text" onKeyDown={handleKeyDown} placeholder="pressed here"/>

    </div>
  )
}
export default App;
// function App(){
//     const handleClick=()=>{

//     };
//     return(
//         <button onClick={handleClick}>Click Me</button>
//     )
// }
// export default App;

// import React, { useState } from 'react';

// function App() {
//   // Declare a state variable to hold the text input
//   const [text, setText] = useState('');

//   const handleChange = (event) => {
//     // Update the state when the input changes
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleChange} />
//       <p>Your text: {text}</p>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div>
//       <button
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           backgroundColor: isHovered ? 'lightblue' : 'lightgray',
//           color: isHovered ? 'white' : 'black',
//         }}
//       >
//         Hover
//       </button>

//       {isHovered && <p>Mouse is over the button</p>}
//     </div>
//   );
// }

// export default App;


// import React, { useReducer } from 'react';
// import './App.css';  // Importing the CSS file

// function appleReducer(state = 3, action) {
//   switch(action.type) {
//     case 'ADD_APPLE':
//       return state + 1;

//     case 'EAT_APPLE':
//       return state - 1;
    
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(appleReducer, 3);
  
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Apple Counter</h1>
//       <p>Number of apples: {state}</p>

//       <button onClick={() => dispatch({ type: 'ADD_APPLE' })}>ADD_APPLE</button>
//       <button onClick={() => dispatch({ type: 'EAT_APPLE' })}>EAT_APPLE</button>
//     </div>
//   );
// }

// export default App;



 // import React from 'react';
// import IntermediateComponent from './IntermediateComponent';

// const App = () => { */}
//   const user = { */}
//     name: 'vinesh',
//     email: 'vinesh@gmail.com',
//   };

//   return (
//     <div>
//       <h1>Welcome to the App</h1>
//       <IntermediateComponent user={user} />
//     </div>
//   );
// };
// export default App;
// // import React, { createContext, useContext } from 'react';

// // // Create the context
// // const DataContext = createContext();

// // function App() {
// //   const data = "Hello Vinny";
// //   return (
// //     <DataContext.Provider value={data}>
// //       <div>
// //         <User1 />
// //       </div>
// //     </DataContext.Provider>
// //   );
// // }

// // function User1() {
// //   return <User2 />;
// // }

// // function User2() {
// //   return <User3 />;
// // }

// // function User3() {
// //   return <User4 />;
// // }

// // function User4() {
// //   const data = useContext(DataContext); // Access data from context
// //   return <div>{data}</div>;
// // }

// // export default App;

// // import React from 'react';

// // function App() {
// //   const data = "Hello Vinny";
// //   return (
// //     <div>
// //       <User1 data={data} />
// //     </div>
// //   );
// // }

// // function User1({ data }) {
// //   return <User2 data={data} />;
// // }

// // function User2({ data }) {
// //   return <User3 data={data} />;
// // }

// // function User3({ data }) {
// //   return <User4 data={data} />;
// // }

// // function User4({ data }) {
// //   return <div>{data}</div>;
// // }

// // export default App;


// // import React, { useState } from 'react';
// // import ChildA from './ChildA';
// // import ChildB from './ChildB.js';

// // const Parent = () => {
// //   const [count, setCount] = useState(0);

// //   const increment = () => {
// //     setCount(c => c + 1);
// //   };

// //   return (
// //     <div>
// //       <ChildA />
// //       <ChildB count={count} increment={increment} />
// //     </div>
// //   );
// // };

// // export default Parent;
