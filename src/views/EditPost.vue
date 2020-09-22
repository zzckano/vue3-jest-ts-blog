<template>
  <Suspense>
    <template #default>
      <PostEditor />
    </template>
    <template #fallback>
      <Progress />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostEditor from "@/components/PostEditor.vue";
import Progress from "@/components/Progress.vue";

export default defineComponent({
  name: "ShowPost",
  components: {
    PostEditor,
    Progress,
  },
});
</script>

<style></style>
