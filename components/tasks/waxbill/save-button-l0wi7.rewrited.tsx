// must be used internationalization
import React, { useState, useRef, ForwardedRef } from 'react';
import styles from '../../../styles/save-button-l0wi7.module.scss';

// used as default export because code highlighting issues, must be simple export
export default function App(): React.ReactElement {
    const [isSaved, setSaved] = useState(false);
    const saveButtonRef = useRef<any>();

    function save() {
        if (isSaved) {
            return;
        }

        setSaved(!isSaved);

        setTimeout( () => {
            const buttonNode = saveButtonRef.current;
            if (buttonNode) {
                const attributeValue = buttonNode.getAttribute('data-is-saved');
                setSaved(!attributeValue);
            }
        }, 1000);
    }

    return (
        <div className={styles.app}>
            <SaveButton
                forwardRef={saveButtonRef}
                onClick={save}
                isSaved={isSaved}
                data-is-saved={isSaved}
            />
        </div>
    );
}

type ButtonProps = {
    isSaved: boolean,
    forwardRef: ForwardedRef<any>,
    [key: string]: any,
}

const SaveButton = ({ isSaved, forwardRef, ...buttonProps }: ButtonProps): React.ReactElement => {
    return (
        <button
            ref={forwardRef}
            className={styles.bigButton}
            {...buttonProps}
        >
            {isSaved ? 'Saved ✓' : 'Save'}
        </button>
    );
};
