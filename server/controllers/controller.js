const Pets = require("../models/thing")

function createPet(req, res){
    Pets.create(req.body)
        .then(data=>res.json(data))
        .catch(err=>res.json(err));
}

function getAllPets(req, res)
{
    Pets.find({}).sort({type: 'asc'})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
}

function getPetById(req, res)
{
    Pets.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}

function updatePet(req, res)
{
    Pets.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, context: 'query'})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
}

function deletePet(req, res)
{
    Pets.findByIdAndRemove(req.params.id, req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
}

function createLike(req, res)
{
    console.log("in the controller and the create like function")
    Pets.findById(req.params.id)
    .then(data=>{
        console.log("data in likes is", data)
        console.log("likes value is", data.likes)
        data.likes = data.likes + 1;
        data.save();
    })
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
}

module.exports = {
    createPet: createPet,
    getAllPets: getAllPets,
    getPetById: getPetById,
    updatePet: updatePet,
    deletePet: deletePet,
    createLike: createLike
}