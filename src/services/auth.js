import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAxY6PTNcsYmGr6y8ZL_3VR-Aj6GMXMh7Y",
    authDomain: "horadapelada.firebaseapp.com",
    databaseURL: "https://horadapelada.firebaseio.com",
    projectId: "horadapelada",
    storageBucket: "horadapelada.appspot.com",
    messagingSenderId: "1051619255972",
    appId: "1:1051619255972:web:0647bfc3beb122351f2831",
    measurementId: "G-RD5LMN8M29"
 };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Está autenticado?
export const isAuthenticated = () => {
    return sessionStorage.getItem("login") !== null
}

//Entrada para os usuários cadastrados
export const login = (email, password) => {
  return new Promise((resolve, reject) => {
      firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                sessionStorage.setItem("login",email) 
                resolve()
            })
            .catch((erro) => {
                reject(erro)
            })
  })
}

//Saída do usuário da área administrativa
export const logout = () => {
    sessionStorage.removeItem("login")
    return new Promise((resolve, reject) => {
        firebase.auth().signOut()
            .then(() => resolve())

    })
}

//Cadastra o usuário
export const signUp = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                resolve("Usuário criado com sucesso!")
            })
            .catch(error => {
                reject(error)
            })
    })
}

/*

          .then(() => {
              sessionStorage.setItem("login","1") 
              resolve()
          })
          .catch((erro) => {
              reject(erro)
          })

          .then(user => {console.log(user)})
          .catch(function(error){
              var errorCode = error.code;
              var errorMessage = error.message;
*/