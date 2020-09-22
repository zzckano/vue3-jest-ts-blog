<template>
  <Suspense>
    <template #default>
      <PostViewer />
    </template>
    <template #fallback>
      <Progress />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostViewer from "@/components/PostViewer.vue";
import Progress from "@/components/Progress.vue";

export default defineComponent({
  name: "ShowPost",
  components: {
    PostViewer,
    Progress,
  },
});
</script>

<style></style>
