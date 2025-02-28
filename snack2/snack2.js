
const promessa = new Promise((resolve, reject) => {

    setTimeout(() => {

        const incastro =  Math.floor(Math.random() * 5) + 1

        if(incastro !== 1){
            const dado = Math.floor(Math.random() * 6) + 1

            resolve (`Dado lanciato con successo! Numero ${dado}`)
        } else {
            reject ('Ops, dado incastrato')
        }

    },1000)
})

promessa
.then (messaggio => console.log(messaggio))
.catch (errore => console.log(errore))
.finally (() => console.log('Operazione completata'))
