import React from 'react'
import Jobs from '/Jobs';
import './App.css';


const mockJobs = []
  (title: 'SWE 1', company: "Google",)
]




function App() {
  return (
    <div className="App">
      <Jobs jobs={ 
        mockJobs
      }/>
    </div>
  );
}

export default App;
