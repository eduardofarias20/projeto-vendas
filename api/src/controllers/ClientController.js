const mongoose = require('mongoose');

const Client = mongoose.model('Client');

module.exports = {
    //listar
    async index(req, res) {
        const { page = 1 } = req.query;
        const clients = await Client.paginate({ },{page, limit: 10});

        return res.json(clients);
    },

    async show(req, res) {
        const client = await Client.findById(req.params.id);

        return res.json(client);
    },

    //criar
    async store(req, res) {
        const client = await Client.create(req.body);

        return res.json(client);
    },

    //atualizar

    async update(req, res){
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(client);
    },

    async destroy(req, res){
        await Client.findByIdAndRemove(req.params.id);

        return res.send();
    },
};