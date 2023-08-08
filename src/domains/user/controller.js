const User = require("./model");

const creatNewUser =  async (data) => {
    try {
        const { name, email, password } = data;

        //checks if the user is already in system
        const existingUser = await User.findOne({email});

        if (existingUser) {
            throw Error("User with the provided email already exists");
        }
        //hash password
    } catch (error) {}
};