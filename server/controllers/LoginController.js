const User = require('../models/usermodel');

const bcrypt= require("bcrypt")

class LoginController
{
   static Employeemodel= async(req,res)=>{
    const { stnm,stemail,stpwd,stdept,stmarks,stgrade } = req.body;

  const encrypt_password = await bcrypt.hash(stpwd, 10);

  const userDetail = {
    stnm:stnm,
    stemail: stemail,
    stpwd: encrypt_password,
    stdept:stdept,
    stmarks:stmarks,
    stgrade:stgrade
    
  };

  const user_exist = await User.findOne({ stemail });

  if (user_exist) {
    res.send({ message: "The Email is already in use !" });
  } else {
    User.create(userDetail).then((result)=>{
      if (result) {
        res.send({ message: "User Created Succesfully" });
      }
    }).catch((err)=> res.status(500).send({ message: err.message }))
  }
   }


  static loguser= async (req, res) => {
  const { stemail, stpwd } = req.body;

  const userDetail = await User.findOne({ stemail: stemail });

  if (userDetail) {
    if (await bcrypt.compare(stpwd, userDetail.stpwd)) {
      res.send(userDetail);
    } else {
      res.send({ error: "invaild Password" });
    }
  } else {
    res.send({ error: "user is not exist" });
  }
};

    //to insert data(post method) in db by express
    static insertdata = async (req, res) => {
      try {
          const data = req.body;
          const empdata = new User();
          empdata.stnm = data.stnm;
          empdata.stemail = data.stemail;
          empdata.stpwd = data.stpwd;
          empdata.stdept = data.stdept;
          empdata.stmarks = data.stmarks;
          empdata.stgrade = data.stgrade;
          const result = await empdata.save();
          res.status(200).json({ msg: "Insert done successfully", data: result });
      } catch (err) {
          res.status(404).json({ error: err.message });
      }
  }

  //to update(put method) data by id
  static upddata = async (req, res) => {
    try {
        const eid = req.params.id;
        const data = req.body;
        const edata = await User.findById(eid);
        edata.stnm = data.stnm;
        edata.stemail = data.stemail;
        edata.stpwd = data.stpwd;
        edata.stdept = data.stdept;
        edata.stmarks = data.stmarks;
        edata.stgrade = data.stgrade;
        const upd = await edata.save();
        res.status(200).json({ msg: "Update done successfully", data: upd });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

 //to delete data(delete method)
 static empdel = async (req, res) => {
  try {
      const eid = req.params.id;
      const result= await User.findByIdAndDelete(eid);
      res.status(200).json({ msg: "record delete done", info:result })

  } catch (err) {
      res.status(404).json({ error: err.message });
  }

}

//task to (get method) get data based on loc and dept by url
//task to (get method) get data based on loc and dept by putting value
static empfind = async (req, res) => {
  try {
      const data = req.body;
      const result = await User.find({ stnm: data.stnm, stdept: data.stdept });
      if (result.length > 0) {
          res.status(200).json({ info: result })
      }
      else {
          res.status(200).json({ msg: "data doesnot exist" })
      }
  } catch (err) {
      res.status(404).json({ error: err.message });
  }
}


}


module.exports=LoginController;