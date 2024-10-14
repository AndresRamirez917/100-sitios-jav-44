async function getData() {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    const characterArr = character.results.map(elemento => Object.entries(elemento));
    const characterArrSliced = characterArr.slice(0,4);
    const arr = ["", "203 Random Ave","my@email.com","555-555-5555"]
    console.log(characterArr)
    //console.log(character)
    character.results.forEach(element => {
        const randInt = randomData(1, characterArr.length);
        const randIndex = randInt;
        for(i = 0; i < characterArrSliced.length; i++){
            for(j = 1; j < 2; j++){
                if(element.id == i){
                    const box = document.createRange().createContextualFragment(`
                        
                    <div class="box box-1">
                       <img src="${characterArr[randIndex][8][1]}" alt="">
                    </div>
                        
                        `)
                        const box2 = document.createRange().createContextualFragment(`
                            
                            <div class="card card-1">
                        <img src="${characterArr[randIndex][8][1]}" alt="">
                        <h3>${arr[i]}</h3>
                    </div>
    
                            `)
                        const project_row = document.querySelector('.projects-row');
                        const contact_row = document.querySelector('.contact-row')
                        project_row.append(box)
                        contact_row.append(box2)
                }
            }
        }
        function randomData(min, max) {
            return Math.floor(Math.random() * (min - max + 1) + max)
        }
    });
}

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const fecha = document.getElementById('fecha');
    const hora = document.getElementById('hora');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const messageArr = ["Nombre", "Email", "Fecha", "Hora", "Mensaje"];
    arr.push(nombre, email, fecha, hora, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato adecuado`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Los datos fueron enviado satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         fecha.value = "";
         hora.value = "";
         mensaje.value = ""
    return true;

}

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}

getData()

{/* <img src="${characterArr[randIndex][10][1]}" alt=""> */}