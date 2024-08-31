const User = require("../Modals/UserSchema");

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {$set : req.body}, {
      new: true,
    });

   

    res.status(200).json({
        succes : "true",
        msg :"Succesfully Updated",
        data : updatedUser
    });

  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getallUser = async (req, res) => {
   
    try {
      const users = await User.find();


  
      res.status(200).json({
          succes : "true",
          msg :"Succesfully Updated",
          data : users
      });
  
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

const getUserById = async (req , res) =>{

    const userId = req.params.id
    try {

        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            succes : "true",
            msg :"Succesfully Updated",
            data : user
        });
        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }

}


const deleteUser = async (req , res) =>{

    const userId = req.params.id
    try {
        const deleteuser = await User.findByIdAndDelete(userId)

        if(!deleteuser){
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ 
            succes : true,
            message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });

        
    }
    
}
module.exports = { updateUser , deleteUser , getallUser , getUserById };
