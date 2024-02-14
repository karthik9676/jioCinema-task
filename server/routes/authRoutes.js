const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtAuth = require("../middleware/jwtAuth");
const JioUserData = require("../models/jioUsers");

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("This is authentication router");
})

// signup api
router.post("/signup", async (req, res) => {
  try {
    //console.log(req.body);
    const { name, email, phoneNumber, password } = req.body;
    const isExist = await JioUserData.findOne({ email: req.body.email });
    //console.log(isExist)
    if (!isExist) {
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = new JioUserData({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashedPassword
      });
      user.save();
      return res.status(200).json({ message: "Registration Success" });
    } else {
      return res.status(400).json({ message: "User already Registered" });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// login api
router.post("/login", async (req, res) => {
  try {
    //console.log(req.body)
    const { email, password } = req.body;
    const isExist = await JioUserData.findOne({ email: email });
    //console.log(isExist
    if(isExist){
        const isPasswordMatched = await bcrypt.compare(password, isExist.password)
        if(isPasswordMatched){
          let payload ={
            id: isExist._id
          }
          let token = jwt.sign(payload, 'JIOCINEMA_SECRET', {expiresIn: '2hr'});
          //console.log(token)
            return res.status(200).json({token:token, message: "Login Success"})
        }
        else{
            return res.status(400).json({message: "Password not matched"})
        }
    }
    else{
        return res.status(500).json({message: "User Not found"})
    }

  } catch(e) {
    console.log(e.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// profile api
router.get("/profile", jwtAuth, async(req, res)=>{
  //console.log(req.id); 
  const user = await JioUserData.findOne({_id: req.id});
  console.log(user);
  res.send(user);
  
})




module.exports = router;