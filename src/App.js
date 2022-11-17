import "./App.css";
import Pdfviewer from "./pages/Pdfviewer";
import Task_one from "./component/task_one";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [pdfSrc, setPdfSrc] = useState(
    "https://mozilla.github.io/pdf.js/web/viewer.html"
  );

  const [formData, setFormData] = useState([
    {
      videoTitle: "",
      videoThumbnail: "",
      videoLink: "",
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={}></Route> */}
          <Route
            exact
            path="/"
            element={
              <Task_one
                setPdfSrc={setPdfSrc}
                formData={formData}
                setFormData={setFormData}
              />
            }
          ></Route>
          <Route
            exact
            path="/Pdfviewer"
            element={
              <Pdfviewer
                pdfSrc={pdfSrc}
                formData={formData}
                setFormData={setFormData}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
