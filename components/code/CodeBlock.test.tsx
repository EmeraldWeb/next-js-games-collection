import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import { CodeBlock } from './CodeBlock';
import { switchTheme } from '../../services/color-theme-switcher';

describe('CodeBlock', () => {
    const testText = 'FooBarBaz';
    const testCodeString = `<button>${testText}</button>`;

    it('check code', () => {
        render(<CodeBlock codeString={testCodeString} />)

        // TODO: https://github.com/testing-library/dom-testing-library/issues/1100
        // const code = screen.getByRole('code');

        const codeText = screen.getByText(testText);
        expect(codeText).toBeInTheDocument();
    })

    it('code style is changed', () => {
        render(<CodeBlock codeString={testCodeString} />);

        const codeText = screen.getByText(testText);
        const tagPre = codeText.closest('pre');
        const defaultBackgroundStyle = tagPre.style.background;

        act(() => {
            switchTheme('dark');
        })

        expect(tagPre).not.toHaveStyle(`background: ${defaultBackgroundStyle}`);

        const newBackgroundStyle = tagPre.style.background;

        act(() => {
            switchTheme('light');
        })

        expect(tagPre).not.toHaveStyle(`background: ${newBackgroundStyle}`);
    })
})
