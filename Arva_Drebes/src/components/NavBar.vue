<template>
  <nav class="nav-bar">
    <div class="left-section">
      <button class="dropdown-button" @click="isDropdownOpen = !isDropdownOpen">☰</button>
    </div>

    <div class="logo-container">
      <a href="/">
        <img src="../../public/bildites/Logo_Arva.png" class="logoarva" alt="Logo">
      </a>
    </div>

    <div class="right-section">
      <button class="basket-button">
        <img src="../../public/bildites/basket_icon.png" alt="Basket" class="basket-icon" />
      </button>

      <div class="auth-buttons">
        <a href="/SignUp"><button class="signup-button">Signup</button></a>
        <a href="/LogIn"><button class="login-button">Login</button></a>
      </div>

      <div class="search-bar-container">
        <input type="text" placeholder="Search..." class="search-bar" />
        <button class="search-button">🔍</button>
      </div>
    </div>
  </nav>

  <transition name="dropdown-slide">
    <div v-if="isDropdownOpen" class="dropdown-menu">
      <button class="close-button" @click="isDropdownOpen = false">✖</button>

      <div class="categories">
        <a 
          href="#" 
          class="category-link" 
          @click="toggleCategory('woman')"
          :class="{ 'active': activeCategory === 'woman' }"
        >
          WOMAN
        </a>
        <a 
          href="#" 
          class="category-link" 
          @click="toggleCategory('men')"
          :class="{ 'active': activeCategory === 'men' }"
        >
          MEN
        </a>
        <a href="#" class="category-link">HOME</a>
      </div>

      <div class="menu-links">
        <h3>FEATURED PRODUCTS</h3>
        <a href="#" class="menu-link">Top Picks</a>
        <a href="#" class="menu-link">New Arrivals</a>
        <a href="#" class="menu-link">Best Sellers</a>
        <a href="#" class="menu-link">Limited Edition</a>
      </div>

      <div class="menu-links">
        <h3>CUSTOMER SUPPORT</h3>
        <a href="#" class="menu-link">FAQ</a>
        <a href="#" class="menu-link">Contact Us</a>
        <a href="#" class="menu-link">Returns</a>
        <a href="#" class="menu-link">Shipping Information</a>
      </div>

      <!-- Submenu for WOMAN -->
      <div v-if="isWomanOpen" class="submenu">
        <a 
          href="#" 
          class="submenu-link" 
          @click="setActiveSubmenu('clothing')"
          :class="{ 'active': activeSubmenu === 'clothing' }"
        >
          Clothing
        </a>
        <a 
          href="#" 
          class="submenu-link" 
          @click="setActiveSubmenu('accessories')"
          :class="{ 'active': activeSubmenu === 'accessories' }"
        >
          Accessories
        </a>
        <a 
          href="#" 
          class="submenu-link" 
          @click="setActiveSubmenu('shoes')"
          :class="{ 'active': activeSubmenu === 'shoes' }"
        >
          Shoes
        </a>
        <a 
          href="#" 
          class="submenu-link" 
          @click="setActiveSubmenu('sport')"
          :class="{ 'active': activeSubmenu === 'sport' }"
        >
          Sport
        </a>
      </div>

      <!-- Submenu for MEN -->
      <div v-if="isMenOpen" class="submenu">
        <a 
          href="#" 
          class="submenu-link" 
          @click="setActiveSubmenu('clothing')"
          :class="{ 'active': activeSubmenu === 'clothing' }"
        >
          Clothing
        </a>
        <a 
          href="#" 
          class="submenu-link" 
          @click="setActiveSubmenu('accessories')"
          :class="{ 'active': activeSubmenu === 'accessories' }"
        >
          Accessories
        </a>
        <a 
          href="#" 
          class="submenu-link" 
          @click="setActiveSubmenu('shoes')"
          :class="{ 'active': activeSubmenu === 'shoes' }"
        >
          Shoes
        </a>
        <a 
          href="#" 
          class="submenu-link" 
          @click="setActiveSubmenu('sport')"
          :class="{ 'active': activeSubmenu === 'sport' }"
        >
          Sport
        </a>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

// Variables for toggling dropdown and submenus
const isDropdownOpen = ref(false);
const isWomanOpen = ref(false);
const isMenOpen = ref(false);

// Active state variables for highlighting
const activeCategory = ref('');
const activeSubmenu = ref('');

// Toggle WOMAN/MEN category
function toggleCategory(category) {
  if (category === 'woman') {
    isWomanOpen.value = !isWomanOpen.value;
    isMenOpen.value = false;
  } else if (category === 'men') {
    isMenOpen.value = !isMenOpen.value;
    isWomanOpen.value = false;
  }
  activeCategory.value = category;
}

// Set active submenu
function setActiveSubmenu(submenu) {
  activeSubmenu.value = submenu;
}
</script>

<style scoped>
/* NAVIGATION BAR */
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: white;
  padding: 12px 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.left-section {
  display: flex;
  align-items: center;
}

.dropdown-button {
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333; 
  transition: transform 0.3s ease;
}

.dropdown-button:hover {
  transform: rotate(90deg);
}

.logo-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.logoarva {
  height: 100px; 
  transition: transform 0.3s ease;
}

.logoarva:hover {
  transform: scale(1.1);
}

.right-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-bar-container {
  display: flex;
  align-items: center;
  background: #f1f1f1; 
  border-radius: 25px;
  padding: 8px 15px;
  max-width: 220px;
  transition: background-color 0.3s ease;
}

.search-bar-container:hover {
  background-color: #e0e0e0;
}

.search-bar {
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  font-size: 16px;
  color: #333;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #333;
}

.basket-button {
  background: none;
  border: none;
  cursor: pointer;
}

.basket-icon {
  width: 28px;
  height: 28px;
}

.auth-buttons {
  display: flex;
  gap: 15px;
}

.auth-buttons .login-button,
.signup-button {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.auth-buttons .login-button {
  background-color: #f1f1f1; 
  color: #333;
  outline: 2px solid #ddd;
}

.signup-button {
  background-color: black;
  color: white;
  outline: 2px solid black;
}

.auth-buttons .login-button:hover {
  background-color: #ddd;
}

.signup-button:hover {
  background-color: white;
  color: black;
}

/* DROPDOWN MENU */
.dropdown-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  background: white;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
  animation: dropdownSlideIn 0.5s ease-out;
}

/* Animation for dropdown menu */
@keyframes dropdownSlideIn {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* CATEGORIES */
.categories {
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: #333;
}

.category-link {
  text-decoration: none;
  color: #555;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.category-link:hover {
  background-color: #f1f1f1;
  color: #333;
}

/* Highlight active category */
.category-link.active {
  background-color: #333;
  color: white;
}

/* Submenu Styling */
.submenu {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 20px;
  animation: submenuSlideIn 0.3s ease-out;
}

.submenu-link {
  text-decoration: none;
  color: #555;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.submenu-link:hover {
  background-color: #f1f1f1;
  color: #333;
}

/* Highlight active submenu */
.submenu-link.active {
  background-color: #333;
  color: white;
}

/* Submenu Animation */
@keyframes submenuSlideIn {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.close-button {
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  color: #333;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: red;
}

body {
  overflow-x: hidden;
  margin-top: 70px;
  background-color: #f5f5f5; 
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
