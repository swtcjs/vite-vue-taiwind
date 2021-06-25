<template>
   <div class="flex justify-between h-10"><ArrowLeftIcon /><ArrowUpIcon /><ArrowDownIcon /><ArrowRightIcon /></div>
   <div class="flex justify-around items-center">
     <AvatarDemo />
   </div>
   <div class="mx-auto max-w-md">
      <h1 class="text-3xl"> Token </h1>
      <GithubTokenForm />
      <User />
      <Repos />
      <ChartDemo />
      <div class="form">
       <input type="checkbox" class="form-checkbox rounded text-pink-500" />
      </div>
      <article class="mx-auto prose">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
      </article>
   </div>
   <TiptapDemo />
  <TailwindDemo />
  <MenuDemo />
  <SelectMenuDemo />
  <DetailPage />
  <LoginDemo />
  <!--
   <IconDemo />
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
import GithubTokenForm from "./components/GithubTokenForm.vue"
import User from "./components/User.vue"
import Repos from "./components/Repos.vue"
import ChartDemo from "./components/ChartDemo.vue"
import TailwindDemo from './components/TailwindDemo.vue'
import DetailPage from './components/DetailPage.vue'
import SelectMenuDemo from "./components/SelectMenuDemo.vue"
import HeroSectionDemo from './components/HeroSectionDemo.vue'
import MenuDemo from './components/MenuDemo.vue'
import LoginDemo from './components/LoginDemo.vue'
import AvatarDemo from './components/AvatarDemo.vue'
import TiptapDemo from './components/TiptapDemo.vue'
// import HeadDemo from './components/HeadDemo.vue'
// import IconDemo from './components/IconDemo.vue'
// import TableDemo from './components/TableDemo.vue'
// import ModalDemo from './components/ModalDemo.vue'
// import DropDownDemo from './components/DropDownMenu.vue'
// import GridDemo from './components/GridDemo.vue'

export default defineComponent({
  components: {
    TailwindDemo,
    MenuDemo,
    HeroSectionDemo,
    SelectMenuDemo,
    DetailPage,
    GithubTokenForm,
    User,
    Repos,
    ChartDemo,
    LoginDemo,
    AvatarDemo,
    TiptapDemo
  }
})
</script>

