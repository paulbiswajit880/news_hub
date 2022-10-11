import React,{useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import News from './components/News';
import propTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



function App() {
  const [progress, setProgress] = useState(0)
  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
          
        />
        <Navbar />

        <Routes>
          <Route exact key="general" path="/" element={<News setProgress={setProgress} country='in' category='general' />}></Route>
          <Route exact key="business" path="/business" element={<News setProgress={setProgress} country='in' category='business' />}></Route>
          <Route exact key="entertainment" path="/entertainment" element={<News setProgress={setProgress} country='in' category='entertainment' />}></Route>
          <Route exact key="health" path="/health" element={<News setProgress={setProgress} country='in' category='health' />}></Route>
          <Route exact key="science" path="/science" element={<News setProgress={setProgress} country='in' category='science' />}></Route>
          <Route exact key="sports" path="/sports" element={<News setProgress={setProgress} country='in' category='sports' />}></Route>
          <Route exact key="technology" path="/technology" element={<News setProgress={setProgress} country='in' category='technology' />}></Route>
        </Routes>
      </Router>

    </>
  );
}
News.propTypes = {
  country: propTypes.string,
  category: propTypes.string
}

News.defaultProps = {
  country: 'in',
  category: "general"
}


export default App;
