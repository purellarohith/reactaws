import React from 'react';
import {Helmet} from 'react-helmet';
import  './../Css/ScreenOne.css';


const ScreenOne = () => {
  return(
    <div className={'mainDiv'}>
    <Helmet>
      <title>Home Page</title>
      <meta name='description' content='this is first home page in react app from rohith' />
    </Helmet>
    <h1 className={'mainTitle'}>
    CodDevPro
    </h1>
    <div className={'loadingDiv'}> 
    </div>
    </div>
  )
}

export default ScreenOne;