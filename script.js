/*FORM de Contato*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const successMessage = document.getElementById("success-message");
  const erroMessage = document.getElementById("erro-message");
  const loading = document.getElementById("loading");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const messagem = document.getElementById("mensagem").value;

    form.style.display = "none";
    successMessage.style.display = "none";
    erroMessage.style.display = "none";
    loading.style.display = "block";

    const data = {
      to: "emanoelpontes8@gmail.com",
      from: "email.2@sendgrid",
      subject: "Contato do site",
      text: "Contato do site",
      html: `<p>Nome: ${nome}</p><br>
      <p>Email: ${email}</p></p><br>
      <p>Assunto: ${assunto}</p></p><br>
      <p>Messagem: ${messagem}</p>`,
    };

    fetch("", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        loading.style.display = "none";
        successMessage.style.display = "block";
      })
      .catch((error) => {
        console.error(error);
        loading.style.display = "none";
        errorMessage.style.display = "block";
      });
  });
});
