import React from "react";
import{screen,render} from '@testing-library/react';
import Forms from "./Forms";
import userEvent from "@testing-library/user-event";

test('renders email input field',()=>{
    render(<Forms />);
    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();
})

test('renders password input field',()=>{
    render(<Forms />);
    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
})

// test('display error message for invalid email',()=>{
//     render(<Forms />);
//     const emailInput = screen.getByLabelText('Email');
//     userEvent.type(emailInput, 'invali-email');
//     const errorMessage = screen.getByText('Invalid email address');
//     expect(errorMessage).toBeInTheDocument();

// })