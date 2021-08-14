<template>
  <div>
    <h1>start</h1>
    <div ref="d3-start"
         class="d3-start"></div>
  </div>
</template>

<script>
  import * as d3 from 'd3'

  function settingD3(d3El) {
    const chart = d3.select(d3El);

    chart.append('svg')
      .append('rect')
      .attr('width', 50)
      .attr('height', 200)
      .style('fill', 'red')
  }

  export default {
    name: 'HelloWorld',
    mounted() {
      const d3El = this.$refs['d3-start'];
      settingD3(d3El)
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
