let UsernameAlreadyExists = (req, res) => {
    res.status(400).send({'error': 'Username already in use'});
}

let ServerError = (req, res) => {
    res.status(500).send({'error': 'Internal Server Error'});
}

let WrongCredentials = (req, res) => {
    res.status(400).send({'error': 'Wrong Credentials'});
}

let SigninToContinue = (req, res) => {
    res.status(401).send({'error': 'Signin to continue'});
}

let AlreadySignedin = (req, res) => {
    res.status(400).send({'error': 'Already signedin'});
}

function Errors(err, req, res){
    const errors = {
        'UsernameAlreadyExists': UsernameAlreadyExists,
        'ServerError': ServerError,
        'WrongCredentials': WrongCredentials,
        'AlreadySignedin': AlreadySignedin,
        'SigninToContinue': SigninToContinue
    }
    return errors[err](req, res);
}

export default Errors;