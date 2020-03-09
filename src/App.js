import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from './screens/Dashboard'
function App() {
  return (
    <div className="App">
         <BrowserRouter>
						<Route path="/" component={Dashboard} />
					</BrowserRouter>
    </div>
  );
}

export default App;
