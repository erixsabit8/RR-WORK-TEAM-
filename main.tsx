import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Ensure global access to jsPDF and xlsx
declare global {
  interface Window {
    jspdf: any;
    jspdf_autotable: any;
    XLSX: any;
  }
}

createRoot(document.getElementById("root")!).render(<App />);
