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
       <p>This is Rohith Purella Using Netlify and Buddy.Work for React app to go <b>ONLINE</b> </p>
      </header>
    </div>
  );
}

export default App;
