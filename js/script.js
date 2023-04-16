const eleForm = document.querySelector('form');

eleForm.addEventListener('.calculate', function (event) {
        event.preventDefault();
        const km = document.querySelector('#chilometri')
        const age = document.querySelector('#età')
        const priceForKm = km * 0.21;

        const under18 = document.querySelector('#minorenne')
        const normal = document.querySelector('#maggiorenne')
        const over65 = document.querySelector('#over')
        
        if (under18) {
            const priceSale20 = priceForKm - (priceForKm * 20 / 100);
            console.log(priceSale20)
        }

        if (over65) {
            const priceSale40 = priceForKm - (priceForKm * 40 / 100);
            console.log(priceSale40)
        }

        if (normal) {
            const priceForKm = km * 0.21;
            console.log(priceForKm)
        }
    }
);