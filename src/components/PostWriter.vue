<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="label">博客标题</div>
          <div class="control">
            <input data-test="post-title" type="text" v-model="title" class="input" />
          </div>
        </div>
      </div>
    </div>
    <!-- 写的内容 & 展示的内容 -->
    <div class="columns">
      <div class="column is-one-half">
        <div
          contenteditable
          id="markdown"
          ref="contentEditable"
          @input="handleEdit"
          data-test="markdown"
        />
      </div>
      <div class="column is-one-half">
        <div v-html="html" />
      </div>
    </div>

    <!-- 保存 -->
    <div class="columns">
      <div class="column">
        <button
          data-test="submit-post"
          @click="handleSubmit"
          class="button is-primary is-pulled-right"
        >保存</button>

        <button @click="$router.go(-1)" class="button is-danger">取消</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import { Post } from "@/types";
import { parse, MarkedOptions } from "marked";
import { highlightAuto } from "highlight.js";
import debounce from "lodash/debounce";

export default defineComponent({
  name: "App",
  components: {},
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
  setup(props, ctx) {
    const title = ref(props.post.title);
    const contentEditable = ref<null | HTMLDivElement>(null);
    const markdown = ref(props.post.markdown);
    const html = ref("");

    const handleEdit = () => {
      // @ts-ignore
      markdown.value = contentEditable.value.innerText;
    };

    // 保存
    const handleSubmit = () => {
      // 将完整数据提交到父级
      const post: Post = {
        ...props.post,
        title: title.value,
        markdown: markdown.value,
        html: html.value,
      };
      console.log(post);
      // 注册事件
      ctx.emit("save", post);
    };

    const options: MarkedOptions = {
      highlight: (code: string) => highlightAuto(code).value,
    };

    const update = (value: string) => {
      html.value = parse(value, options);
    };

    watch(() => markdown.value, debounce(update, 500), { immediate: true });

    onMounted(() => {
      // @ts-ignore
      contentEditable.value.innerText = markdown.value;
    });

    return { title, contentEditable, handleEdit, markdown, html, handleSubmit };
  },
});
</script>

<style></style>
