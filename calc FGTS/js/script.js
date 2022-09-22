function Calcular(){
    var valor = window.document.getElementById('valorfgts').value
    var res = window.document.getElementById('res')
    var percentual = 0.2
    var  newfgts = (valor*percentual).toFixed[2]
    

    if (valor <= 500){
        window.alert(`Você recebera R$500,00 reais`)
    }else if ((valor > 500) && (valor < 1000)){
        window.alert(`${valor*0.4 + 50} Reais`)
    }if((valor > 1000.01) && (valor <= 5000)){
        window.alert(`você receberá ${valor*0.3 + 150} Reais`)
    }if ((valor > 5000.01) && (valor <= 10000.00 )){
        window.alert(`Você receberá ${valor * 0.2 + 650} Reais`)
        res.innerHTML = `Você tem ${valor * 0.2 + 650}`
    }if((valor > 10000.01) && (valor < 15000)){
        window.alert(`Você receberá R$ ${valor * 0.15 + 1150.50} Reais`)
    }if((valor > 15000.01) && (valor < 20000)){
        window.alert(`Você receberá ${valor * 0.1 + 1900} Reais`)
    }else if(valor > 20000.01){
        window.alert(`Você receberá ${valor * 0.05 + 2900} Reais`)
        
    }
}