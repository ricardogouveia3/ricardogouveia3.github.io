fetch('_temp/portfolio.json').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  console.log(data);
}).catch(err => {
  console.log('Error fetching data');
});
