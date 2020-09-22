import { mount } from "@vue/test-utils";
import PostWriter from "@/components/PostWriter.vue";
import { basePost } from "@/mock";

describe("PostWriter", () => {
  it("测试写博客组件", () => {
    const wrapper = mount(PostWriter, {
      props: {
        post: { ...basePost },
      },
    });

    wrapper.find('[data-test="post-title"]').setValue("Kano!!!");
    wrapper.find<HTMLDivElement>('[data-test="markdown"]').element.innerText =
      "##Kano";
    wrapper.find<HTMLDivElement>('[data-test="markdown"]').trigger("input");

    wrapper.find('[data-test="submit-post"]').trigger("click");
    console.log(wrapper.emitted().save);
  });
});
