const express = require("./node_modules/express/index")
const app = express()
const path = require("./node_modules/path")

app.use(express.static(path.join(__dirname, "/dist")))

function mandarFotoDoRabo(req, res) {
    console.log("acessaram o cu")

    res.type("png")
    res.sendFile(path.join(__dirname, "/dist/assets", "/cuka.png"))
}


function abrirOSiteLa(req, res) {
    console.log("Abriram o sie-end do site AAAAAAAA")

    res.sendFile(path.join(__dirname, "/dist/index.html"))
}

app.get("/cu", mandarFotoDoRabo)
app.get("/saite/0", abrirOSiteLa)


app.listen(3000, () =>
    console.log("Botamo pra rodar mano")
)