import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Layout } from './Layout';

describe('Layout', () => {
    const testText = 'foobarbaz';

    function ChildNode() {
        return <button>{testText}</button>
    }

    it('render a main with children node', () => {
        render(
            <Layout>
                <ChildNode/>
            </Layout>
        );

        const main = screen.getByRole('main');
        const testNode = screen.getByRole('button');

        expect(main).toContainElement(testNode);
        expect(testNode).toContainHTML(testText);
    })

    it('render a role banner (<header>)', () => {
        render(
            <Layout>
                <ChildNode/>
            </Layout>
        );

        const headerBanner = screen.getByRole('banner');
        expect(headerBanner).toBeInTheDocument();
    })
})
