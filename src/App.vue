<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0 0;
}

img {
        height: 200px;
    }

    .register input, .login input, .create input {
        display: block;
        margin: 20px auto;
        padding: 10px;
        width: 30%;
    }

    .register input:focus, .login input:focus, .create input:focus {
        border: solid rgb(122, 226, 122);
        outline: none;
    }

    button {
        background-color: rgb(37, 223, 223);
        padding: 10px 20px;
        cursor: pointer;
    }

    button:hover {
        background-color: rgb(190, 233, 233);
    }
</style>
