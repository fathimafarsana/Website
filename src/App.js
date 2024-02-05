// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import MyComponent from "./MyComponent";
import Home from "./Home";
import Layout from "./Layout";
import FormBuilder from './FormBuilder';
import Counter from "./Counter";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
          element={
            <Layout>
              <DndProvider backend={HTML5Backend}>
                <MyComponent
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                />
              </DndProvider>
            </Layout>
          }
        />
        <Route path="/form-builder" element={<Layout><FormBuilder /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        {isAuthenticated && (
          <Route path="/counter" element={<Layout><Counter /></Layout>} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
