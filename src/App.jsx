import { useState } from 'react';
import './styles/App.css';
import Resume from './components/Resume';
import exampleData from './example-data';
import Customize from './components/Customize';
import Sidebar from './components/Sidebar';
import TemplateLoader from './components/TemplateLoader';

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [currentPage, setCurrentPage] = useState('customize');
  const [resumeLayout, setResumeLayout] = useState('top');
  // Store prevState to revert changes when user clicks "cancel"
  const [prevState, setPrevState] = useState(null);

  return (
    <div className="app">
      <div className="edit-side">
        <Sidebar onGoToPage={setCurrentPage} page={currentPage} />
        <div className="form-container">
          <TemplateLoader
            onTemplateLoad={() => {
              setPersonalInfo(exampleData.personalInfo);
              setSections(exampleData.sections);
            }}
            onClear={() => {
              setPersonalInfo({
                fullName: '',
                email: '',
                phoneNumber: '',
                address: '',
              });
              setSections({educations: [], experiences: []});
              setPrevState(null);
            }}
          />

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
