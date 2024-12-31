import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import LandingPage from './pages/LandingPage';
    import DataCollectionForm from './pages/DataCollectionForm';
    import BusinessCardPreview from './pages/BusinessCardPreview';
    import './index.css';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form" element={<DataCollectionForm />} />
            <Route path="/preview" element={<BusinessCardPreview />} />
          </Routes>
        </Router>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));
