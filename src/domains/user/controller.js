const User = require("./model");
const {hashData} = require("./../..util/hashData");

const creatNewUser =  async (data) => {
    try {
        const { name, email, password } = data;

        //checks if the user is already in system
        const existingUser = await User.findOne({email});

        if (existingUser) {
            throw Error("User with the provided email already exists");
        }
        //hash password
        const hashedPassword = await hashData(password);
        const newUser = new User ({
            name,
            email,
            password : hashedPassword,
        });
        //save the user
        const createrUser = await newUser.save();
        return creatNewUser;
    } catch (error) {}
};
module.exports = { createNewUser}