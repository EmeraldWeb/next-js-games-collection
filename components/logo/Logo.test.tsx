import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Logo } from './Logo';

describe('Logo', () => {
    it('render a square logo', () => {
        render(<Logo size={300} />)
        const logo = screen.getByRole('img', { name: 'EmeraldWeb' });

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('width', '300');
        expect(logo).toHaveAttribute('height', '300');
    })
})
