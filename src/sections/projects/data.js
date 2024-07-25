import Trekio from '../../assets/trekio.png'
import Recycle from '../../assets/recycle.png'
import PagBank from '../../assets/pagbank.png'

const data = [
    {
        id: 0,
        imgProject: Trekio, 
        imgAltText: "Foto de demonstração do projeto Trekio",
        projectName: "Trekio",
        projectDescription: "Projeto com o uso da API do chat GPT, com o intuito de criar roteiros de viagens para os usuários.",
        projectLanguages: [
            "React",
            "Node",
            "MySQL"
        ],
        projectRepository: "https://github.com/renanlazoti/Trekio"
    },

    {
        id: 1,
        imgProject: Recycle, 
        imgAltText: "Foto de demonstração do projeto Recycle Rush",
        projectName: "Recycle Rush",
        projectDescription: "Projeto desenvolvido baseado na 9º ODS (Consumo e Produção Responsáveis), visando conscientizar a população a reciclagem correta do lixo.",
        projectLanguages: [
            "Java",
            "MySQL"
        ],
        projectRepository: "https://github.com/renanlazoti/A3_RecycleRush"
    },

    {
        id: 2,
        imgProject: PagBank, 
        imgAltText: "Foto de demonstração do projeto PagBank",
        projectName: "PagBank",
        projectDescription: "Clone da interface do banco PagBank, desenvolvendo o front-end da aplicação.",
        projectLanguages: [
            "ReactNative"
        ],
        projectRepository: "https://github.com/renanlazoti/PagBank"
    }
]

export default data