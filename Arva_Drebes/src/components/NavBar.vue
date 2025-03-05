<template>
  <nav class="nav-bar">
    <div class="left-section">
      <button class="dropdown-button" @click="toggleDropdown">☰</button>
    </div>

    <div class="logo-container">
      <a href="/">
        <img src="../../public/bildites/Logo_Arva.png" class="logoarva" alt="Logo" />
      </a>
    </div>

    <div class="right-section">
      <button class="basket-button" @click="toggleCart">
        <img src="../../public/bildites/basket_icon.png" alt="Basket" class="basket-icon" />
        <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
      </button>

      <div class="auth-buttons">
        <a href="/SignUp"><button class="signup-button">Sign Up</button></a>
        <a href="/LogIn"><button class="login-button">Log In</button></a>
      </div>
    </div>
  </nav>

  <transition name="dropdown-slide">
    <div v-if="isDropdownOpen" class="dropdown-menu">
      <button class="close-button" @click="toggleDropdown">✖</button>

      <div class="categories">
        <a href="#" class="category-link" @click="toggleCategory('woman')" :class="{ 'active': activeCategory === 'woman' }">
          WOMAN
        </a>
        <a href="#" class="category-link" @click="toggleCategory('men')" :class="{ 'active': activeCategory === 'men' }">
          MEN
        </a>
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
        <a href="#" class="menu-link">Shipping Info</a>
      </div>
    </div>
  </transition>

  <div v-if="isDropdownOpen" class="blur-background"></div>

  <!-- Cart Modal -->
  <transition name="modal-fade">
    <div v-if="isCartVisible" class="cart-modal">
      <h2>Your Cart</h2>
      <p>Items in Cart: {{ cartItemCount }}</p>
      <button @click="toggleCart">Close</button>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

// State variables
const isDropdownOpen = ref(false);
const isWomanOpen = ref(false);
const isMenOpen = ref(false);
const activeCategory = ref('');
const activeSubmenu = ref('');
const cartItemCount = ref(0);
const isCartVisible = ref(false);

// Toggle dropdown menu visibility
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

// Toggle category (woman or men) and control the submenu state
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

// Set active submenu when clicking on a submenu item
function setActiveSubmenu(submenu) {
  activeSubmenu.value = submenu;
}

// Handle adding items to the cart
function addToCart() {
  cartItemCount.value += 1;
}

// Toggle the visibility of the cart modal
function toggleCart() {
  isCartVisible.value = !isCartVisible.value;
}
</script>

<style scoped>
/* Main Navbar Styling */
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  padding: 10px 25px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
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
  height: 70px;
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
  position: relative;
}

.basket-icon {
  width: 28px;
  height: 28px;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff5f5f;
  color: white;
  font-size: 12px;
  padding: 4px;
  border-radius: 50%;
  font-weight: bold;
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
}

.signup-button {
  background-color: black;
  color: white;
}

.auth-buttons .login-button:hover {
  background-color: #ddd;
}

.signup-button:hover {
  background-color: #444;
  color: white;
}

.dropdown-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  background: white;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: dropdownSlideIn 0.3s ease-out;
  overflow-y: auto;
}

@keyframes dropdownSlideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.categories,
.menu-links {
  margin: 15px 0;
}

.category-link,
.menu-link {
  text-decoration: none;
  color: #555;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.category-link:hover,
.menu-link:hover {
  background-color: #f1f1f1;
  color: #333;
}

.category-link.active,
.menu-link.active {
  background-color: #333;
  color: white;
}

.submenu {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 20px;
}

.close-button {
  font-size: 26px;
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

.blur-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
}

.cart-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  text-align: center;
}

.cart-modal button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.cart-modal button:hover {
  background-color: #444;
}

@media (max-width: 768px) {
  .dropdown-button {
    font-size: 24px;
  }

  .search-bar-container {
    max-width: 180px;
  }

  .logoarva {
    height: 60px;
  }

  .dropdown-menu {
    padding: 20px;
    width: 100%;
  }
}
</style>
