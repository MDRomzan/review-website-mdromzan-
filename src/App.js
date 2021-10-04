
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './componets/About/About';
import Contact from './componets/Contact/Contact';
import Course from './componets/Course/Course';
import Courses from './componets/Courses/Courses';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import NotFound from './componets/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>

          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/course">
           <Courses></Courses>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
