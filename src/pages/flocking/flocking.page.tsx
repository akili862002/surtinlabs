import P5JS from "p5";
import { useEffect, useRef } from "react";
import { sketch } from "./flocking.sketch";

export default function FlockingPage() {
  const canvasRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const p5 = new P5JS(sketch, canvasRef.current);

    return () => {
      p5.remove();
    };
  }, []);

  return (
    <div className={""}>
      <div id="canvas-container" ref={canvasRef} />
    </div>
  );
}
