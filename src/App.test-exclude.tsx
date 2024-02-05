import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const button = screen.getByTestId("btn-login");
  expect(button).not.toBeDisabled();

});

test('check username', () => {
  render(<App />);
  const txtUsername = screen.getByTestId("txt-username");
  expect(txtUsername).toBeInTheDocument();

})


test('check password', () => {
  render(<App />);  
  
  const txtPassword = screen.getByTestId("txt-password");
  expect(txtPassword).toBeInTheDocument();
})
