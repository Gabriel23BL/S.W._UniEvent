const creandoUsuario = document.getElementById("registerForm");

creandoUsuario.addEventListener("submit", crearUsuario);

async function crearUsuario(event) {
  // Prevenir la recarga automática del formulario
  event.preventDefault();

  try {
    // Leer los valores del formulario
    //const nombre = document.getElementById("nombre").value;

    const correo = document.getElementById("correo").value;
    const clave = document.getElementById("clave").value;
    const claveConfirm = document.getElementById("claveConfirm").value;

    console.log(correo, clave, claveConfirm);

    // Hacer la petición fetch al backend

    /**const response = await fetch("/api/registro-usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Indicamos que enviamos JSON
      },
      body: JSON.stringify({ nombre, correo, clave }), // Convertir datos a JSON
    });

    // Manejar la respuesta del servidor
    if (response.ok) {
      const result = await response.json();
      console.log(result);

      alert("Registro exitoso: " + result.message);
    } else {
      const error = await response.json();
      alert("Error en el registro: " + error.message);
    }*/
  } catch (error) {
    console.log("Error, al crear usuario: " + error);
  }
}

//registro de usuario
// registroUsuario.js
document.addEventListener("DOMContentLoaded", () => {
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const step3 = document.getElementById("step3");

  const step1Next = document.getElementById("step1Next");
  const step2Next = document.getElementById("step2Next");
  const step2Prev = document.getElementById("step2Prev");
  const step3Prev = document.getElementById("step3Prev");

  const registerForm = document.getElementById("registerForm");

  step1Next.addEventListener("click", () => {
    step1.style.display = "none";
    step2.style.display = "block";
  });

  step2Next.addEventListener("click", () => {
    step2.style.display = "none";
    step3.style.display = "block";

    // Mostrar resumen
    document.getElementById("summaryEmail").textContent = document.getElementById("registerEmail").value;
    document.getElementById("summaryName").textContent = document.getElementById("registerName").value;
    document.getElementById("summaryRole").textContent = document.getElementById("registerRole").value;
  });

  step2Prev.addEventListener("click", () => {
    step2.style.display = "none";
    step1.style.display = "block";
  });

  step3Prev.addEventListener("click", () => {
    step3.style.display = "none";
    step2.style.display = "block";
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Registro completado con éxito 🎉");
    // Aquí puedes enviar los datos al backend con fetch/AJAX
  });
});
