
const Modal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null; // don't render if closed

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      

      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

     
      <div className="relative bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-xl z-10">
        
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">
          {title}
        </h2>

        <p className="text-sm text-[#8090c2] mb-6">
          {message}
        </p>

        <button
          onClick={onClose}
          className="w-full bg-[#9680fb] text-white py-2 rounded-xl hover:bg-[#7f63ff] transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modal;