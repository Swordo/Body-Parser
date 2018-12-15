const express = require('express');
const router = express.Router();

router.get('/admin/home', (req, res) => {
    res.json({
        "id": "swordo",
        "email": "swordo95@icloud.com"
    });
});
router.post('/admin/home', (req, res) => {
    res.send("post methed is working");
})

module.exports = router;