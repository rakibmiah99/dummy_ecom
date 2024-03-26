export const getData = async (endpoint, options = {}) => {
    try {
        return await $fetch('https://dummyjson.com'+endpoint, options ?? {
            method: 'GET'
        })
    }
    catch (error){
        throw createError({
            statusCode: error.response.status,
            statusMessage: error.response._data.message
        })
    }

}
