import "./styles.css";

export default function FirstStep() {
  return (
    <section>
      <h2>Without Controls</h2>
      <picture>
        <source srcSet="firstFrame.gif" media="(prefers-reduced-motion)" />
        <img
          src="catSewing.gif"
          alt="A cat sewing yellow-green cloth with a sewing machine."
        />
      </picture>
    </section>
  );
}
