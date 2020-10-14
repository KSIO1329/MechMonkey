<template>
    <div class="navbar is-fixed-top">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item navbar-icon-left"><i class="fas fa-home navbaricon"></i> Home</router-link>
                <router-link to="/" class="navbar-item navbar-icon-left"><i class="fas fa-store navbaricon"></i> Store</router-link>
                <router-link to="/" class="navbar-item navbar-icon-left"><i class="fas fa-keyboard navbaricon"></i> Part Picker </router-link>
                <router-link to="/about" class="navbar-item navbar-icon-left"><i class="far fa-question-circle navbaricon"></i> About</router-link>
            </div>
            <div class="navbar-end">
                <a v-if="!isLoggedIn" class="navbar-item navbar-icon-left"><i class="fas fa-sign-in-alt"></i> Log In</a>
                <div v-else class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link navbar-icon-left"><i class="fas fa-user-circle"></i>Account</a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item navbar-icon-right"> Settings <i class="fas fa-cog"></i></a>
                        <a class="navbar-item navbar-icon-right"> Log Out <i class="fas fa-sign-out-alt"></i></a>
                    </div>
                </div>
                <a class="navbar-item">
                    <i class="fas fa-shopping-cart"></i>
                </a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Navbar",
    computed:{
         isLoggedIn(){
             return true;
         }
    }
}



</script>

<style>
    .navbar{
        font-size:1.2em;
        font-family: 'Raleway', sans-serif;
        background-color: #c9c9c9;
    }
    .navbar a{
        color:#03312e;
    }
    .navbar-icon-left .svg-inline--fa{
        margin-right:10px;
    }
    .navbar-icon-right .svg-inline--fa{
        margin-left:5px;
    }
</style>