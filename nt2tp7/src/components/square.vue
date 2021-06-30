<template>


  <div class="squareBlock" :style="colorBlock" @click="handleClick">
    
  </div>


</template>

<script lang="js">

  export default  {
    name: 'src-components-game-square',
    props: ['value', 'hide'],
    mounted () {
      console.log('MOUNT:', this.key);
    },
    data () {
      return {

      }
    },
    methods: {
      handleClick(){
        if (!this.$store.hasWinner) {
          this.$emit('on-click');
        }
      },

    },
    computed: {
        colorBlock: function() {
          console.log('Computed..'+ this.hide);
          return {
            'backgroundColor': this.value,
            'display': (this.hide) ? 'none' : 'block'
          };
        }

    }
}


</script>

<style scoped lang="css">

.squareBlock {
	width: 30%;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;
}

</style>
