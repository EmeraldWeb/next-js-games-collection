// @ts-nocheck
/* eslint-disable */
import { useState } from "react";

export default function App() {
    const [saved, setSaved] = useState(false);

    const save = () => {
        if (saved) {
            return;
        }
        setSaved(!saved);

        setTimeout(() => {
            setSaved(!saved);
        }, 1000);
    };

    return (
        <div className="App">
            <SaveButton onClick={save} saved={saved}></SaveButton>
        </div>
    );
}

const SaveButton = ({ saved, ...buttonProps }) => {
    return (
        <button className={"big-button"} {...buttonProps}>
            {saved ? "Saved ✓" : "Save"}
        </button>
    );
};
