import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EventsComponent from './EventsComponent';

test('input field takes input value and sets it in useState', () => {
  render(<EventsComponent />);
  
  const inputElement = screen.getByLabelText('Input:');
  
  // Simulate user typing an input value
  fireEvent.change(inputElement, { target: { value: 'Test Input' } });
  
  // Check if input value is set correctly in the useState hook
  expect(inputElement.value).toBe('Test Input');
});
