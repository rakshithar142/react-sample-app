import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import HOC from './HOC'

jest.mock('axios');
describe('DataComponent', () => {
  it('fetches and displays data correctly', async () => {
    // Arrange
    // const mock = new MockAdapter(axios);
    // mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, {
    //   message: 'Mocked data response',
    // });

    // // Act
    // render(<HOC />);

    // // Assert
    // await waitFor(() => {
    //   const dataElement = screen.getByText('Mocked data response');
    //   expect(dataElement).toBeInTheDocument();
    // });
  });
});
