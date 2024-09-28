const express = require("express"); 
const router = express.Router(); 

router.param("userId", (req, res, next, id) => { 
    console.log("This function will be called first"); 
    next(); 
}); 

router.get("/user/:userId", (req, res) => { 
    console.log("Then this function will be called"); 
    res.end(); 
}); 

// Export router  
module.exports = router; 