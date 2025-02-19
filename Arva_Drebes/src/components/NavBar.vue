<script setup>
import { ref } from "vue";
</script>

<template>
  <nav class="nav-bar">
    <a href="/">
      <img src="../../public/bildites/Logo_Arva.png" class="logoarva" alt="Logo">
    </a>
    
    <div class="right-section">
      <button class="basket-button">
        <img src="../../public/bildites/basket_icon.png" alt="Basket" class="basket-icon" />
      </button>

      <div class="auth-buttons">
        <a href="/SignUp">
          <button class="signup-button">Signup</button>
        </a>
        <a href="/LogIn">
          <button class="login-button">Login</button>
        </a>
      </div>
      
      <div class="search-bar-container">
        <input type="text" placeholder="Search..." class="search-bar" />
        <button class="search-button">🔍</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Make nav bar stretch across full width */
  height: 70px; /* Reduced height */
  background-color: white;
  color: #2c3e50;
  padding: 10px 20px; /* Reduced padding */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: fixed; /* Keep nav fixed at top */
  top: 0;
  left: 0;
  z-index: 1000;
}

.logoarva {
  height: 100px; 
  cursor: pointer;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 15px; 
  flex-wrap: nowrap;
  margin-right: 30px; 
}

.search-bar-container {
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 20px;
  padding: 5px 10px;
  max-width: 150px; 
  overflow: hidden;
}

.search-bar {
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

.basket-button {
  background: none;
  border: none;
  cursor: pointer;
}

.basket-icon {
  width: 25px;
  height: 25px;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.auth-buttons .login-button,
.signup-button {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.auth-buttons .login-button {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  outline: 2px solid #000000;
}

.signup-button {
  background-color: #000000;
  color: white;
  outline: 2px solid #000000;
}

.auth-buttons .login-button:hover {
  background-color: #000000;
  transform: scale(1.05);
  color: white;
}

.signup-button:hover {
  background-color: #ffffff;
  transform: scale(1.05);
  color: #000000;
  outline: 2px solid black;
}

body {
  overflow-x: hidden;
  margin-top: 70px; /* Add space for fixed nav bar */
}
</style>
