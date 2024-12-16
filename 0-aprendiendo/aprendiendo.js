function processCall(recipient, onAvailable, onNotAvailable) {
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Conectando con ${name}, espere...`);
  // La lógica de aceptar una llamada
}

function activateAnsweringMachine(name) {
  console.log(`El abonado ${name} no esta disponible, deje un mensaje.`);
  // Lógica para activar el contestador automático
}

function leaveHoloMessage(name) {
  console.log(`El abonado ${name} no esta disponible, grabe un holograma.`);
  // Lógica de grabación de hologramas.
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);
