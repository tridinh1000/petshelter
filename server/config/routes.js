const bodyParser = require("body-parser");
const api = require("../controllers/controller")

function router(app)
{
    app.use(bodyParser.json());
    app.get("/api/pets", api.getAllPets);
    app.get("/api/pets/:id", api.getPetById);
    app.post("/api/pets", api.createPet);
    app.patch("/api/pets/:id", api.updatePet);
    app.delete("/api/pets/:id", api.deletePet);
    // app.post("/api/pets/:id", api.createLike);
    app.patch("/api/likes/:id", api.createLike);

}
module.exports = router;