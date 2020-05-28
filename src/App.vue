<template>
  <div id="app">
    <app-header></app-header>
    <br />
    <div class="container">
      <transition name="rotate" mode="out-in">
        <component :is="componentId" :appCheckClass="appCheckClass"></component>
      </transition>
    </div>
    <br />
    <!-- <button @click="change_id" class="btn btn-lg">swap compps</button> -->
  </div>
</template>

<script>
import Vue from "vue";

import EventBus from "./bus";

export default {
  data() {
    return {
      componentId: "app-question-card",
      class_text: ""
    };
  },
  methods: {
    change_id() {
      if (this.componentId == "app-question-card") {
        this.componentId = "app-ans-check";
      } else {
        this.componentId = "app-question-card";
      }
    }
  },
  mounted() {
    EventBus.$on("swap_comp", () => {
      this.change_id();
    });
    EventBus.$on("send_ans", ans => {
      if (ans) {
        console.log("corect!");
        this.class_text = "right"

      } else {
        console.log("wrong!");
        this.class_text = "wrong"
        // this.ans_class = 'wrong'
      }
    });
  },
  computed: {
    appCheckClass() {
      if (this.componentId === "app-ans-check") {
        return { class: this.class_text };
      }
    }
  }
};
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  /* margin: 10% 0; */
  min-height: 450px;
  align-items: center;
}
/* transitions */
.rotate-enter {
}
.rotate-enter-active  {
  animation: rotate_comp_in 0.4s ease-out forwards;
}
.rotate-leave { 

}
.rotate-leave-active{
  animation: rotate_comp_out 0.2s ease-out forwards;
}

@keyframes rotate_comp_in {
  from{
    transform: rotateY(90deg);
  }
  to{
    transform: rotateY(0deg);
  }
}

@keyframes rotate_comp_out {
  from{
    transform: rotateY(0deg);
  }
  to{
    transform: rotateY(90deg);
  }
}
</style>