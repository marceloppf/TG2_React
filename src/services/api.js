import firebase from 'firebase'

export const saveContact = async (name, email, subject, message) => {
    let dados = {
        name,
        email,
        subject,
        message
    }
    return new Promise((resolve, reject) => {
        const user = firebase.auth().currentUser
        firebase
            .database()
            .ref(`/contact`)
            .push(dados)
            .then(() => resolve("Dados Salvos!"))
            .catch((erro) => reject(erro))
    })
}

export const getContact = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase
                    .database()
                .ref(`/contact`)
                .on('value', snapchot => {
                    let dados = snapchot.val()
                    if (dados) {
                        const keys = Object.keys(dados)
                        const listContact = keys.map(id => {
                            return { ...dados[id], id }
                        })
                        resolve(listContact)
                    } else {
                        resolve([])
                    }
                })
            } else reject()
        })
    })
}

export const deleteContact = (chave) => {

    return new Promise((resolve, reject) => {
        const user = firebase.auth().currentUser
        firebase
            .database()
            .ref(`/contact/${chave}`)
            .remove()
            .then(() => resolve())
            .catch((erro) => reject(erro))
    })
}
//----------------------------------------------------------------------------------------------------------------
export const saveGinasio = async (nome, endereco, telefone) => {
    let dados = {
        nome,
        endereco,
        telefone
    }

    return new Promise((resolve, reject) => {
        const user = firebase.auth().currentUser
        firebase
            .database()
            .ref(`/ginasios/${user.uid}`)
            .push(dados)
            .then(() => resolve("Dados Salvos!"))
            .catch((erro) => reject(erro))
    })
}

export const deleteGinasios = (chave) => {
    return new Promise((resolve, reject) => {
        const user = firebase.auth().currentUser
        firebase
            //console.log(user.uid,chave)        
            .database()
            .ref(`/ginasios/${user.uid}/${chave}`)
            .remove()
            .then(() => resolve())
            .catch((erro) => reject(erro))
    })
}

export const getGinasios = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase
                    .database()
                .ref(`/ginasios/${user.uid}`)
                .on('value', snapchot => {
                    let dados = snapchot.val()
                    if (dados) {
                        const keys = Object.keys(dados)
                        const listGinasios = keys.map(id => {
                            return { ...dados[id], id }
                        })
                        resolve(listGinasios)
                    } else {
                        resolve([])
                    }
                })
            } else reject()
        })
    })
}

//----------------------------------------------------------------------------------------------------------------
export const saveHorarios = async (hrini, hrfim, diasemana) => {
    let dados = {
        hrini,
        hrfim,
        diasemana
    }

    return new Promise((resolve, reject) => {
        const user = firebase.auth().currentUser
        firebase
            .database()
            .ref(`/horarios`)
            .push(dados)
            .then(() => resolve("Dados Salvos!"))
            .catch((erro) => reject(erro))
    })
}

export const deleteHorarios = (chave) => {
    return new Promise((resolve, reject) => {
        const user = firebase.auth().currentUser
        firebase
            //console.log(user.uid,chave)        
            .database()
            .ref(`/horarios/${chave}`)
            .remove()
            .then(() => resolve())
            .catch((erro) => reject(erro))
    })
}

/*
export const getHorarios = () => {
    return new Promise((resolve, reject) => {
        const dados = [];
        firebase
            .database()
            .ref(`/horarios`)
            .on('value', snapshot => {
                snapshot.forEach((doc) => {
                    firebase
                        .database()
                        .ref(`/horarios/` + doc.key)
                        .on('value', snapshot => { 
                            snapshot.forEach((docs) => {
                                var hrini = docs.toJSON().nome
                                var hrfim = docs.toJSON().valor
                                var diasemana = docs.toJSON().valor
                                dados.push({
                                    hrini, hrfim, diasemana
                                });
                            })
                        })
                  
                })
                resolve(dados)
            })
    })
}

*/
export const getHorarios = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase
                    .database()
                .ref(`/horarios`)
                .on('value', snapchot => {
                    let dados = snapchot.val()
                    if (dados) {
                        const keys = Object.keys(dados)
                        const listHorarios = keys.map(id => {
                            return { ...dados[id], id }
                        })
                        resolve(listHorarios)
                    } else {
                        resolve([])
                    }
                })
            } else reject()
        })
    })
}
