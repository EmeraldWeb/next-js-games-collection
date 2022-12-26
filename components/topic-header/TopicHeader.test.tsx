import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TopicHeader } from './TopicHeader';

describe('TopicHeader', () => {
    const testText = 'Foobar';

    it('render a header with text', () => {
        render(<TopicHeader>{testText}</TopicHeader>)

        const heading = screen.getByRole('heading', { name: testText });
        expect(heading).toBeInTheDocument();
    })

    it('render a header with node', () => {
        render(
            <TopicHeader>
                <span>{testText}</span>
            </TopicHeader>
        )

        const heading = screen.getByRole('heading');
        const childrenNode = heading.querySelector('span');

        expect(heading).toBeInTheDocument();
        expect(heading).toContainElement(childrenNode);
    })
})
