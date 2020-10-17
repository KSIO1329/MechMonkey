<template>
  <div class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://media.discordapp.net/attachments/467681388796182538/766057052618358904/Mmonky-monstrosity.png" width="112" height="28" />
      </a>
      <a @click="clickBurger" role="button" class="navbar-burger burger" :class="{ 'is-active': burgerOpen }" aria-label="menu" aria-expanded="false" data-target="navbar-menu-id">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar-menu-id" class="navbar-menu" :class="{ 'is-active': burgerOpen }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item is-tab" exact><i class="fas fa-home navbar-icon-left"></i> Home</router-link>
        <router-link to="/store" class="navbar-item is-tab"><i class="fas fa-store navbar-icon-left"></i> Store</router-link>
        <router-link to="/picker" class="navbar-item is-tab"><i class="fas fa-keyboard navbar-icon-left"></i> Part Picker </router-link>
        <router-link to="/about" class="navbar-item is-tab"><i class="far fa-question-circle navbar-icon-left"></i> About</router-link>
      </div>
      <div class="navbar-end">
        <a v-if="!isLoggedIn" class="navbar-item" @click="logIn"><i class="fas fa-sign-in-alt navbar-icon-left"></i> Log In</a>
        <div v-else class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"><i class="fas fa-user-circle navbar-icon-left"></i>Profile</a>
          <div class="navbar-dropdown">
            <a class="navbar-item"> My Profile <i class="fas fa-user-circle navbar-icon-right"></i></a>
            <a class="navbar-item"> Settings <i class="fas fa-cog navbar-icon-right"></i></a>
            <a class="navbar-item" @click="logOut"> Log Out <i class="fas fa-sign-out-alt navbar-icon-right"></i></a>
          </div>
        </div>
        <router-link to="/cart" class="navbar-item is-tab"><i class="fas fa-shopping-cart"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.status;
    }
  },
  data: function() {
    return {
      burgerOpen: false
    };
  },
  methods: {
    clickBurger() {
      this.burgerOpen = !this.burgerOpen;
    },
    // Open a modal for log in info
    logIn() {
      this.$store.dispatch("authLogIn");
    },
    // Open a modal for log out confirmation
    logOut() {
      this.$store.dispatch("authLogOut");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.navbar {
  font-size: 1.2em;
  font-family: "Raleway", sans-serif;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.navbar-icon-left {
  margin-right: 10px;
}
.navbar-icon-right {
  margin-left: 5px;
}
@media only screen and (max-width: 1023px) {
  .navbar-item {
    text-align: left;
  }
}
.router-link-active {
  color: $app-link;
  border-bottom: 3px solid $app-link !important;
}
</style>
