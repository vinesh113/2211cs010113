
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
