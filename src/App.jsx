import { useState } from 'react';
import './styles/App.css';
import Customize from './components/Customize';

function App() {
  const [currentPage, setCurrentPage] = useState('customize');
  const [resumeLayout, setResumeLayout] = useState('top');

  return (
    <div className="app">
      <Customize
        isShown={currentPage === 'customize'}
        onColChange={setResumeLayout}
      />
    </div>
  )
}

export default App
