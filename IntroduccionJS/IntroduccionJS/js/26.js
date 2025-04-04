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

consultarAPI()