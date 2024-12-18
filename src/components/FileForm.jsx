import React, { useState } from "react";
import Modal from "./Modal.jsx"

function FileForm() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleFileTypeChange = (e) => {
    const fileType = e.target.value;
    console.log("Selected file type:", fileType);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
    }
  };

  const handleDownload = () => {
    setIsDownloadModalOpen(true);
  };

  const handleUpload = () => {
    setIsUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
  };

  const closeDownloadModal = () => {
    setIsDownloadModalOpen(false);
  };

  const fileTypes = ["Poduct 2.0", "Fileline", "Item Master"]

  return (
    <div className="mt-10">
      <label for="file-type" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Select file type</label>
      <select id="file-type" className="w-[300px] mx-auto text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
        {fileTypes.map((fileType) => { return <option>{fileType}</option> })}
      </select>
      <div className="flex mt-32 gap-8 justify-between">
        <button
          onClick={handleDownload}
          className="m-4 bg-green-700 boder-transparent hover:bg-green-900 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Download Latest File
        </button>
        <div>
          <label className="block mb-4">
            <input
              type="file"
              onChange={handleFileUpload}
              accept=".xlsx"
              className="block w-full text-sm text-gray-200 bg-gray-700 border border-gray-700 rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500"
            />
          </label>
          <button
            onClick={handleUpload}
            className="bg-green-700 hover:bg-green-900 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Upload File
          </button>
        </div>
      </div>
      {isUploadModalOpen && <Modal onClick={closeUploadModal} modalType="upload"/>}
      {isDownloadModalOpen && <Modal onClick={closeDownloadModal} modalType="download"/>}
    </div>
  );
}
export default FileForm;
