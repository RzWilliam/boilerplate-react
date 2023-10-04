import React from 'react';
import { render, screen } from '@testing-library/react';
import DataFetch from './DataFetch';
import { UrlContext } from '../context/UrlContext';

const mockContextValue = {
  url: 'https://api.example.com/pokemon',
};

describe('DataFetch', () => {
  test('fetches and renders data', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ name: 'Pikachu', sprites: { front_default: 'pikachu.png' } }),
    });

    const { getByAltText, getByText, findByText } = render(
      <UrlContext.Provider value={mockContextValue}>
        <DataFetch />
      </UrlContext.Provider>
    );

    // Vérifier que Loader est affiché pendant le chargement
    expect(screen.getByText('Loading ...')).toBeInTheDocument();

    // Attendre que le rendu final se produise après le chargement
    await screen.findByText('Pikachu');

    // Vérifier que le composant rend correctement les données
    expect(screen.getByAltText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });

  test('handles error', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      statusText: 'Not Found',
    });

    const { getByAltText, getByText, findByText } = render(
      <UrlContext.Provider value={mockContextValue}>
        <DataFetch />
      </UrlContext.Provider>
    );

    // Attendre que le rendu final se produise après le chargement
    await screen.findByText('No pokemon found');

    // Vérifier que le composant gère correctement les erreurs
    expect(screen.getByAltText('Pikachu Shocked')).toBeInTheDocument();
    expect(screen.getByText('No pokemon found')).toBeInTheDocument();
  });
});
