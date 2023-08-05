
import './App.css';
import React, {Suspense}from 'react';

const Child=React.lazy(()=>import('./Child'))
//useMemon
function App() {
 
  return (

    <div className="App">
      <Suspense fallback={<h2>loadingx...</h2>}><Child/></Suspense>
      

    </div>
  );
}

export default App;
