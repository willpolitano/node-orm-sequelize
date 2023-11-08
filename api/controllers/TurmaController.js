const database = require('../models')

class TurmaController {
    static async pegaTodasAsTurmas(req, res) {
        try {
            const todasTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasTurmas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaTurma(req, res) {
        const { id } = req.params

        try {
            const turma = await database.Turmas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(turma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req, res) {
        const novaTurma = req.body

        try {
            const turmaCriada = await database.Turmas.create(novaTurma)
            return res.status(201).json(turmaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async editaTurma(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Turmas.update(novasInfos, { where: { id: Number(id) } })
            return res.status(200).json(await database.Turmas.findOne({ where: { id: Number(id) } }))
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaTurma(req, res)
    {
        const { id} = req.params

        try {
            await database.Turmas.destroy({where: {id: Number(id)}})
            return res.status(200).send('Turma excluida com sucesso!')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaController