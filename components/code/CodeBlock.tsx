import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Style = { [key: string]: React.CSSProperties };

type Props = {
    codeString: string,
    codeStyle?: Style;
}

export function CodeBlock({ codeString, codeStyle }: Props): React.ReactElement {
    const style = codeStyle ?? materialDark;
    return (
        <SyntaxHighlighter
            style={style}
            language="typescript"
        >
            {codeString}
        </SyntaxHighlighter>
    )
}
