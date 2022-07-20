
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =()=> {

  // state={
  //   progress:0
  // }
   const [progress, setProgress]= useState(0);

 
 
    return (
      <>
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route  exact path="/" element={<News setProgress={ setProgress} key="general" pageSize={6} country="in" category="general"/>}>
          </Route>
          <Route  exact path="/buisness" element={<News setProgress={ setProgress} key="buisness" pageSize={6} country="in" category="buisness"/>}>
          </Route>
          <Route exact path="/entertainment" element={
          <News setProgress={ setProgress} key="entertainment" pageSize={6} country="in" category="entertainment"/>}>
          </Route>
          <Route path="/general" key="general" element={
          <News setProgress={ setProgress} pageSize={6} country="in" category="general"/>}>
          </Route>
          <Route exact path="/health" element={
          <News setProgress={ setProgress} key="health" pageSize={6} country="in" category="health"/>}>
          </Route>
          <Route exact path="/science" element={
          <News setProgress={ setProgress} key="science" pageSize={6} country="in" category="science"/>}>
          </Route>
          <Route exact path="/sports" element={
          <News setProgress={ setProgress} key="sports" pageSize={6} country="in" category="sports"/>}>
          </Route>
          <Route exact path="/technology" element={
          <News setProgress={ setProgress} key="technology" pageSize={6} country="in" category="technology"/>}>
          </Route>
        </Routes>
        </Router>
      </div>
      </>
    )
  }

export default App;
