<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
*{
  margin: 0;
  padding: 0;
}
body{
  background: #f5f5f5;
}
html{
  font-size: 20px;
}
button{
  outline: none;
}
input{
  outline: none;
  border: none;
}
a{
  text-decoration: none;
}
  li{
    list-style: none;
  }

</style>
