import { useState } from 'react';
import './styles/App.css';
import Resume from './components/Resume';
import exampleData from './example-data';
import Customize from './components/Customize';

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [currentPage, setCurrentPage] = useState('customize');
  const [resumeLayout, setResumeLayout] = useState('top');

  return (
    <div className="app">
      <div className="edit-side">

        <div className="form-container">
          <Customize
            isShown={currentPage === 'customize'}
            onColChange={setResumeLayout}
          />
        </div>
      </div>

      <Resume
        personalInfo={personalInfo}
        sections={sections}
        layout={resumeLayout}
      />
    </div>
  )
}

export default App
