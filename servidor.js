const http = require('http');

const dictionary = [
    "cherry", "date", "elderberry", "fig", "grape", "honeydew",
    "kiwi", "lemon", "mango", "orange", "papaya", "quince", "raspberry",
    "strawberry", "tangerine", "vanilla", "watermelon", "yam", "zucchini"
];

function generatePassword(wordCount) {
    let password = [];
    for (let i = 0; i < wordCount; i++) {
        const randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        password.push(randomWord);
    }
    return password.join('-');
}

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const xParam = url.searchParams.get('X');
    const wordCount = parseInt(xParam, 10) || 3;

    const password = generatePassword(wordCount);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Tu contraseña es: ${password}`);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
