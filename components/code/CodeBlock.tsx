import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getTheme } from '../../services/color-theme-switcher';
import { eventEmitter } from '../../data/event-emitter';
import { eventThemeSwitch, ParamsThemeSwitch } from '../../data/event-emitter/event';

type Style = { [key: string]: React.CSSProperties };

type Props = {
    codeString: string,
    codeStyle?: Style, // TODO
    // theme?: string,
}

const themeStyleMap = {
    'light': prism,
    'dark': tomorrow,
}

export function CodeBlock({ codeString, codeStyle }: Props): React.ReactElement {
    const [style, setStyle] = useState('light');

    useEffect(() => {
        setStyle(getTheme());

        function switchTheme({ theme }: ParamsThemeSwitch) {
            setStyle(theme ?? style)
        }

        eventEmitter.on([eventThemeSwitch], switchTheme);

        return () => {
            eventEmitter.off([eventThemeSwitch], switchTheme);
        }
    }, []);

    return (
        <SyntaxHighlighter
            style={themeStyleMap[style] ?? prism}
            language="typescript"
        >
            {codeString}
        </SyntaxHighlighter>
    )
}
