document.addEventListener('DOMContentLoaded', () => {

    //otan h forma energopiite
    document.querySelector('form').onsubmit = () => {
        //kaloume to api
        fetch('https://api.exchangerate.host/latest')
        //turns in to a json file
        .then(responce => {
            return responce.json()
        })  
        .then(data => {
            //pernoume tin timi tou input tin apothikevoume kai tin kanoume uppercase
            let currency = document.querySelector('#text').value.toUpperCase();
            //dialegoume tin timi apo to json file kai tin vazoume sto rate
            let rate = data.rates[currency];
            //an iparxei to currency 
            if (rate !== undefined){
                //prosthetoume tin timi sto h1
                document.querySelector('#result').innerHTML = `1 EUR is ${rate.toFixed(3)} ${currency}!`;
            }
            //alios an den iparxei bgazoume error
            else{
                document.querySelector('#result').innerHTML = 'invalid currency!';
            }
            
        })

        //se periptosi pou den fortosei to API
        .catch(error => {
            console.log('Error: ' + error);
        });
        //false gia na einai local h forma 
        return false;
    }
    
});