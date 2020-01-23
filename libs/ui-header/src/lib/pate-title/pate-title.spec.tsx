import React from 'react';
import { render } from '@testing-library/react';

import PateTitle from './pate-title';

describe(' PateTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PateTitle />);
    expect(baseElement).toBeTruthy();
  });
});
