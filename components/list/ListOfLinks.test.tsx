import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListOfLinks, LinkParams } from './ListOfLinks';

describe('ListOfLinks', () => {
    const testParams: LinkParams[] = [
        {
            href: '/foo-bar'
        },
        {
            href: '/baz',
            text: 'Nice Baz',
            outside: true,
        }
    ]

    it('render a list of inside and outside links', () => {
        render(<ListOfLinks list={testParams} />);

        const links = screen.getAllByRole('link');

        expect(links[0]).toBeInTheDocument();
        expect(links[0]).toHaveAttribute('href', testParams[0].href);

        expect(links[1]).toBeInTheDocument();
        expect(links[1]).toHaveAttribute('href', testParams[1].href);
        expect(links[1]).toHaveAttribute('target', '_blank');
        expect(links[1]).toHaveAttribute('rel', 'noreferrer');
        expect(links[1]).toContainHTML(testParams[1].text);
    })
})
