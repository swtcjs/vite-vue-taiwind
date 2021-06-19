<template>
    <div class="flex justify-between items-center">
      <img class="rounded-full w-10" :src="userData.avatar_url" alt="avatar" />
      <span class="bg-indigo-100 items-center"> {{ userData.login }} </span>
    </div>
</template>

<script lang="ts">
  import GitUser from "../types/User";
  import { defineComponent } from "vue"
  import { octokitClient } from "../composables/octokit"
  const octokit = octokitClient(localStorage.getItem("github-token") || "")
  export default defineComponent({
    name: "User",
    data() {
      return {
        userData: {} as GitUser,
      };
    },
    async mounted() {
      const { data: userData } = await octokit.request("/user");
      this.userData = userData
    }
  })
</script>
