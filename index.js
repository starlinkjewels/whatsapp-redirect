const express = require("express");

const app = express();

const PHONE = "917623916570"; // Replace with your WhatsApp number
const MESSAGE = "Hi! I saw your Instagram post and I'm interested in your product.";

app.get("/", (req, res) => {
    const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
    res.redirect(302, whatsappUrl);
});

app.get("/wp", (req, res) => {
    const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
    res.redirect(302, whatsappUrl);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;