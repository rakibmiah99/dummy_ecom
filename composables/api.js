export const api = (endpoint) => {
    try {
        const url = 'https://dummyjson.com/products'+endpoint;
        const data = $fetch(url, {
            method: 'GET'
        })
        console.log(data)
        console.log('endpoint',url)
    }
    catch (error){
        console.log(error)
    }
    /*throw createError({
        statusCode: 400,
        statusMessage: 'Hello Error'
    })*/
}

export const useCounter = () => {
    const counter = useState('counter', () => 0);
    const setCounter = (new_value) => {
        counter.value++;
    }

    return {
        counter,
        setCounter
    }
}