<template>

<section class="src-components-game">

  <Top />
  <Navigator @on-click="handleNavigator"/>

  <div id="contenedor" v-if="loadSquares">

    <Square v-for="(item, i) in cantSquare"
      :key="i"
      :value="squareValues[i]"
      :hide ="squareHide[i]"
      @on-click="handleSquareClick(i)"

     />
  </div>

</section>


</template>

<script lang="js">

import Top from './top.vue'
import Navigator from './navigator.vue'
import Square from './square.vue'


  export default  {
    name: 'src-components-game',
  components: {
    Top,
    Square,
    Navigator
  },
  props: [],
  data () {
    return {
      loadSquares: false,
      cantSquare: 6,
      squareValues: [],
      squareHide: [],
    }
  },
  computed: {

  },
  mounted () {
    this.setInitialData();
    this.setSquareObject();
  },
  methods: {
    handleSquareClick(index){


      if (index === this.$store.state.indexWinner) {
        this.$store.dispatch("cambiarMensaje","Correct!, Winner!");
        this.$store.state.hasWinner = true;

        let rgbWinner = this.squareValues[index];

        for (let idx = 0; idx < this.cantSquare; idx++) {
          this.squareValues[idx] = rgbWinner;
        }

        this.squareHide = [];
        this.squareValues = this.squareValues.slice(0, this.squareValues.length);

      }
      else {

        this.$store.dispatch("cambiarMensaje","Try again!");
        this.squareHide[index] = true;
        this.squareHide = this.squareHide.slice(0, this.squareHide.length);

      }




    },
    getRandomArbitrary(min, max) {
      return Math.trunc(Math.random() * (max - min) + min);
    },
    setInitialData(){
      this.setSquareObject();
      this.selectAWinner();
      this.$store.state.hasWinner = false;
      this.loadSquares = true;
    },
    selectAWinner() {
      let idxWinner = this.getRandomArbitrary(0,this.cantSquare-1);
      this.$store.dispatch('cambiarIndex', idxWinner);
      this.$store.dispatch("cambiarRgb", this.squareValues[idxWinner]);
    },
    setSquareObject(){

      for (let a = 0; a < this.cantSquare; a++) {
        this.squareValues[a] = `rgb(${this.getRandomArbitrary(0,255)}, ${this.getRandomArbitrary(0,255)}, ${this.getRandomArbitrary(0,255)})`;
      }

      this.squareValues = this.squareValues.slice(0, this.squareValues.length);
      this.squareHide = [];
      this.$store.hasWinner = false;

    },

    handleNavigator(event){
      console.log(event);

      if(event === 'easy') {
        this.cantSquare = 3;
      }
      else if(event === 'hard') {
        this.cantSquare = 6;
      }

      this.setInitialData();

    }

  }
}



</script>

<style scoped lang="css">
#contenedor {
    margin: 20px auto;
	max-width: 50%;
}
</style>
