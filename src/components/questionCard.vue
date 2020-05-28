<template>
    <div class="card text-center" style="width: 60%">
      <div class="card-header">
        <h4>What is {{ num_1 }} - {{ num_2 }} ?</h4>
      </div>
      <div class="card-body">
        <h2>
          <span class="badge badge-secondary" @click="submit_ans(ans[0])">{{ ans[0] }}</span>
        </h2>
        <h2>
          <span class="badge badge-secondary" @click="submit_ans(ans[1])">{{ ans[1] }}</span>
        </h2>
        <h2 id="b-row">
          <span class="badge badge-secondary" @click="submit_ans(ans[2])">{{ ans[2] }}</span>
        </h2>
        <h2 id="b-row">
          <span class="badge badge-secondary" @click="submit_ans(ans[3])">{{ ans[3] }}</span>
        </h2>
      </div>
      <div class="card-footer text-muted">@epicshit 2020 ©</div>
    </div>
</template>

<script>
import Vue from "vue";

import EventBus from '../bus';

export default {
  data() {
    return {};
  },
  methods: {
    submit_ans(ans){
      if(ans == (this.num_1 - this.num_2)){
        EventBus.$emit("send_ans",true)
        EventBus.$emit("swap_comp")
      }else{
        EventBus.$emit("send_ans",false)
        EventBus.$emit("swap_comp")
      }     
    },
    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  },
  computed: {
    num_1() {
      return Math.floor(Math.random() * 100) + 1;
    },
    num_2() {
      return Math.floor(Math.random() * 100) + 1;
    },
    ans() {
      let ans_arr = [
        (this.num_1 - this.num_2),
        (Math.floor(Math.random() * 100) - 80),
        (Math.floor(Math.random() * 100) - (this.num_1 - this.num_2)),
        (Math.floor(Math.random() * 10) + (this.num_1 - this.num_2))
      ];
      return (this.shuffle(ans_arr))
    }
  }
};
</script>

<style scoped>
.card {
  margin: auto;
}
.card-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
#b-row {
  margin-top: 15px;
}
.card-body > h2 {
  flex: 0 50%;
}

.badge {
  background-color: rgb(11, 180, 152);
}
</style>