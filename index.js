const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get('/download/resume', (req, res) => {
    const fileName = 'RyanFrazin.pdf';
    const filePath = path.join(__dirname, 'views', 'files', 'ryanfrazin.pdf');
    res.download(filePath, fileName, (err) => {
        if(err) {
            res.status(404).send('File not found');
        }
    })
});

app.get('/projects', (req, res) => {
    res.render("projects.ejs");
})

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
}); 