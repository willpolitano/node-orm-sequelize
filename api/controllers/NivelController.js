const database = require('../models')

class NivelController {
    static async pegaTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    static async pegarUmNivel(req, res) {
        const { id } = req.params
        try {
            const nivel = await database.Niveis.findOne({ where: { id: Number(id) } })
            return res.status(200).json(nivel)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async criaNivel(req, res) {
        const novoNivel = req.body

        try {
            const nivelCriado = await database.Niveis.create(novoNivel)
            return res.status(201).json(nivelCriado)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async editarNivel(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Niveis.update(novasInfos, { where: { id: Number(id) } })
            return res.status(200).json(await database.Niveis.findOne({ where: { id: Number(id) } }))
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarNivel(req, res) {
        const { id } = req.params

        try {
            await database.Niveis.destroy({ where: { id: Number(id) } })
            return res.status(200).send('Nive excluido com sucesso!')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NivelController