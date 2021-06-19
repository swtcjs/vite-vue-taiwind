<template>
  <div class="mb-4" v-if="issues.length > 0">
    <button @click="show_issues=!show_issues"
      class="bg-blue-400 hover:bg-blue-500">
      {{ show_issues ? "Hide Issues" : "Show Issues" }}
    </button>
    <ul class="list-disc space-y-1" v-show="show_issues" v-for="issue in issues" :key="issue.id">
       <li class="flex items-start">
         <a class="underline ml-2" :href="issue.url" target="_new">{{ issue.number }}: {{ issue.title }}</a>
       </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import GitIssue from "../../types/Issue"
  import { defineComponent } from "vue"
  import { octokitClient } from "../../composables/octokit"
  const octokit = octokitClient(localStorage.getItem("github-token") || "")
  export default defineComponent({
    name: "Issues",
    props: {
      owner: {
        type: String,
        required: true,
      },
      repo: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        issues: [] as GitIssue[],
        show_issues: false
      }
    },
    methods: {
      async getRepoIssues(owner="", repo="") {
        if (!owner || !repo) {
          return;
        }
        const { data: issues } = await octokit.issues.listForRepo({
          owner,
          repo,
        });
        this.issues = issues;
      },
    },
    watch: {
      repo: {
        immediate: true,
        handler(value) {
          this.getRepoIssues(this.owner, value)
        }
      },
      owner: {
        immediate: true,
        handler(value) {
          this.getRepoIssues(value, this.repo)
        }
      }
    }
  })
</script>
