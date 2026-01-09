<<<<<<< HEAD
<?php
session_start();
require_once "../config/db.php";

$error = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $pass  = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $res = $stmt->get_result();
    $user = $res->fetch_assoc();

    if ($user && password_verify($pass, $user['password'])) {
        $_SESSION['user_id']  = $user['id'];
        $_SESSION['fullname'] = $user['fullname'];
        $_SESSION['role']     = $user['role'];

        header("Location: ../home/index.html");
        exit;
    } else {
        $error = "Invalid email or password";
    }
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
    <h2>Login</h2>
    <input name="email" type="email" required>
    <input name="password" type="password" required>
    <button>Login</button>
    <p>Don't got an account? <a href="register.php">Register</a></p>
</form>
=======
<?php
session_start();
require_once "../config/db.php";

$error = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $pass  = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $res = $stmt->get_result();
    $user = $res->fetch_assoc();

    if ($user && password_verify($pass, $user['password'])) {
        $_SESSION['user_id']  = $user['id'];
        $_SESSION['fullname'] = $user['fullname'];
        $_SESSION['role']     = $user['role'];

        header("Location: ../home/index.html");
        exit;
    } else {
        $error = "Invalid email or password";
    }
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
    <h2>Login</h2>
    <input name="email" type="email" required>
    <input name="password" type="password" required>
    <button>Login</button>
    <p>Don't got an account? <a href="register.php">Register</a></p>
</form>
>>>>>>> 3b33e62a0a69f4dd16dcdab8dcbd041823ffe907
