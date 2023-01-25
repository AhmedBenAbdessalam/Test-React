
import fetchMock from 'fetch-mock';
import loadData from './loadData';

describe('loadData', () => {
  beforeEach(() => {
    fetchMock.get('/data/random_data.csv', 'id,date,value,code\n1,2022-01-01,1,a\n2,2022-01-01,2,b');
  });
  afterEach(() => {
    fetchMock.restore();
  });
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
