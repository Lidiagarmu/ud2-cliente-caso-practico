
//funcion que se va a lanzar cuando hagamos click en Enviar menú

//Seleccionamos el boton Enviar
const buttonEnviar = document.querySelector("#enviar");
console.log("buttom enviarr", buttonEnviar);

//funcion handleClick
const handleClick = (event) => {

    //1 - evita la recarga o render de la pagina 
    event.preventDefault();
   
    //2 - seleccionamos los selects para ver su valor
    const primerPlatoSeleccionado = document.querySelector("#primer-plato").value;
    const segundoPlatoSeleccionado = document.querySelector("#segundo-plato").value;
    const postreSeleccionado = document.querySelector("#postre").value;
   

    // 3 - verificamos que los selects tengan valor, es decir, que el usuario haya seleccionado todas las opciones
    if(!primerPlatoSeleccionado || !segundoPlatoSeleccionado || !postreSeleccionado) {
        alert('Por favor, todos los campos son obligatorios');
        return; //salimos si alguna selección está vacía
    }


    // 4.1 - seleccionamos el main entero y lo vaciamos
    const main = document.querySelector("main");
    main.innerHTML= "";

    // 4.2 - creamos el contenido que queremos mostrar despueés de la selección de menú
    main.innerHTML= `  
        <div>
               <img src="/lidia's_restaurant_app/resources/images/logo.png" alt="Logo de Lidia's Restaurant" id="logo">
                <div id="info">
                    <h2>Menú Seleccionado</h2>
                    <p>Gracias por elegir tu menú. Aquí están tus opciones:</p>
                    <ul>
                        <li><strong>Primer Plato:</strong> ${primerPlatoSeleccionado}</li>
                        <li><strong>Segundo Plato:</strong> ${segundoPlatoSeleccionado}</li>
                        <li><strong>Postre:</strong> ${postreSeleccionado}</li>
                    </ul>
                 </div>

                <div>
                <button type="button" id="back">Volver</button>
                </div>

        </div>`;


        // 5 - seleccionamos boton Volver. Y cuando hagamos clic sobre el:

        const volverButton = document.querySelector ("#back");

        volverButton.addEventListener("click", () => {
            main.innerHTML = ""; // Limpiar el contenido de main
        
             // 5.2 volvemos a insertar el formulario original
             main.innerHTML = `
                <img src="/lidia's_restaurant_app/resources/images/logo.png" alt="Logo de Lidia's Restaurant" id="logo">
                <h1>ELIJA SU MENÚ</h1>
                
                <form id="menu-form">
            
                    <div>
                        <section>
                            <h2>Primer Plato</h2>
                            <select id="primer-plato" required>
                            <option value="" disabled selected>Seleccione un primer plato</option>
                            <option value="Ensalada Mixta">Ensalada Mixta</option>
                            <option value="Sopa de Verduras">Sopa de Verduras</option>
                            <option value="Crema de Calabaza">Crema de Calabaza</option>
                            </select>
                        </section>
                    </div>

                    <div>
                        <section>
                            <h2>Segundo Plato</h2>
                            <select id="segundo-plato" required>
                            <option value="" disabled selected>Seleccione un segundo plato</option>
                            <option value="Pollo Asado">Pollo Asado</option>
                            <option value="Merluza a la Plancha">Merluza a la Plancha</option>
                            <option value="Escalopines de ternera">Escalopines de ternera</option>
                            </select>
                        </section>
                        </div>

                        <div>
                        <section>
                            <h2>Postre</h2>
                            <select id="postre" required>
                            <option value="" disabled selected>Seleccione un postre</option>
                            <option value="Tarta de Queso">Tarta de Queso</option>
                            <option value="Flan de Huevo">Flan de Huevo</option>
                            <option value="Fruta de Temporada">Fruta de Temporada</option>
                            </select>
                        </section>
                        </div>


                <p>Incluye: Pan y primera consumición.</p>
                 <button type="submit" id="enviar">Enviar Menú</button>

                  </form>

            `;
// Volver a asociar el event listener al botón "Enviar" después de actualizar el HTML
const buttonEnviar = document.querySelector("#enviar");
buttonEnviar.addEventListener("click", (event) => handleClick(event));


        }) ;

}

//-----------------------------------------------------------------------------------------------------//


// ESCUCHADOR DE EVENTO. Al hacer click en Enviar ejecutamos función handleClick
buttonEnviar.addEventListener("click", (event) => handleClick(event));




