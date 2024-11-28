import { useState } from "react";

function LabReport() {
  const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected File:", selectedFile); // For debugging, you can see the selected file in the console
    alert("Lab report submitted!"); // Temporary message
    // No further action after submission yet
  };

  return (
    <div className="flex flex-col items-center justify-center h-4/5">
      <h1 className="text-2xl font-bold mb-6">Upload Your Lab Report</h1>

      {/* Form to upload the PDF */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96 flex flex-col items-center"
      >
        <label className="block text-gray-700 font-medium mb-4">
          Add your lab report (PDF):
        </label>

        <input
          type="file"
          accept="application/pdf" // Only allows PDF uploads
          onChange={handleFileChange}
          className="mb-4 border border-gray-300 rounded px-3 py-2 w-full"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LabReport;
