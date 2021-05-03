import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import Loading from './Loading';

describe('Loading Component', () => {
  it('Render', () => {
    render(<Loading />);

    const message = screen.getByText('Carregando ...');

    expect(message).toBeDefined();
  });
});
