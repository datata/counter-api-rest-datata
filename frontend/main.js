document.addEventListener('DOMContentLoaded', function () {


    fetch('http://127.0.0.1:3000/value')
        .then(res => res.json())
        .then(data => {
            //console.log(data.counterValue)
            document.querySelector("main .value").innerText = data.counterValue
        })


    document.querySelector("header .increment").addEventListener('click', () => {

        let num = Number(document.querySelector("main .value").innerText);
        let sumIncremento = num + 1;
        document.querySelector("main .value").innerText = sumIncremento;


    })


    document.querySelector("header .reset").addEventListener('click', () => {

        //let num = Number(document.querySelector("main .value").innerText);
        //let sumIncremento = num + 1;

        document.querySelector("main .value").innerText = 0;

    })


    document.querySelector("header .incrementDos").addEventListener('click', () => {

        let num = Number(document.querySelector("main .value").innerText);
        let sumIncremento = num + 2;
        document.querySelector("main .value").innerText = sumIncremento;



    })





})