export const routes = (app) => {

    app.route('/user')
        .get((req, res) => {
            console.log('GET request successful')
            req.send('GET request successful')
        })
        .post((req, res) => {
            console.log('POST request successful')
            req.send('POST request successful')
        })

    app.route('/user/:userID')
         .put((req, res) => {
            console.log('PUT request successful')
            req.send('PUT request successful')
         })
         .get((req, res) => {
            console.log('GET request successful')
            req.send('GET request successful')
         })
         .delete((req, res) => {
            console.log('DELETE request successful')
            req.send('DELETE request successful')
         })
}