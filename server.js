const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Sample data for posts
const posts = [
    { id: 1, title: 'Exploring the Mountains', content: 'I had an amazing time hiking in the mountains...' },
    { id: 2, title: 'Beach Vacation', content: 'The beach was beautiful and the weather was perfect...' },
];

// API endpoint to get posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});