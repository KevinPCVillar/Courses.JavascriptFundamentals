// Fetch API con async/await

const url = 'https://jsonplaceholder.typicode.com/comments'

const consultarAPI = async () => {
    try {
        const response = await fetch(url)
        if(!response.ok)
            throw new Error("Hubo un error...")

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//consultarAPI()


// 
const entrada = 'aaaabbbccabccc'
const salida = [('a',4),('b',3),('c',1),('a',1)]


function contar(cadena){
    let currentChar = cadena[0]
    let resultArray = []
    let count = 0
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === currentChar) {
            count++;
        } else {
            resultArray.push({ [currentChar]: count });
            currentChar = cadena[i];
            count = 1;
        }
    }
    resultArray.push({ [currentChar]: count });
    return resultArray;
}

console.log(contar(entrada));
