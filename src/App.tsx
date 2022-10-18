import React, { useState } from "react";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);
  return (
    <div className='App'>
      <FilePond
        files={files}
        onupdatefiles={(f: any) => setFiles(f)}
        allowMultiple={true}
        instantUpload={false}
        server='/api'
        name='files'
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}

export default App;
