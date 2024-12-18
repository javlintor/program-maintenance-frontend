const modalLiteralByType = {
    download: {
        title: "File Downloaded",
        description: "Your file has been sucessfully downloaded.",
    },
    upload: {
        title: "File uploaded",
        description: "Your file has been sucessfully uploaded.",
    }
}

function Modal({ onClick, modalType}) {
    const modalLiteral = modalLiteralByType[modalType]
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-lg font-bold mb-4">{modalLiteral.title}</h2>
                <p className="text-sm text-gray-300 mb-4">{modalLiteral.description}</p>
                <button
                    onClick={onClick}
                    className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition w-full"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
export default Modal;