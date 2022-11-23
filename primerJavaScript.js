async function traePersona(){
    const respuesta = await fetch("https://randomuser.me/api/");
    //console.log(respuesta);
    const datos = await respuesta.json();
    //console.log(datos);
    console.log(datos.results[0].name.last)
}

function quitarSITEC(){
    let quitar = confirm("¿Seguro de quitar SITEC?");
    if(quitar == true){
        alert("Se fue SITEC");
        let arti = document.getElementById("sitec");
        arti.innerHTML="chale";
        console.log("Esto no se ve en la pagina pero chale")
    }else{
        alert("no se fue SITEC");
    }
}
function darClic(){
    alert("Le di clic") 
}
