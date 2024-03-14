
import url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export default {
    getHomePage : handleRequest(getHomePage),
    getApointmentPage: handleRequest(getApointmentPage)
}

function View(name, data) {
    this.name = name
    this.data = data
}

function getApointmentPage(req, rsp) {
    const options = {
        root: `${__dirname}../../static-files/`
    }
    return new View('apointment')
}

async function getHomePage(req, rsp) {
    const options = {
        root: `${__dirname}../../static-files/`
    }
    return new View('homePage')
    rsp.sendFile('homePage.html', options)
}
function handleRequest(handler) {
    return async function (req, rsp) {
        req.token = 'be9b901f-e20d-4a93-9c5e-021ab585b724'
        try {
            let view = await handler(req, rsp)
            if(view) {
                console.log("%%%%")

                rsp.render(view.name , view.data)
            }
        } catch (e) {
            console.log(e)
            //const response = htttpErrors(e)
            //rsp.render("erros",{status : response.status, message : response.body.message})
        }
    }
}