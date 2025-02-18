<script setup>
    import { ref } from "vue";
</script>

<template>
  <header class="tituls">
    <img src="../../public/bildites/Logo_Arva.png" class="logoarva">
    <nav class="navigation">
      <a href="#"><h3>HOME</h3></a>
      <a href="/about"><h3>ABOUT</h3></a>
      <a href="#contact"><h3>CONTACT US</h3></a>
    </nav>
    <div class="auth-buttons">
      <a href ="">
      <button class="login-button">Login</button>
    </a>
      <a href ="">
      <button class="signup-button">Signup</button>
    </a>
    </div>
  </header>
</template>

<style scoped>
.tituls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: magit add ;
  height: 100px;
  background-color: white;
  color: #2c3e50;
  padding: 20px 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


.logoarva {
  height: 150px;
  width: max;
}

.navigation {
  display: flex;
  gap: 20px;
}

.navigation a {
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  font-family: 'Trebuchet MS', sans-serif;
  transition: color 0.3s ease;
}

.navigation a:hover {
  color: #000000;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.auth-buttons .login-button,
.auth-buttons .signup-button {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.auth-buttons .login-button {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  outline: 2px solid #000000;
}

.auth-buttons .signup-button {
  background-color: #000000;
  color: white;
  outline: 2px solid #000000;
}

.auth-buttons .login-button:hover {
  background-color: #000000;
  transform: scale(1.05);
  color: white;
}

.auth-buttons .signup-button:hover {
  background-color: #ffffff;
  transform: scale(1.05);
  color: #000000;
  outline: 2px solid black;
}
</style>
