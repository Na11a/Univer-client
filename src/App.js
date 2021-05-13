import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Teacher from "./app/Components/TeacherUser/Teacher";
import Teachers from "./app/Components/TeacherUser/Teachers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/teachers" component={Teachers} />
          <Route path="/teacher/:id" component={Teacher} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
