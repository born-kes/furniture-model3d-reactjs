import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';
import App from '../../App';

describe('test module App', () => {
    test('should have text Hello', () => {
        let linkElement = null;
        try {
            render(<App/>);
            linkElement = screen.getByText(/Hello/i);
        } catch (e) {
            expect(linkElement).not.toBeNull()
        }
        expect(linkElement).toBeInTheDocument();
    });
})