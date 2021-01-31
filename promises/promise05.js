function treatError(value, error) {
    return new Promise(function(resolve, reject) {
        if(Math.random() < error) {
            reject('Unexpected error')
        }

        resolve(value);
    });
}

treatError('Testing...', 0.9)
    .then(console.log)
    .catch(err => console.log(`Error: ${err}`));