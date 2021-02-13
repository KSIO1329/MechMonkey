<template>
  <div id="ppMain">
    <div id="ppTable">
      <h3 id="ppTitle">Keyboard Builder</h3>
      <hr />
      <ul id="ppList">
        <li class="ppItem">
          <span>
            Switch
          </span>
          <button class="ppButton">
            Pick One
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Part Picker",
  components: {}
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";
#ppMain {
  background-color: #fefefe;
  height: 100vh;
  width: 100vw;
}
#ppTable {
  height: 100%;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  background-color: #dfdfdf;
  margin-bottom: 5%;
}
#ppTitle {
  font-size: 3em;
  color: $app-link;
}
#ppList {
  height: 100%;
}
.ppButton {
  @media only screen and (max-width: 1023px) {
    display: block;
  }
  height: 90%;
  vertical-align: middle;
  margin-left: 50%;
}
.ppItem {
  border-top: solid 2px #c9c9c9;
  border-bottom: solid 2px #c9c9c9;
  height: 10%;
}
</style>
