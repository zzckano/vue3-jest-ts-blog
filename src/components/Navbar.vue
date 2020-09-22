<template>
  <nav class="navbar is-dark topNav">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <i class="fa fa-home"></i>
        </router-link>
      </div>
      <div id="topNav" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">博客</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped" v-if="auth">
              <p class="control">
                <button class="button is-small">
                  <span class="icon">
                    <i class="fa fa-user-plus"></i>
                  </span>
                  <span>Admin</span>
                </button>
              </p>
              <p class="control">
                <button @click="signout" class="button is-small is-info is-outlined">
                  <span class="icon">
                    <i class="fa fa-user"></i>
                  </span>
                  <span>退出</span>
                </button>
              </p>
            </div>
            <div class="field is-grouped" v-else>
              <p class="control">
                <button @click="signup" class="button is-small">
                  <span class="icon">
                    <i class="fa fa-user-plus"></i>
                  </span>
                  <span>注册</span>
                </button>
              </p>
              <p class="control">
                <button @click="signin" class="button is-small is-info is-outlined">
                  <span class="icon">
                    <i class="fa fa-user"></i>
                  </span>
                  <span>登录</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <teleport to="#modal" v-if="modal.visible">
      <!-- 插入组件 / 动态组件 -->
      <component :is="component" />
    </teleport>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed, markRaw } from "vue";
import { useModal } from "@/utils/useModal";
import Signup from "@/views/Signup.vue";
import Signin from "@/views/Signin.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Navbar",
  components: {},
  setup() {
    const modal = useModal();
    const store = useStore();
    const component = ref();

    const auth = computed(() => store.getState().loginUser.currentUserId);

    const signup = () => {
      component.value = markRaw(Signup);
      modal.showModal();
    };

    const signin = () => {
      component.value = markRaw(Signin);
      modal.showModal();
    };

    const signout = async () => {
      await store.signOut();
    };

    return { signout, auth, signup, signin, component, modal };
  },
});
</script>

<style></style>
