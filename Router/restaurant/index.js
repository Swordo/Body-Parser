const express = require('express');
const router = express.Router();

router.get('/res/home', (req, res) => {
    res.json({
        "id": "123123",
        "phone": "99909"
    });
});
// router.post('/res/home', (req,res) => {
//     res.("post method is working on res router");
// });

module.exports = router;