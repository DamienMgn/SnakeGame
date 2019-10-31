let test = {
    callApi: function() {
        fetch('https://www.joueclub.fr/categorie/eveil-et-sens.aspx')
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }
}

document.addEventListener('DOMContentLoaded', test.callApi);
