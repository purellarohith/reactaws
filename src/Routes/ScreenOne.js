import React from 'react';
import {Helmet} from 'react-helmet';
import  './../Css/ScreenOne.css';


const ScreenOne = () => {
  return(
    <div className={'mainDiv'}>
    <Helmet>
      <title>Splash Screen</title>
      <meta name='description' content='this is first home page in react app from rohith' />
      <meta name="author" content="Rohith Purella" />
      <meta name="keywords" content="HTML, CSS, JavaScript,Coddevpro" />
    </Helmet>
   <header>
    <h1 className={'mainTitle'}>
    CodDevPro
    </h1>
    <div className={'loadingDiv'}> 
    </div>
   </header> 
    </div>
  )
}

export default ScreenOne;