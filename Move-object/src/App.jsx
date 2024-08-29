import React, { useRef, useEffect, useState } from 'react';
import './App.css'

function App() {
  const canvasRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });


  const KeyPress = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        setPosition((prev) => ({ ...prev, y: Math.max(prev.y - 10, 0) }));
        break;
      case 'ArrowDown':
        setPosition((prev) => ({ ...prev, y: Math.min(prev.y + 10, canvasRef.current.height - 20) }));
        break;
      case 'ArrowLeft':
        setPosition((prev) => ({ ...prev, x: Math.max(prev.x - 10, 0) }));
        break;
      case 'ArrowRight':
        setPosition((prev) => ({ ...prev, x: Math.min(prev.x + 10, canvasRef.current.width - 20) }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'aqua';
      context.fillRect(position.x, position.y, 20, 20);
    };

    draw();


    window.addEventListener('keydown', KeyPress);

    return () => {
      window.removeEventListener('keydown', KeyPress);
    };
  }, [position]);

  return (
    <div>
      <h1>Move the Square with Arrow Keys</h1>
      <canvas ref={canvasRef} width={1000} height={500} style={{ border: '1px solid white' }} />
    </div>
  );
}

export default App;
