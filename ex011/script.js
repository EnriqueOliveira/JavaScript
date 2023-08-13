function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // [0] bolinha do masculino e [1] feminino
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) { // 1ª Condição if = Se
                //Criança
                img.setAttribute('src', 'criança homem.png')
            } else if (idade < 21) { // 2º Condição else if = Senão se
                //Jovem
                img.setAttribute('src', 'jovem homem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto homem.png')
            } else {
                // Idoso
                img.setAttribute ('src', '')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute()
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'mulher idosa.webp')
            }    
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}