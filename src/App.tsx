import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen bg-pink-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Hey Champ 💜</h1>
      <p className="text-lg text-gray-600 mb-6">
        I’ve been counting down to this moment.
      </p>
      <button
        onClick={() => setShowModal(true)}
        className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition"
      >
        Click to Reveal
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
