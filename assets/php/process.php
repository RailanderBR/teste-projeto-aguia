<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['usuario'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    $to = "profdavidy@gmail.com"; // <-- coloque o e-mail de destino aqui
    $subject = "Nova mensagem do site - Colégio Águia Azul";
    $body = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso! ✅";
    } else {
        echo "Erro ao enviar mensagem. ❌";
    }
}
?>
