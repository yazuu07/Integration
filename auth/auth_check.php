<<<<<<< HEAD
<?php
require_once "../config/db.php";
if (!isset($_SESSION['user_id'])) {
    header("Location: ../auth/login.php");
    exit();
}
=======
<?php
require_once "../config/db.php";
if (!isset($_SESSION['user_id'])) {
    header("Location: ../auth/login.php");
    exit();
}
>>>>>>> 3b33e62a0a69f4dd16dcdab8dcbd041823ffe907
