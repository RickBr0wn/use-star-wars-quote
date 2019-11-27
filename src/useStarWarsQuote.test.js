import { renderHook, cleanup } from '@testing-library/react-hooks';
import { useStarWarsQuote } from './';

afterEach(cleanup);

describe('useStarWarsQuote', () => {
  it('should return an object with the keys: quote, loading', () => {
    const { result } = renderHook(useStarWarsQuote);

    expect(result.current).toHaveProperty('loading');
    expect(result.current).toHaveProperty('quote');
    expect(result.current).not.toBe(undefined);
  });

  it('should set loading to true after initial call', () => {
    const { result } = renderHook(() => useStarWarsQuote());

    expect(result.current.loading).toBe(true);
  });

  it('should return a quote and set loading to false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useStarWarsQuote());
    await waitForNextUpdate();

    expect(typeof result.current.quote).toBe('string');
    expect(result.current.quote).not.toBe(null);
    expect(result.current.quote).not.toBe('');
    expect(result.current.loading).toBe(false);
  });
});
