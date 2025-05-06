// components/__tests__/Greeting.test.js
import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from '../LoginForm';

test('render login form', () => {
    render(<LoginForm />);
    expect(screen.getByText('Log In')).toBeInTheDocument();
});

test('updates input values on change', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText('Email address'), {
        target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
        target: { value: 'secret' },
    });

    expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('secret')).toBeInTheDocument();
});