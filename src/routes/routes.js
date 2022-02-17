import {
    addNewUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser
} from "../controllers/userController.js";

export const routes = (app) => {
    app.route('/user')
        // Get all users
        .get(getUsers)
        // Create new user
        .post(addNewUser);

    app.route('/user/:userID')
        // Update user
        .put(updateUser)
        // Get user by ID
        .get(getUserById)
        // Delete user
        .delete(deleteUser)
}
