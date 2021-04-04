import { useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import "./styles.css";

export default function SecondStep() {
  const [play, setPlay] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const handleClick = () => setPlay(!play);
  const text = play ? "Pause" : "Play";
  return (
    <section>
      <h2>With controls</h2>
      {prefersReducedMotion && (
        <button onClick={handleClick} aria-label="play" aria-pressed={play}>
          {text}
        </button>
      )}
      <picture>
        {!play && (
          <source srcSet="firstFrame.gif" media="(prefers-reduced-motion)" />
        )}
        <img
          src="catSewing.gif"
          alt="A cat sewing yellow-green cloth with a sewing machine."
        />
      </picture>
    </section>
  );
}
