import React from 'react';
import { render, screen } from '@testing-library/react';

import Loading from './Loading';

describe('Loading component', () => {
  it('Render', () => {
    render(<Loading />);
    expect(screen.getByText('Carregando ...')).toBeDefined();
  });
});
