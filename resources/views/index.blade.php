<!-- resources/views/index.php -->

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Angular-Laravel Authentication</title>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
</head>
<body ng-app="authApp">

<div class="container">
    <div ui-view></div>
</div>

</body>

<!-- Application Dependencies -->
<script src="node_modules/angular/angular.js"></script>
<script src="node_modules/angular-ui-router/release/angular-ui-router.js"></script>
<script src="node_modules/satellizer/dist/satellizer.js"></script>

<!-- Application Scripts -->
<script src="js/app.js"></script>
<script src="js/authController.js"></script>
<script src="js/userController.js"></script>
</html>