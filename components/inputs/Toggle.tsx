import styles from './Toggle.module.scss';

type Props = {
    callback: (isChecked: boolean) => void,
    defaultChecked?: boolean,
    className?: string,
    [key: string]: any,
}

export function Toggle({
    callback,
    className,
    defaultChecked,
    ...otherProps
}: Props): React.ReactElement {
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
