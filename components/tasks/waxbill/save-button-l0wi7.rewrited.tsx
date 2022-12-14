import { useState } from 'react';
import styles from '../../../styles/save-button-l0wi7.module.scss';

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
        <div className={styles.app}>
            <SaveButton onClick={save} saved={saved}></SaveButton>
        </div>
    );
}

const SaveButton = ({ saved, ...buttonProps }) => {
    return (
        <button className={styles.bigButton} {...buttonProps}>
            {saved ? 'Saved ✓' : 'Save'}
        </button>
    );
};
