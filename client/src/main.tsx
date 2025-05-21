import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Le LanguageProvider est maintenant dans App.tsx
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
