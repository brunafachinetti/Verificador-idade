function verificar() {
    var msg = document.getElementById('resultado')
    var anoNasc = Number(document.getElementById('ano_nasc').value)
    var anohoje = new Date()
    var ano = anohoje.getFullYear()
    var idade = ano - anoNasc                
    var gender = document.getElementsByName('sexo')
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (anoNasc > ano || anoNasc < 1800) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } 
    else {
        window.alert('Tudo OK')

        if (gender[0].checked) {
            msg.innerHTML = `Vc eh um homem de ${idade} anos`
            if (idade < 17 ) {
                img.setAttribute('src', 'boy.jpg')
            } else if (idade < 55) {
                img.setAttribute('src', 'man.jpg')
            } else {
                img.setAttribute('src', 'grandpa.jpg')
            }
        }
        else {
            msg.innerHTML = `Vc eh uma mulher de ${idade} anos`
            if (idade < 17 ) {
                img.setAttribute('src', 'girl.jpg')
            } else if (idade < 55) {
                img.setAttribute('src', 'woman.jpg')
            } else {
                img.setAttribute('src', 'grandma.jpg')
            }
        }
    }

    msg.appendChild(img)
    

    
    
}