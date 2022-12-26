import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CodeMirror } from './CodeMirror';

describe('CodeMirror', () => {
    const titleLeft = 'LEFT-FOO';
    const testTextLeft = 'LeftFooBarBaz';
    const testCodeStringLeft = `<button>${testTextLeft}</button>`;

    const titleRight = 'RIGHT-BAR';
    const testTextRight = 'RightFooBarBaz';
    const testCodeStringRight = `<button>${testTextRight}</button>`;

    it('render two code blocks with two headings', () => {
        render(
            <CodeMirror
                titleLeft={titleLeft}
                codeLeft={testCodeStringLeft}
                titleRight={titleRight}
                codeRight={testCodeStringRight}
            />
        )

        // TODO: https://github.com/testing-library/dom-testing-library/issues/1100
        // const code = screen.getByRole('code');

        const titleNodeLeft = screen.getByRole('heading', { name: titleLeft });
        expect(titleNodeLeft).toBeInTheDocument();

        const codeTextLeft = screen.getByText(testTextLeft);
        expect(codeTextLeft).toBeInTheDocument();

        const titleNodeRight = screen.getByRole('heading', { name: titleRight });
        expect(titleNodeRight).toBeInTheDocument();

        const codeTextRight = screen.getByText(testTextRight);
        expect(codeTextRight).toBeInTheDocument();
    })
})
