import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('Header', () => {
    it('render a heading with link to home page', () => {
        render(<Header />)
        const headerBanner = screen.getByRole('banner');
        const link = screen.getByRole('link');

        expect(headerBanner).toContainElement(link);
        expect(link).toHaveAttribute('href', '/');
    })

    it('render a heading with LightSwitch input', () => {
        render(<Header />)
        const headerBanner = screen.getByRole('banner');
        const inputLightSwitch = screen.getByAltText('LightSwitch');

        expect(headerBanner).toContainElement(inputLightSwitch);
    })
})
