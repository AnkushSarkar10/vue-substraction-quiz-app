<template>
  <div class="card text-center" :class="appCheckClass.class" style="width: 60%">
    <div class="card-body">
      <h1 class="display-4" style="color: darkgreen" v-if="Show_correct">{{ correct_arr[getRandomInt(0,5)] }}</h1>
      <h1 class="display-4" style="color: black" v-else>{{ wrong_arr[getRandomInt(0,4)] }}</h1>
      <br />
      <hr />
      <br />
      <button class="btn btn-lg btn-primary" @click="emit_swap">
        <b>Next Question</b>
      </button>
      <br />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import EventBus from "../bus";

export default {
  props: {
    appCheckClass: Object
  },
  data() {
    return {
      correct_arr: [
        "Well Done!",
        "Great Job!",
        "Amazing!",
        "Excelent",
        "Wow!!!"
      ],
      wrong_arr: ["Sorry!", "Try again!", "Oops!", "Beter Luck Next Time!"]
    };
  },
  methods: {
    emit_swap() {
      EventBus.$emit("swap_comp");
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
  },
  computed: {
    Show_correct() {
      if (this.appCheckClass.class == "right") {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    console.log(this.appCheckClass);
  }
};
</script>

<style scoped>
.card {
  margin: auto;
  /* background-color: #b8e994; */
}
/* .display-4{
    color: darkgreen;
} */
.btn {
  /* background-color: rgb(11, 180, 152); */
  background-color: #eaac48;
  color: white;
  border: none;
  margin-bottom: 15px;
  margin-top: 5px;
}
.right {
  background-color: #b8e994;
}
.wrong {
  background-color: #ff7675;
}
</style>