import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import ApplicantsList from './ApplicantsList';
import ApplyJob from './ApplyJob';
import Create from './Create';
import Home from './Home';
import JobDetails from './JobDetails';
import Navbar from './Navbar';

const App = () => {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/jobs/:id">
              <JobDetails />
            </Route>
            <Route path="/applyjob/:id">
              <ApplyJob />
            </Route>
            <Route path="/applicantslist">
              <ApplicantsList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    //  <div className="app">
    //     <Navbar />
    //     <Router>
    //       <div className="content">
    //         <Routes>
    //             <Route exact path="/" element={<Home/>}/>
    //             <Route exact path="/create" element={<Create/>}/>
    //             <Route exact path="/jobs/:id" element={<JobDetails/>}/>
    //         </Routes>
    //       </div>
    //     </Router>
    //   </div>
  );
};

export default App;
