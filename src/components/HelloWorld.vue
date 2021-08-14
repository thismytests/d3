<template>
  <div>
    <h1>start</h1>
    <ul ref="d3-start"
        class="d3-start">
      <li ref="d3-item"></li>
      <li ref="d3-item"></li>
      <li ref="d3-item"></li>

    </ul>
  </div>
</template>

<script>
  import * as d3 from 'd3'

  function settingD3(d3Els) {
    const phones = ['iPhone 6', 'Samsung Galaxy S5', 'LG G4'];

    const chart = d3.selectAll(d3Els);

    chart
      .data(phones)
      .text(function (d) {
        return d
      })
  }

  export default {
    name: 'HelloWorld',
    mounted() {
      const d3Els = this.$refs['d3-start'].children;
      settingD3(d3Els)
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
