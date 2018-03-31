if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.info('registered sw', reg))
    .catch(err => console.error('error registering sw', err));
}
