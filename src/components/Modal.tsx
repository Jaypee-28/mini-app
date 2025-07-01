import { useEffect } from "react";
import Confetti from "react-confetti";

type Props = {
  show: boolean;
  onClose: () => void;
};

export default function Modal({ show, onClose }: Props) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      if ("vibrate" in navigator) {
        navigator.vibrate([200, 100, 200]); // mobile only
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <Confetti />
      <div className="bg-white rounded-xl p-6 shadow-xl max-w-sm text-center relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-400 text-2xl hover:text-red-500"
        >
          &times;
        </button>
        <img
          src="/presh.jpg"
          alt="Presh"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          Welcome Back, Sis! 💜
        </h2>
        <p className="text-gray-700">
          You survived the drills, the sun, the stress — and you did it with
          grace. I’m so proud of you, and I’ve missed you more than words can
          say.
        </p>
      </div>
    </div>
  );
}
