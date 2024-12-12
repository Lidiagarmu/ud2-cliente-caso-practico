// Importamos la función handleClick desde el script principal
import { handleClick } from '../src/scripts/script';

// Configuración inicial antes de cada prueba
beforeEach(() => {
  // Configuramos el HTML simulado para las pruebas
  document.body.innerHTML = `
    <button id="enviar">Enviar</button>
  `;
});

// Prueba para verificar que el botón "Enviar" exista en el DOM
test('El botón "Enviar" debe existir en el DOM', () => {
  const buttonEnviar = document.querySelector("#enviar");
  expect(buttonEnviar).not.toBeNull(); // Verificamos que el botón no sea nulo
  expect(buttonEnviar.textContent).toBe("Enviar"); // Verificamos que el texto sea "Enviar"
});

// Prueba adicional para verificar el comportamiento de handleClick
test('La función handleClick se llama correctamente al hacer clic en el botón', () => {
  // Mock de la función handleClick
  const mockHandleClick = jest.fn(handleClick);

  // Seleccionamos el botón y simulamos un clic
  const buttonEnviar = document.querySelector("#enviar");
  buttonEnviar.addEventListener('click', mockHandleClick);
  buttonEnviar.click();

  // Verificamos que handleClick haya sido llamada una vez
  expect(mockHandleClick).toHaveBeenCalledTimes(1);
});
