import httpClient from '../common/httpClient';


export default {
    getAll(){
        return httpClient.get('/jogadores')
    },

    addJogador(jogador){
        return httpClient.post('/jogadores', jogador)
    },

    updateJogador(){
        return httpClient.put(`/jogadores/${jogador.id}`, jogador)
    },

    deleteJogador(id){
        return httpClient.delete(`/jogadores/${id}`)
    }
}