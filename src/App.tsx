import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

import "./styles.css";

export default function App() {
  return (
    <section>
      <h1>Reduced Motion GIF-Example</h1>
      <p>
        If you don't have the reduced motion-setting on your operating systems
        level, you should see two identical, moving gifs. You might want to
        emulate the <code>prefers-reduced-motion</code> media-feature. It can be
        done at least with Chrome and Edge,{" "}
        <a href="">instructions for it can be found from here.</a>
      </p>
      <FirstStep />
      <SecondStep />
    </section>
  );
}
