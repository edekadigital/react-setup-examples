import { render, cleanup } from '@testing-library/react';
import { App } from './App';

describe('<App />', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render greeting correctly', () => {
    const { baseElement } = render(<App name="Jest" />);
    expect(baseElement.textContent).toBe('Hello Jest!');
  });
});
