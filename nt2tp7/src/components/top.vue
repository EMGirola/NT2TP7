<template>

<div id="header" :style="colorBlock">
  <h1>
    The Great 
    <br>
    <span id="colorDisplay">{{rgbWinnerVuex}}</span>
    <br>
     Guessing Game
  </h1>
</div>

</template>

<script lang="js">

  export default  {
    name: 'src-components-game-top',
    props: [],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {

    },
    computed: {
      colorBlock: function() {
        console.log('ColorBlock compute..'+ this.$store.state.hasWinner);
        let back = (this.$store.state.hasWinner) ? this.$store.state.rgbWinner : 'steelblue';

        return {
          'backgroundColor': back,
          'display': (this.hide) ? 'none' : 'block'
        };
      },
      rgbWinnerVuex: function(){
        console.log('Computed TOP: ', this.$store.state);
        return this.$store.state.rgbWinner
      }

    }
}


</script>

<style scoped lang="css">

#header {
  transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
}

h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

}

#colorDisplay {
	font-size: 200%;
}

</style>
