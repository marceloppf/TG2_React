import axios from 'axios';

const api = "https://cors-anywhere.herokuapp.com/"

export const getEscola = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}http://educacao.dadosabertosbr.com/api/escolas/buscaavancada?situacaoFuncionamento=1&estado=RS&cidade=4314100&enemMin=550`)
        .then(escolas => {
            //const escolas = res.data.results;
            console.log(escolas)
            resolve(escolas)
        }).catch(erro => reject(erro))
    });
}