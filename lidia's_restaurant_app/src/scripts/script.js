
//Seleccionamos el boton Enviar
const buttonEnviar = document.querySelector("#enviar");
console.log("buttom enviarr", buttonEnviar);


/**
 * Función que se ejecuta cuando se hace clic en el botón "Enviar Menú".
 * Esta función valida los campos del formulario y actualiza el contenido
 * de la página con la selección de menú del usuario.
 * 
 * @param {Event} event - El evento de clic en el  botón
 * @returns {void} 
 * @author Lidia García Muñoz
 */
const handleClick = (event) => {
    event.preventDefault(); //evita la recarga o render de la pagina 
   
    // selección  de valores de los campos del formulario
    const primerPlatoSeleccionado = document.querySelector("#primer-plato").value;
    const segundoPlatoSeleccionado = document.querySelector("#segundo-plato").value;
    const postreSeleccionado = document.querySelector("#postre").value;

    // verifica si todos los campos están seleccionados
    if(!primerPlatoSeleccionado || !segundoPlatoSeleccionado || !postreSeleccionado) {
        alert('Por favor, todos los campos son obligatorios');
        return; // detiene la ejecución si alguna opción no está seleccionada
    }

    // actualiza el contenido de la página vaciando el main
    const main = document.querySelector("main");
    main.innerHTML= "";

    // añade el nuevo contenido con las opciones seleccionadas por el usuario
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


       
        /**
        * Función que se ejecuta cuando el usuario hace clic en el botón "Volver".
        * Vuelve a cargar el formulario original para que el usuario pueda hacer 
        * una nueva selección.
        * 
        * @returns {void}
        * @author Lidia Garcia Muñoz
         */
        const volverButton = document.querySelector ("#back");
        volverButton.addEventListener("click", () => {
            main.innerHTML = ""; // Limpia el contenido del main
             // vuelve al formulario original
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
            
            // reasocia el evento de clic al botón "Enviar"
            const buttonEnviar = document.querySelector("#enviar");
            buttonEnviar.addEventListener("click", (event) => handleClick(event));


        }) ;

}

//-----------------------------------------------------------------------------------------------------//


// ESCUCHADOR DE EVENTO. Al hacer click en Enviar ejecutamos función handleClick
buttonEnviar.addEventListener("click", (event) => handleClick(event));




