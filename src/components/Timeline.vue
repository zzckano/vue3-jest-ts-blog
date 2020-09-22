<template>
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-menu">
        <div class="navbar-start">
          <a
            class="navbar-item"
            @click="setPeriod(period)"
            :class="[period === selectedPeriod ? 'is-active' : '']"
            data-test="period"
            v-for="(period, index) in periods"
            :key="index"
          >{{ period }}</a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link class="button is-primary is-alt" to="/posts/new">添加博客</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <TimelinePost v-for="post in posts" :key="post.id" :post="post" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { Period, Post } from "@/types";
import { todayPost, thisWeek, thisMonth } from "@/mock";
import moment from "moment";
import TimelinePost from "./TimelinePost.vue";
import { useStore } from "@/store";

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default defineComponent({
  name: "Timeline",
  components: {
    TimelinePost,
  },
  async setup() {
    const periods: Period[] = ["今天", "本周", "本月"];
    const selectedPeriod = ref<Period>("今天");

    // tab切换
    const setPeriod = (period: Period) => {
      selectedPeriod.value = period;
    };

    const store = useStore();
    // console.log(store.getState());

    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }

    const allPosts = store.getState().posts.ids.reduce<Post[]>((acc, id) => {
      const post = store.getState().posts.all[id];
      return acc.concat(post);
    }, []);

    // await delay(2000);

    // 来吧 展示
    // const posts: Post[] = [todayPost, thisWeek, thisMonth];

    const posts = computed(() =>
      allPosts.filter((post) => {
        if (
          selectedPeriod.value == "今天" &&
          post.created.isAfter(moment().subtract(1, "day"))
        ) {
          return true;
        }

        if (
          selectedPeriod.value == "本周" &&
          post.created.isAfter(moment().subtract(7, "day"))
        ) {
          return true;
        }

        if (
          selectedPeriod.value == "本月" &&
          post.created.isAfter(moment().subtract(1, "month"))
        ) {
          return true;
        }

        return false;
      })
    );

    return { periods, selectedPeriod, setPeriod, posts };
  },
});
</script>

<style scoped></style>
