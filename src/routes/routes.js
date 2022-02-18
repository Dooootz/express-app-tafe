// import controller functions from controller file
import {
    addNewUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser
} from "../controllers/userController.js";

// export routes function 
export const routes = (app) => {
    app.route('/user')
        // GET request to get all users from /user endpoint
        .get(getUsers)
        // CREATE, POST request to add new user
        .post(addNewUser);

    app.route('/user/:userID')
        // match request id with DB id &....
        // UPDATE, PUT request to update user - could also use PATCH or POST
        .put(updateUser)
        // GET request to find user by ID
        .get(getUserById)
        // DELETE request to delete user by id 
        .delete(deleteUser)
}

// Using MVC architecture with Routes helps tidy up our
// code whilst making it easier to catch & trace potential errors