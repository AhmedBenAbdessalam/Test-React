import Papa from 'papaparse'
const loadData = async () => {
  const response = await fetch('/data/random_data.csv');
  const csv = await response.text();
  const data = Papa.parse(csv, {
    header: true,
    dynamicTyping: true
  });
  return data.data;
};

export default loadData;
