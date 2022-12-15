// must be used internationalization
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from '../../../styles/invalid-removing-legavy-csbcl.module.scss';

type Props = {
    inputsDict?: {
        [id: string]: string,
    },
}

// used as default export because code highlighting issues, must be simple export
export default function TaskExample(props: Props): React.ReactElement {
    const defaultDict = { // maybe better to replace on Map
        '1': '',
        '2': '',
        '3': '',
    };

    const [dict, setDict] = useState(props.inputsDict ?? defaultDict);

    function changeValue(event: React.FormEvent<HTMLInputElement>, id: string): void {
        const newDict = {...dict};
        newDict[id] = event.currentTarget.value;
        setDict(newDict);
    }

    function removeInput(id: string): void {
        const newDict = {...dict};
        delete newDict[id]
        setDict(newDict);
    }

    function addInput(): void {
        const newDict = {...dict};
        newDict[uuidv4()] = '';
        setDict(newDict);
    }

    function processSummary(dictionary: typeof dict): string { // maybe better to move in utils
        return Object.values(dictionary)
            .filter((str) => str)
            .join(', ');
    }

    const dictItems = Object.keys(dict).map((id: string) => { // maybe better to extract in another component
        return (
            <li
                key={id}
                className={styles.listItem}
            >
                <label className={styles.input}>
                    <input
                        type='text'
                        onChange={(event) => {changeValue(event, id)}}
                        value={dict[id]}
                    />
                </label>

                <button
                    className={styles.removeButton}
                    type='button'
                    onClick={() => removeInput(id)}
                    title={'Delete Input'}
                >
                   {'X'}
                </button>

                <span className={styles.inputDesc}>
                    {`Input with id = ${id}`}
                </span>
            </li>
        )
    });

    return (
        <div className={styles.task}>
            <ul className={styles.list}>
                {dictItems}
            </ul>

            <button
                className={styles.addButton}
                type='button'
                onClick={addInput}
            >
                {'Add Input'}
            </button>

            <div className={styles.summary}>
                <span>
                    {`Summary: ${processSummary(dict)}`}
                </span>
            </div>
        </div>
    );
}
