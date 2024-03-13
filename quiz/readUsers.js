const express = require('express')
const router = express.Router();


router.get('/usernames', (req, res) => {
    let usernames = req.users.map(function (user) {
        return { id: user.id, username: user.username };
    });
    res.send(usernames);
});

router.get('/username/:name', (req, res) => {
    let username = req.params.name;
    let users = req.users.filter(function (user) {
        return user.username === username;
    });

    if (users.length > 0) {
        let emails = users.map((user) => {
            return { id: user.id, email: user.email }
        });
        res.send(emails);
    } else {
        return res.json({
            error: { message: `user ${username} not found`, status: 404 }
        });
    }
})

module.exports = router