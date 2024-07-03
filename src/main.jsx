import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./Hello";
import ImageReact from "./Image";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Hello />
        <ImageReact />
    </React.StrictMode>
);
