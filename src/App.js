// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import MyComponent from "./MyComponent";
import Home from "./Home";
import Counter from "./Counter";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginComponent setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/my-component"
          element={<MyComponent isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
        />
      <Route path="home" exact component={Home} />

      <Route path="counter" exact component={Counter} />
      </Routes>
    </Router>
  );
};

export default App;
