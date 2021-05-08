<template>
  <div class="hello">
    <div class="square" @click="onClickElement"></div>    
    <p>
      {{boundsInfo}}
    </p>
    <!-- <h1>{{ msg }}</h1>
    <p>{{ message }}</p> -->
    <!-- <p> -->
      <!-- myName: {{myName}} -->
    <!-- </p> -->
    <!-- <p> -->
      <!-- myFirstTask: {{myFirstTask}} -->
    <!-- </p> -->
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export type Rect = {
  width: number;
  height: number;
}

export type Position = {
  top: number;
  left: number;
}

export default Vue.extend({
  name: 'HelloWorld',
  data: () => ({
    bounds: null as ClientRect | DOMRect | null,
  }),
  methods: {
    onClickElement({target}: {target: HTMLElement}): void {
      console.log('target = ', target);
      this.bounds = target.getBoundingClientRect();
    }
  },
  props: {
    // msg: String,
    /**
     * 複数の方を指定するとき
     */
    // value: [Number, String],
    // requireValue: {
    //   type: [Number, String],
    //   required: true
    // }
    /**
     * Object, Array型
     */
    // obj: {
    //   type: Object as PropType<{name: string}>,
    //   required: true
    // },
    // arr: {
    //   type: Array as PropType<{task: string}[]>
    // }
  },
  computed: {
    boundsInfo(): string {
      if (this.bounds === null) return "";
      return JSON.stringify(this.bounds);
    },
    rect(): Rect {
      if(this.bounds === null) return {width: 0, height: 0};
      return {
        width: this.bounds.width,
        height: this.bounds.height
      }
    },
    position(): Position {
      if(this.bounds === null) return {top: 0, left: 0};
      return {
        top: this.bounds.top,
        left: this.bounds.left
      }
    }
    // message(): string {
    //   return this.msg;
    // }
    // myName(): string {
    //   return this.obj.name
    // },
    // myFirstTask(): string {
    //   return this.arr[0].task
    // }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.square {
  width: 100px;
  height: 150px;
  color: white;
  background: skyblue;
}
</style>
