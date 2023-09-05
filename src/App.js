import "./index.css";

import { VeltProvider } from '@veltdev/react';
import Vellum from "./components/Vellum";

export default function App() {

  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <Vellum/>
    </VeltProvider>
  );
}
