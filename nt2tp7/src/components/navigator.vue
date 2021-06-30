<template>

	<div id="navigator">
		<button id="reset" @click="emitReset"> New colors</button>
		<span id="message"> {{messageVuex}} </span>

		<button id="easy" :class="easyObject" @click="emitEasyMode">easy</button>
		<button id="hard" :class="hardObject" @click="emitHardMode">hard</button>
	</div>
  

</template>

<script lang="js">

  export default  {
    name: 'src-components-game-navigator',
    props: [],
    mounted () {

    },
    data () {
      return {
        easyObject: {
          selected: false
        },
        hardObject: {
          selected: true
        }
      }
    },
    methods: {
      emit(data) {
        this.$emit('on-click', data);
      },

      emitReset(){
        this.$store.message = 'Colors updated!';
        this.emit('reset');
      },

      emitEasyMode(){

        this.$store.message = 'Easy mode!';
        this.easyObject['selected'] = true;
        this.hardObject['selected'] = false;
        this.emit('easy');
      },

      emitHardMode(){
        
        this.$store.message = 'Hard mode!';

        this.easyObject['selected'] = false;
        this.hardObject['selected'] = true;
        this.emit('hard');
      }

    },
    computed: {
      messageVuex: function(){
        console.log('Computed TOP: ', this.$store.state);
        return this.$store.state.message
      }
    }
}


</script>

<style scoped lang="css">

#navigator {

	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;

}

button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}

#message {
	display: inline-block;
	width: 20%;
}

.selected {
	background-color: steelblue;
	color: white;
}

</style>

