const express = require("express");
const router = express.Router();

// Signup

router.post("/signup", async(req, res) => {
    try {
        let { name, email, password } = req.body;
        name = name.trim();
        email = email.trim();
        password = password.trim();

        if (!(name && email && password)) {
            throw Error("Empty input fields!");
        } else if (!/^[a-zA-Z]*$/.test(name)) {
            throw Error("Invalid name enrtered");
        }
    } catch (error) {
        
    }
});