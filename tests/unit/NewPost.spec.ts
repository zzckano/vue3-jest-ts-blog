import { mount } from "@vue/test-utils";
import NewPost from "@/views/NewPost.vue";
import { useStore } from "@/store";
import { Post } from "@/types";

const mockRoutes: any[] = [];

jest.mock("vue-router", () => ({
  useRouter: () => ({
    push: (url: string) => {
      mockRoutes.push(url);
    },
  }),
}));

jest.mock("axios", () => ({
  post: (url: string, payload: Post) => {
    return { data: payload };
  },
}));

describe("NewPost", () => {
  it("测试添加博客组件", async () => {
    const store = useStore();
    const wrapper = mount(NewPost, {
      global: {
        provide: { store },
      },
    });

    expect(store.getState().posts.ids).toHaveLength(0);

    await wrapper.find('[data-test="submit-post"]').trigger("click");
    await wrapper.vm.$nextTick();

    // console.log(store.getState().posts);
    // console.log(mockRoutes);
    expect(store.getState().posts.ids).toHaveLength(1);
    expect(mockRoutes).toEqual(["/"]);
  });
});
