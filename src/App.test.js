import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should take a snapshot of table', () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});

test('should render table', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('multiplication-table')).toBeTruthy();
  expect(getByTestId('multiplication-table').className).toBe("table table-striped table-bordered");
});

