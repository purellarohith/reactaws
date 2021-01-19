// Liberaries
import React from 'react'
//installed Liberaries
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';

//Screens
import ScreenOne from './Routes/ScreenOne';





const App = () => {
  return(
          <Router>
              <Switch>
                <Route path='/' exact  component = {ScreenOne}
                />
              </Switch>
          </Router>
  )  
}




export default App;

/**
 * <Helmet>
      <title>Home Page</title>
      <meta name='description' content='this is first home page in react app from rohith' />
    </Helmet>
 */