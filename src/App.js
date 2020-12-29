// Liberaries
import React from 'react'
//installed Liberaries
import {Helmet} from 'react-helmet'
//Styles
import './App.css';


const App = () => {
  return (
    <div className="App">
    <Helmet>
      <title>Home Page</title>
      <meta name='description' content='this is first home page in react app from rohith' />
    </Helmet>
      <header className="App-header">
       <p> Website is under constuction. Please vist later...</p>
      </header>
    </div>
  );
}

export default App;
