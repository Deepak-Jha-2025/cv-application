import "../../styles/customize/ResumeColsEdit.css";

export default function ResumeColsEdit({ onColChange }) {
  return (
    <>
      <h2>Layout</h2>
      <div className="col-buttons">
        <button onClick={() => onColChange('top')}>
          <div className="top-visual visual">
            Top
          </div>
        </button>
        <button onClick={() => onColChange('left')}>
          <div className="left-visual visual">
            Left
          </div>
        </button>
        <button onClick={() => onColChange('right')}>
          <div className="right-visual visual">
            Right
          </div>
        </button>
      </div>
    </>
  );
}
