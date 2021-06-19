<template>
  <TailwindDemo />
  <MenuDemo />
  <SelectMenuDemo />
  <DetailPage />
  <!--
  <HeroSectionDemo />
  <GridDemo />
  <DropDownDemo />
  <HeadDemo />
  <TableDemo />
  <ModalDemo />
  -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TailwindDemo from './components/TailwindDemo.vue'
import DetailPage from './components/DetailPage.vue'
// import HeadDemo from './components/HeadDemo.vue'
// import TableDemo from './components/TableDemo.vue'
import SelectMenuDemo from "./components/SelectMenuDemo.vue"
// import ModalDemo from './components/ModalDemo.vue'
// import DropDownDemo from './components/DropDownMenu.vue'
import HeroSectionDemo from './components/HeroSectionDemo.vue'
// import GridDemo from './components/GridDemo.vue'
import MenuDemo from './components/MenuDemo.vue'

export default defineComponent({
  name: 'App',
  components: {
    TailwindDemo,
    MenuDemo,
    HeroSectionDemo,
    SelectMenuDemo,
    DetailPage
  }
})
</script>

