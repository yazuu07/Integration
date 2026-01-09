<?php
require_once "../config/db.php";

if ($_POST) {
    $name = $_POST['fullname'];
    $email = $_POST['email'];
    $pass = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $conn->query("INSERT INTO users (fullname,email,password)
                  VALUES ('$name','$email','$pass')");
    header("Location: login.php");
}
?>
<style>
 body {
    font-family: 'Segoe UI', sans-serif;
    background: #f9fafb;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.card {
    margin-bottom: 100px;
    max-width: 420px;
    width: 100%;
    background: #fff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

input {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border-radius: 8px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    font-size: 14px;
}

input:focus {
    border-color: #667eea;
    outline: none;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}

button {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 8px;
    width: 100%;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(118, 75, 162, 0.3);
}

.error {
    color: #dc2626;
    margin-bottom: 10px;
    font-size: 14px;
}

</style>
<form method="POST">
    <h2>Register</h2>
    <input name="fullname" placeholder="Full Name" required>
    <input name="email" type="email" required>
    <input name="password" type="password" required>
    <button>Register</button>
    <p>Already got an account? <a href="login.php">Log in</a></p>
</form>
