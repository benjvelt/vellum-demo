import "./index.css";

import { VeltProvider } from '@veltdev/react';
import Vellum from "./components/Vellum";

export default function App() {

  return (
    // Velt Setup: Install - 3) Add the VeltProvider component to the root of your app. Add your Velt API key.
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <Vellum/>
    </VeltProvider>
  );
}
