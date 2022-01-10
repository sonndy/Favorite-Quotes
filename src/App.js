import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import Quote from './components/Quote';


function App() {
  const QuotesUrl = "https://type.fit/api/quotes";
  const [quotes, setQuotes] = useState([])
  const [index, setIndex] = useState(0);
  
 
  
  const getQuotes = async () => {
    fetch(QuotesUrl)
    .then(response => response.json())
    .then(setQuotes)
  }

  useEffect (()=> {
    getQuotes();
  }, [])

  const checkNumber = (number)=> {
      if(number < 0){
        return quotes.length -1;
      } 
      if(number > quotes.length -1) {
        return 0;
      }
      
      return number;
  }

  const nextQuote = (index)=>{
    setIndex(() => {
      let newIndex = index + 1;
      return checkNumber(newIndex) ;
    })
  }

  const previousQuote = (index)=>{
    setIndex(() => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  if(quotes === null || quotes.length === 0){
    return(
      <div>
        <h1>This page is currently loading please wait</h1>
      </div>
    )
  } else {
    
    return (
    <div className="App">
      <Quote quotes={quotes} index={index} nextQuote={nextQuote} previousQuote={previousQuote}/>
    </div>
  );
  }
  
}

export default App;
