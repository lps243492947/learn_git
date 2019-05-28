require('./styles/index.css');

fetch("/api/test.json")
    .then(data => data.json())
    .then(data => {
        console.log(data);
    })