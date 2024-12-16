// export default function mostrarJSON(elemHTML) {
//   console.log("Funcion mostrarJSON");
//   fetch("datos.json")
//     .then((respuesta) => respuesta.json())
//     .then((datos) => {
//       console.table(datos);
//       dibujarFilas(elemHTML, datos);
//     })
//     .catch((error) =>
//       console.error("Error en el consumo del JSON", error.message)
//     )
//     .finally(() => console.log("Se ha consumido todo el JSON"));
// }

// function dibujarFilas(elemHTML, datos) {
//   let tabla = "";
//   for (let dato of datos) {
//     tabla += `
//         <tr>
//             <td>${dato.Nombre}</td>
//             <td>${dato.Team}</td>
//             <td class="valedad">${dato.Edad}</td>
//             <td class="tdming">
//             <img src=${
//               dato.Sexo == "F" ? "mujer.png" : "hombre.png"
//             } class="imgsexo">
//             </td>
//         </tr>
//         `;
//   }
//   elemHTML.innerHTML = tabla;
// }
export default async function mostrarJSON(elemHTML) {
  console.log("Función mostrarJSON");
  try {
    const respuesta = await fetch("datos.json");
    if (!respuesta.ok) {
      throw new Error(`HTTP error! status: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    console.table(datos);
    dibujarFilas(elemHTML, datos);
  } catch (error) {
    console.error("Error en el consumo del JSON", error.message);
  } finally {
    console.log("Se ha consumido todo el JSON");
  }
}

function dibujarFilas(elemHTML, datos) {
  let tabla = "";
  for (let dato of datos) {
    tabla += `
        <tr>
            <td>${dato.Nombre}</td>
            <td>${dato.Team}</td>
            <td class="valedad">${dato.Edad}</td>
            <td class="tdming">
            <img src=${
              dato.Sexo == "F" ? "mujer.png" : "hombre.png"
            } class="imgsexo">
            </td>
        </tr>
        `;
  }
  elemHTML.innerHTML = tabla;
}
