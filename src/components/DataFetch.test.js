import React from 'react';
import { render, screen } from '@testing-library/react';
import DataFetch from './DataFetch';

describe('DataFetch', () => {
  test('fetches and renders data as JSON object', async () => {
    const fakeData = { results: ['item1', 'item2'] };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(fakeData),
    });

    const { findByText } = render(<DataFetch url="http://example.com/api" />);

    expect(fetch).toHaveBeenCalledWith('http://example.com/api');

    const dataElement = await screen.findByText('item1');
    
    expect(dataElement).toBeInTheDocument();
  });
});
