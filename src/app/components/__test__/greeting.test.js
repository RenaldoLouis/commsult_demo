// components/__tests__/Greeting.test.js
import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from '../LoginForm';

test('render login form', () => {
    render(<LoginForm />);
    expect(screen.getByText('Log in')).toBeInTheDocument();
});

test('updates input values on change', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText('Enter your email address'), {
        target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter your password'), {
        target: { value: 'secret' },
    });

    expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('secret')).toBeInTheDocument();
});