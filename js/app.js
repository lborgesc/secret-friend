let list = []; 
function addFriend() {    
    const friend = document.getElementById('nome-amigo').value;
    if (!friend) {
        alert('Informe o nome de um amigo');
        return
    }
    list.push(friend);

    document.getElementById('lista-amigos').innerHTML = ""; 
    list.forEach( (addFriend, index) => {
        if (index == (list.length - 1)) {
            document.getElementById('lista-amigos').innerHTML += addFriend;
        }else { 
            document.getElementById('lista-amigos').innerHTML += `${addFriend}, `;
        } 
    })
    document.getElementById('nome-amigo').value = '';
}

function raffle() {
    document.getElementById('lista-sorteio').innerHTML = '';
    const tangledList = embarrass(list)
    if ( list.length % 2 == 0 ){
        tangledList.forEach( (item, index) => {
            if ( index +1 < tangledList.length ) {
                document.getElementById('lista-sorteio').innerHTML += `<p>${item} -> ${tangledList[index +1]}</p>`;
            }else { 
                document.getElementById('lista-sorteio').innerHTML += `<p>${item} -> ${tangledList[0]}</p>`;
            }
        })
    }else {
        alert('Quantidade de amigos inválida')
    }
}

function embarrass( tangledList ) {
    const sweepstake = [];
    const max = tangledList.length;
    for (let i = 0; i < max; i++) {
        let result;
        result = Math.floor(Math.random() * ((max -1) - 0 + 1) + 0)

        while (sweepstake.includes(result)) {
            result = Math.floor(Math.random() * ((max -1) - 0 + 1) + 0)
        }
        sweepstake.push(result);
    }
    
    return sweepstake.map( item => list[item] );
}

function restart() {
    document.getElementById('lista-amigos').innerHTML = ""; 
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    list = [];
    
}