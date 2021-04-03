import "./App.css";
import React from "react";
import { Router, Link } from "@reach/router";
import Dashboard from "./views/Dashboard";
import NewBooze from "./views/NewBooze";
import Rules from "./views/Rules";
import NewRecipe from "./views/NewRecipe";
import BoozeInfo from "./components/BoozeInfo";
import BoozeView from "./views/BoozeView";
import RecipeView from "./views/RecipeView";
import RecipeInfo from "./components/RecipeInfo";
// import EditBooze from './components/EditBooze';
// import EditRecipe from './components/EditRecipe';
import background from "./barPics/BarBlackObsidian.jpg";


function App() {
  return (
    
      <html>
        <body style={{ backgroundImage: `url(${background})`}}>
          {/* <body style={{ backgroundColor: "#999999"}}> */}
          <div className="container pt-3">
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light fixed-top text-center "
            role="navigation" 
          >
            
              <div className="navbar-header" >
                <a style={{ color: "rgb(15 124 18)" }} className="navbar-brand">  404 BoozeBot</a>
              </div>
              <div>
              | &nbsp;
                <Link to="/">Home</Link> | &nbsp;
                <Link to="/Rules">Rules</Link> | &nbsp;
                <Link to="/booze/new">Add Booze</Link> | &nbsp;
                <Link to="/recipe/new">Add Recipe</Link>
              </div>
          </nav>
            </div>
          <br />
          <br />
          <br />
          <div className="container pt-3">
            <div>
              <Router>
                <Dashboard path="/" />
                <Rules path="/Rules" />
                <NewBooze path="/booze/new" />
                <BoozeInfo path="booze/:id" />
                <BoozeView path="/booze/:id/review" />
                <NewRecipe path="/recipe/new" />
                <RecipeInfo path="/recipe/:id" />
                <RecipeView path="/recipe/:id/review" />
                {/* <EditBooze path="/booze/:id/edit"/> */}
                {/* <EditRecipe path="/recipe/:id/edit"/> */}
              </Router>
            </div>
          </div>
        </body>
      </html>
    
  );
}

export default App;
