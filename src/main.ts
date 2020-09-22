import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import * as mockData from "./mock";
import "highlight.js/styles/monokai.css";
import { Post } from "./types";
import { v4 as uuidv4 } from "uuid";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// @ts-ignore
axios.get = async (url: string) => {
  if (url === "/posts") {
    await delay(1000);

    return Promise.resolve({
      data: [mockData.todayPost, mockData.thisWeek, mockData.thisMonth],
    });
  }
};

// @ts-ignore
axios.post = async (url: string, payload: any) => {
  if (url === "/posts") {
    await delay(1000);
    const id = uuidv4();

    return Promise.resolve({
      data: { ...payload, id },
    });
  }

  if (url === "/users") {
    await delay(1000);
    const id = uuidv4();

    const { id: oldId, password, ...rest } = payload;

    return Promise.resolve({
      data: { ...rest, id },
    });
  }
};

// @ts-ignore
axios.put = async (url: string, payload: Post) => {
  if (url === "/posts") {
    await delay(1000);
    return Promise.resolve({
      data: { ...payload },
    });
  }
};

const app = createApp(App);
app.use(router);
app.mount("#app");
