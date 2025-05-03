import '@testing-library/jest-dom';

//Mock the App Router
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));