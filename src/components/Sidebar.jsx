import "../styles/Sidebar.css";
import html2pdf from "html2pdf.js";

const handleDownload = () => {
  const resumeContainer = document.querySelector(".resume-container");

  const opt = {
    margin: 0,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 }, // For any embedded images
    html2canvas: { scale: 2, useCORS: true }, // Increase scale for better resolution, CORS for images from URLs
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(opt).from(resumeContainer).save();
};

export default function Sidebar({ onGoToPage, page }) {
  return (
    <nav className="sidebar">
      <button
        onClick={() => onGoToPage("content")}
        data-selected={page === "content"}
      >
        <i className="fa-regular fa-file-lines" />
        Content
      </button>
      <button
        onClick={() => onGoToPage("customize")}
        data-selected={page === "customize"}
      >
        <i className="fa-solid fa-pen-ruler" />
        Customize
      </button>
      <button onClick={handleDownload}>
        <i className="fa-solid fa-download" />
        Download
      </button>
    </nav>
  );
}
