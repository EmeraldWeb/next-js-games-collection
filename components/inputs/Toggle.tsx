import styles from './Toggle.module.scss';

export type ToggleProps = {
    callback: (isChecked: boolean) => void,
    alt: string,
    defaultChecked?: boolean,
    className?: string,
    [key: string]: any,
}

export function Toggle({
    callback,
    className,
    defaultChecked,
    ...otherProps
}: ToggleProps): React.ReactElement {
    function handleChange(event) {
        callback(event.target.checked);
    }

    return (
        <label className={`${styles.switch} ${className}`}>
            <input
                className={styles.input}
                type='checkbox'
                onChange={handleChange}
                defaultChecked={defaultChecked ?? false}
                {...otherProps}
            />
            <div className={styles.slider} />
        </label>
    )
}
