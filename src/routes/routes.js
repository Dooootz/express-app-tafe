export const routes = (app) => {

    app.route('/user')
        // Get all users
        .get((req, res) => {
            console.log('Get request successful!')
            res.send('Get request successful!')
        })
        // Create new user
        .post((req, res) => {
            console.log('POST request successful!');
            res.send('POST request successful!')
        })

    app.route('/user/:userID')
        // Update user
        .put((req, res) => {
            console.log('PUT request successful!')
            res.send('PUT request successful!')
        })
        // Get user by ID
        .get((req, res) => {
            console.log('get request successful!')
            res.send('PUT request successful!')
        })
        // Delete user
        .delete((req, res) => {
            console.log('DELETE request successful!')
            res.send('DELETE request successful!')
        })
}