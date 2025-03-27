// const express = require('express');
// const mongoose = require('mongoose');
// const UserModel = require('./model/user'); // Ensure correct path

// const app = express();
// app.use(express.json()); // Required for JSON parsing

// // Root Route
// app.get("/", (req, res) => {
//     res.send("Hello Buddy");
// });

// // Create User Route
// app.get('/create', async (req, res) => {
//     try {
//         let user = await UserModel.create({
//             name: 'veer',
//             roll: 11,
//             email: 'veer@gmail.com',
//             age: 22
//         });
//         res.status(201).json(user); // Send response as JSON
//     } catch (error) {
//         res.status(500).json({ error: error.message }); // Handle errors
//     }
// });

// app.get("/read",async(req,res)=>{
//     let user = await UserModel.find()
//     res.send(user)
// })

// // Start Server
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const UserModel = require('./model/user');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Buddy");
});

app.get('/create', async (req, res) => {
    try {
        const { name, roll, email, age } = req.query;
        
        // Validate required fields
        if (!name || !roll || !email || !age) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const user = await UserModel.create({
            name,
            roll: parseInt(roll),
            email,
            age: parseInt(age)
        });
        
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read Users Route
app.get("/read", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});