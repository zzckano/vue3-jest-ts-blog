<template>
  <PostWriter :post="post" @save="handleSave" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostWriter from "@/components/PostWriter.vue";
import { useStore } from "@/store";
import { useRouter, useRoute } from "vue-router";
import { Post } from "@/types";
export default defineComponent({
  name: "PostEditor",
  components: {
    PostWriter,
  },
  async setup() {
    const route = useRoute();
    const store = useStore();
    const router = useRouter();

    const id = route.params.id as string;

    // 加载数据
    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }

    const post = store.getState().posts.all[id];
    console.log(post);

    const handleSave = async (post: Post) => {
      // 存储到store中
      await store.updatePost(post);
      // 路由跳转
      router.push("/");
    };

    return { post, handleSave };
  },
});
</script>

<style></style>
