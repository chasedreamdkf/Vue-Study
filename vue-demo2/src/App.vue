<template>
  <!-- Step3: 使用组件 -->
  <!-- <IfDemo /> -->
  <!-- <ListDemo /> -->
  <!-- <KeyDemo /> -->
  <!-- <EventDemo1 /> -->
  <!-- <EventDemo2 /> -->
  <!-- <EventDemo3 /> -->
  <!-- <EventDemo4 /> -->
  <!-- <ArrayList /> -->
  <!-- <ComputeDemo /> -->
  <!-- <ClassDemo /> -->
  <!-- <WatchDemo /> -->
  <!-- <FormDemo /> -->
  <!-- <RefDemo /> -->
  <!-- <Parent /> -->
  <!-- <A /> -->
  <!-- <ComponentEvent /> -->
  <!-- <Main /> -->
  <!-- <A1 /> -->
  <!-- <SlotBase>
    <div>
      <h3>插槽标签</h3>
      <p>插槽内容</p>
    </div>
  </SlotBase> -->
  <!-- <SlotTwo>
    <template v-slot:header>
      <h3>插槽标签</h3>
    </template>
    // v-slot可简写为# 
    <template #main>
      <p>插槽内容</p>
    </template>
  </SlotTwo> -->
  <!-- <SlotThree v-slot="slotProps">
    <h3>{{ curText }} - {{ slotProps.msg }}</h3>
  </SlotThree>
  <hr>
  <SlotThree>
    <template #header="slotProps2">
      <h3>只有-{{ slotProps2.msg2 }}</h3>
    </template>
  </SlotThree> -->
  <!-- <Lifeproid /> -->
  <component :is="NowComponent"></component>
  <keep-alive>
    <component :is="NowComponent"></component>
  </keep-alive><br>
  <button @click="changeComponent">改变组件</button>
</template>

<script>
  // Step1: 引入组件
  // import IfDemo from "./components/IfDemo.vue";
  // import ListDemo from "./components/ListDemo.vue";
  // import KeyDemo from "./components/KeyDemo.vue";
  // import EventDemo1 from "./components/EventDemo1.vue";
  // import EventDemo2 from "./components/EventDemo2.vue";
  // import EventDemo3 from "./components/EventDemo3.vue";
  // import EventDemo4 from "./components/EventDemo4.vue";
  // import ArrayList from "./components/ArrayList.vue";
  // import ComputeDemo from "./components/ComputeDemo.vue";
  // import ClassDemo from "./components/ClassDemo.vue";
  // import WatchDemo from "./components/WatchDemo.vue";
  // import FormDemo from "./components/FormDemo.vue";
  // import RefDemo from "./components/RefDemo.vue";
  // import Parent from "./components/Parent.vue";
  // import A from "./components/A.vue";
  // import ComponentEvent from "./components/ComponentEvent.vue";
  // import Main from './components/Main.vue';
  // import A1 from './components/A1.vue';
  // import SlotBase from './components/SlotBase.vue';
  // import SlotTwo from './components/SlotTwo.vue';
  // import SlotThree from './components/SlotThree.vue';
  // import Lifeproid from './components/Lifeproid.vue';
  import DynamicA from './components/DynamicA.vue';
  // import DynamicB from './components/DynamicB.vue'
  // 异步导入组件B
  import { defineAsyncComponent } from "vue";
  
  const DynamicB = defineAsyncComponent(() => {
    import('./components/DynamicB.vue')
  })

  // Step2: 注入组件，使用<script setup>时默认导出
  export default {
    components: {
      // RefDemo: RefDemo
      // Parent
      // A
      // ComponentEvent
      // Main
      // A1
      // SlotBase
      // SlotTwo
      // SlotThree
      // Lifeproid
      DynamicA,
      DynamicB
    },
    data(){
      return {
        // msg: "插槽续集内容(父元素)",
        // curText: "测试内容"
        NowComponent: "DynamicA"
      }
    },
    methods: {
      changeComponent(){
        this.NowComponent = this.NowComponent == "DynamicA" ? "DynamicB" : "DynamicA"
      }
    }
  }
</script>

<!-- scoped: 仅仅在当前组件生效 -->
<style scoped></style>
