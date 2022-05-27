/* 01) Utilize JavaScript para alterar o valor do atributo src (source) de uma imagem.*/

function trafficLight(cor){

    console.log(cor);
    switch(cor){
        case 'green' :
            document.getElementById("img_traffic_light").src= "img/green_light.png";
            break;
        
        case 'yellow':
            document.getElementById("img_traffic_light").src="img/yellow_light.png";
            break;

        case 'red':
            document.getElementById("img_traffic_light").src="img/red_light.png";
            break;

        default:
            document.getElementById("img_traffic_light").src="img/all_off_light.png";
    }
}

// 02) Utilize JavaScript para converter temperatura de Graus Celcius ºC para Graus Fahrenheit ºF.


function toFahrenheit(){
    const numeroCelcius = Number(document.getElementById("inputCelcius").value);
    const numeroFahrenheit = (numeroCelcius * 9) / 5 + 32;
    document.getElementById("inputFahrenheit").value = numeroFahrenheit.toFixed(2);
    document.getElementById("inputCelsius").value = numeroCelcius.toFixed(2);


}

function toCelcius(){
    const fahrenheit = Number(document.getElementById("inputFahrenheit").value);
    const celcius = (fahrenheit - 32) / (9 / 5);
    document.getElementById("inputCelcius").value = celcius.toFixed(2);
    document.getElementById("inputFahrenheit").value = fahrenheit.toFixed(2);

}

/*03) Utilize JavaScript para calcular o Índice de Massa Corporal (IMC).*/
function imc(){
    let altura = document.getElementById("inputAltura").value;
    let peso = document.getElementById("inputPeso").value;
    let calcularIMC = peso/(altura * altura);
    document.getElementById("inputIMC").value = calcularIMC.toFixed(2);
}

/* 04) Utilize JavaScript para preencher a tabela abaixo com dados do Array de objetos carros.*/

//a) Utilize o Array para preencher a tabela.
function tabelaCarros(carros) {
    const table = document.getElementById('tableCars')
    let idx = true
    let newtrElement;
    let newTDElement;

    if (idx) {
        newtrElement = document.createElement('tr')
    
        table.appendChild(newtrElement)
        for(let i of carros){
            for (let x in i) {
                newTDElement = document.createElement('td')
                newTDElement.innerHTML = x
                newtrElement.appendChild(newTDElement)
            }
            idx = false
            break
        }
    }

    for (let i of carros) {
        newtrElement = document.createElement('tr')

        table.appendChild(newtrElement)

        for (let x in i) {
            newTDElement = document.createElement('td')
            newTDElement.innerHTML = i[x]
            newtrElement.appendChild(newTDElement)
        }
    }

}
 // b) Utilize o Array para preencher a tabela ordenando os carros pelos emplacamentos (Do mais emplacado para o menos emplacado).

function tabelaCarrosMaisEmplacados(carros){
    const table = document.getElementById('tableCars')
    let idx = true
    carros.sort(function(a,b){
        if (a.emplacamentos < b.emplacamentos) return 1
        if (a.emplacamentos > b.emplacamentos) return -1
        return 0
    })

    let newtrElement;
    let newTDElement;

    if (idx) {
        newtrElement = document.createElement('tr')
    
        table.appendChild(newtrElement)
        for(let i of carros){
            for (let x in i) {
                newTDElement = document.createElement('td')
                newTDElement.innerHTML = x
                newtrElement.appendChild(newTDElement)
            }
            idx = false
            break
        }
    }

    for (let i of carros) {
        newtrElement = document.createElement('tr')

        table.appendChild(newtrElement)

        for (let x in i) {
            newTDElement = document.createElement('td')
            newTDElement.innerHTML = i[x]
            newtrElement.appendChild(newTDElement)
        }
    }

}

//c) Utilize o Array para preencher a tabela incluíndo o valor do IPVA 2022 dos veículos (Considere que o valor do IPVA é 2%)
function tabelaCarrosIpva(carros){
    const table = document.getElementById('tableCars')
    let idx = true
    for(let i of carros){
        i.ipva = (i.preco *3/100)/100
    }
    let newtrElement;
    let newTDElement;

    if (idx) {
        newtrElement = document.createElement('tr')
    
        table.appendChild(newtrElement)
        for(let i of carros){
            for (let x in i) {
                newTDElement = document.createElement('td')
                newTDElement.innerHTML = x
                newtrElement.appendChild(newTDElement)
            }
            idx = false
            break
        }
    }

    for (let i of carros) {
        newtrElement = document.createElement('tr')

        table.appendChild(newtrElement)

        for (let x in i) {
            newTDElement = document.createElement('td')
            newTDElement.innerHTML = i[x]
            newtrElement.appendChild(newTDElement)
        }
    }
}



