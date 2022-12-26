import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LightSwitch } from './LightSwitch';
import userEvent from '@testing-library/user-event';

describe('LightSwitch', () => {
    it('switch image src and theme after click', async () => {
        render(<LightSwitch />)
        const input = screen.getByAltText('LightSwitch') as HTMLInputElement;
        const icon = screen.getByRole('img');
        const srcBeforeClick = icon.getAttribute('src');
        const rootCss = document.querySelector(':root') as HTMLElement;
        const propertyKey = '--theme-key';
        const theme = rootCss.style.getPropertyValue(propertyKey);

        expect(input).toBeInTheDocument();

        await userEvent.click(input);

        expect(icon).not.toHaveAttribute('src', srcBeforeClick);
        expect(rootCss.style.getPropertyValue(propertyKey)).not.toBe(theme);
    })
})
