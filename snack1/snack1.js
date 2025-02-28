const getPostTitle = id => {
    const promessa = new Promise((resolve, reject) => {
        fetch (`https://dummyjson.com/posts/${id}`)
        .then (response => response.json())
        .then (obj => resolve(obj.title))
        .catch (reject);
    });
    return promessa
}
getPostTitle(1)
.then(obj => console.log(`Titolo : ${obj}`))
.catch(error => console.error(error))






const getPostId = id => {

    const promessaAutore =  new Promise((resolve, reject) => {
        fetch (`https://dummyjson.com/posts/${id}`)
        .then (response => response.json())
        .then (obj => resolve(obj))
        .catch (reject);
    });
    return promessaAutore
}

getPostId(1)
.then(obj => console.log(obj))
.catch(error => console.error(error))