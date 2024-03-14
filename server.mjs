import express from 'express'
import web from './web/site/calendar_site.mjs'
import url from 'url'
import path from 'path'
import hbs from 'hbs'

// Create an instance of Express
const app = express();
const PORT = 3000; // Define the port for your server to listen on
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const viewsPath = path.join(__dirname, 'web', 'site', 'views')


// Serve static files from the 'public' directory
app.use(express.static('static-files'));


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(path.join(viewsPath, 'partials'))

// Define a route handler for the root URL
app.get('/',web.getHomePage)
app.get('/appointment',web.getApointmentPage)
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});