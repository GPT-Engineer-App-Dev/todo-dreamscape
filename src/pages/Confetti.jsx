import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";
import { Button } from "@/components/ui/button";

const Confetti = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Confetti Celebration!</h1>
      <Button onClick={() => setIsConfettiActive(true)} className="mb-4">
        Celebrate!
      </Button>
      {isConfettiActive && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          onConfettiComplete={() => setIsConfettiActive(false)}
        />
      )}
    </div>
  );
};

export default Confetti;
