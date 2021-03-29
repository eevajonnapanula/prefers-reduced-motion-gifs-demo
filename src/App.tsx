import { useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import "./styles.css";

export default function App() {
  const [play, setPlay] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const handleClick = () => setPlay(!play);
  const text = play ? "Pause" : "Play";
  return (
    <section>
      <h1>Reduced Motion GIF-Example</h1>
      {prefersReducedMotion && (
        <button onClick={handleClick} aria-label="play" aria-pressed={play}>
          {text}
        </button>
      )}
      <picture>
        <source srcSet="frame1.gif" media="(prefers-reduced-motion)" />

        <img
          src="cat-sewing.gif"
          alt="A cat sewing yellow-green cloth with a sewing machine."
        />
      </picture>
    </section>
  );
}
