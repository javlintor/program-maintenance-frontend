import React, { useState } from "react";

function FileForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    console.log("Downloading the latest file...");
    // Implement file download logic here
  };


  const handleUpload = () => {
    console.log("Uploading the updated file...");
    // Implement file upload logic here
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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


        {/* File Input */}
        <div>
          <label className="block mb-4">
            <input
              type="file"
              onChange={handleFileUpload}
              accept=".xlsx"
              className="block w-full text-sm text-gray-200 bg-gray-700 border border-gray-700 rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500"
            />
          </label>

          {/* Buttons */}

          <button
            onClick={handleUpload}
            className="bg-green-700 hover:bg-green-900 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Upload File
          </button>
        </div>

      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">File Updated</h2>
            <p className="text-sm text-gray-300 mb-4">Your file has been successfully uploaded.</p>
            <button
              onClick={closeModal}
              className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default FileForm;
