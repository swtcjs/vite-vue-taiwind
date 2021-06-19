<template>
  <div>
      <label for="token">Github Token</label>
      <input id="token" class="w-full" placeholder="github token" type="password" v-model="token" />
      <button type="submit" class="h-10  bg-indigo-400 rounded-lg mt-3 w-full hover:bg-indigo-600" @click="saveToken">Submit</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue"
  export default defineComponent({
  name: "GithubTokenForm",
  setup() {
    const token = ref(localStorage.getItem("github-token") || "")
    const saveToken = () => {
      localStorage.setItem("github-token", token.value)
    }
    return {token, saveToken}
  }
  })
</script>