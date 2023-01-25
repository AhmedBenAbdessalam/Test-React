import Papa from 'papaparse'
const fs = require('fs').promises;
const path = require('path');
const filePath = path.resolve(__dirname, '..', '..', 'public', 'data', 'random_data.csv');
const loadData = async () => {
  const csv = await fs.readFile(filePath, 'utf-8');
  const data = Papa.parse(csv, {
    header: true,
    dynamicTyping: true
  });
  return data.data;
};

export default loadData;
