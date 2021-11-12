import './App.css';
import PayrollForm from './components/payroll-form/PayrollForm';
import {
  BrowserRouter as Router,
    Routes, 
    Route
  }from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" component={PayrollForm} exact />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
