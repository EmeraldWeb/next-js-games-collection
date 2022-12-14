import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeBlock } from './CodeBlock';
import styles from './CodeMirror.module.scss';

type Style = { [key: string]: React.CSSProperties };

type Props = {
    codeLeft: string,
    codeRight: string,
    titleLeft?: string,
    titleRight?: string,
    codeStyle?: Style,
}

export function CodeMirror(props: Props): React.ReactElement {
    const modifiedStyle = { ...materialDark };
    delete modifiedStyle['pre[class*="language-"]'].margin;

    const codeStyle = props.codeStyle ?? modifiedStyle;

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                {props.titleLeft && <h2 className={styles.title}>{props.titleLeft}</h2>}

                <CodeBlock
                    codeString={props.codeLeft}
                    codeStyle={codeStyle}
                />
            </section>

            <section className={styles.section}>
                {props.titleRight && <h2 className={styles.title}>{props.titleRight}</h2>}

                <CodeBlock
                    codeString={props.codeRight}
                    codeStyle={codeStyle}
                />
            </section>
        </div>
    )
}
