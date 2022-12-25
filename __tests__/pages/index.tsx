import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../pages';

import { gitHub } from '../../const/urls'

describe('page Home', () => {
    it('renders a main content', () => {
        render(<Home />)
        const main = screen.getByRole('main', { hidden: true });

        expect(main).toBeInTheDocument();
    })

    it('renders a link to github page with logo', () => {
        render(<Home />)
        const links = screen.getAllByRole('link', { hidden: true, name: 'EmeraldWeb' });
        const linkWithLogo = links.find((link) => {
            return link.getAttribute('href') === gitHub;
        });

        const image = linkWithLogo?.querySelector('img');

        expect(linkWithLogo).toHaveAttribute('href', gitHub);
        expect(linkWithLogo).toContainElement(image);
    })
})
