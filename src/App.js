import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey = 'd63c512ee46e67297221958e7c6c92262e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
      alanBtn({
        key: alanKey,
        onCommand: ({ command, articles }) => {
          if(command === 'newHeadlines') {
            setNewsArticles(articles);
            alert('This code was executed');
            console.group(articles);
          } 
        }
      })
  }, [])

  return (
    <div>
    <div className={classes.logoContainer}>
    <img src="https://miro.medium.com/max/3072/1*HQrTZ0sZd6m3XigurzBsGA.png" className={classes.alanLogo} alt="logo" />"

    </div>
  
      <NewsCards articles={newsArticles} />
    </div>
  );

}

export default App;