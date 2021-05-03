import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import ErrorScreen from './ErrorScreen';

describe('Loading component', () => {
  it('Render', () => {
    render(
      <HashRouter>
        <ErrorScreen />
      </HashRouter>
    );
    expect(screen.getByText('Vish... Ocorreu um erro ...')).toBeDefined();
  });
});
