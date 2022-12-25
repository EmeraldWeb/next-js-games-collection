import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Toggle, ToggleProps } from './Toggle';

describe('Toggle', () => {
    const testProps: ToggleProps = {
        callback: () => {},
        defaultChecked: true,
        className: 'someClass',
        alt: 'Foobar'
    }

    it('render a label with input, click on label switch checked of input', async () => {
        render(<Toggle {...testProps} />)
        const input = screen.getByAltText(testProps.alt) as HTMLInputElement;
        const label = input.closest('label');

        expect(label).toBeInTheDocument();
        expect(label).toHaveClass(testProps.className);

        expect(input.checked).toBe(testProps.defaultChecked);

        await userEvent.click(label);

        expect(input.checked).toBe(!testProps.defaultChecked);
    })
})
