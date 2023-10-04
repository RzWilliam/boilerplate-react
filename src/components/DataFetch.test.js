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

    // Vérifie que fetchData est appelée
    expect(fetch).toHaveBeenCalledWith('http://example.com/api');

    // Attends que l'effet secondaire soit exécuté
    const dataElement = await screen.findByText('item1');
    
    // Vérifie que l'élément "item1" est rendu, cela confirme que "data" est un objet JSON
    expect(dataElement).toBeInTheDocument();
  });
});
