import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ContactForm from './components/ContactForm';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

test('renders App without errors', async()=>{
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/first name/i);
    const lastInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const button = screen.getByRole('button');

    act(()=>{
        userEvent.type(nameInput, 'karla');
        userEvent.type(lastInput, 'karla');
        userEvent.type(emailInput, 'karla@me.com');
        userEvent.type(messageInput, 'karla');

        userEvent.click(button);
    });
    
    const newName = screen.findByText(/karla/i);
    expect(newName).toMatchObject(/karla/i);

} )