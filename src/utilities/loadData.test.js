import { describe, expect, it } from 'vitest';
import loadData from './loadData';

describe('loadData', () => {
  it('should return an array of data', async () => {
    const data = await loadData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  it('should return data with the correct shape', async () => {
    const data = await loadData();
    expect(data[0]).toHaveProperty('id');
    expect(data[0]).toHaveProperty('date');
    expect(data[0]).toHaveProperty('value');
    expect(data[0]).toHaveProperty('code');
  });
}); 
