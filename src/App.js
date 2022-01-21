import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import OldApp from './OldApp';
import React from 'react';
import SaveQuote from './components/SaveQuote';




const App = () => {
    const [saveQuote, setSaveQuote] = useState([])
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<OldApp saveQuote={saveQuote} setSaveQuote={setSaveQuote}/>}></Route>
                 <Route exact path="/savequotes" element={<SaveQuote saveQuote={saveQuote}/>}/>
            </Routes>
        </Router>
    )

}

export default App;