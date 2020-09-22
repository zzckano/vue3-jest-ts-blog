import moment from "moment";
import { Post } from "@/types";

moment.locale("zh-cn");
export const basePost: Post = {
  id: 1,
  title: "Kano",
  markdown: "课程列表",
  html: `<div class="entry-content e-content" itemprop="description articleBody" style="height: auto !important;">
  <h1 class="article-title">前言</h1>
<div class="article-content" data-id="5ec53c626fb9a047ef135242">
<p>本文所分享的是关于 vue 3.x 在用法上的改变，而不是在代码实现上的不同。</p>
<p>虽然 vue2 到 vue3 的实现大改，但在用法上变化基本不大，比较明显的一个变化就是添加了 setup(){} 函数了，几乎所有的配置变成了以函数的方式进行定义。即使是这样，但小改动还是很多的。本文主要分享的是 vue 2.x 与 vue 3.x 之间一些常见用法的差异。虽然记录的不多，但也不算少。本文资料来源：github.com/vuejs/rfcs/…</p>
<p>当然这里默认你已经熟练掌握了 vue 2.x 的使用，下面我们就来看看。</p>
<h2 class="heading" data-id="heading-1">新增</h2>
<h3 class="heading" data-id="heading-2">composition-api</h3>
<p>1.逻辑复用和代码组织</p>
<p>这是 vue 3.0 的一个核心变更了。除了改了我们定义状态的书写方式外，也为我们提供体验更棒的逻辑复用和代码组织，新的方式可以让你把同一个业务逻辑的代码（状态，计算属性，方法等）都放到一块。这听起来可能有点不明不白，但如果你写过比较复杂的组件，你就会发现，这个好。旧版本的 created、beforeCreated 钩子函数已费弃，在 vue 3.0 中用 setup 代替。</p>
<p>2.更好的类型推断</p>
<p>更好的支持 TypeScript。</p>
<p>可以看这篇文章：github.com/vuejs/rfcs/…</p>
<p>或者阅读这篇（中文）：vue-composition-api-rfc.netlify.app/zh/</p>
<p>完整的 API：vue-composition-api-rfc.netlify.app/zh/api.html</p>
<h3 class="heading" data-id="heading-3">teleport 组件</h3>
<p>teleport 组件它只是单纯的把定义在其内部的内容转移到目标元素中，在元素结构上不会产生多余的元素，当然也不会影响到组件树，它相当于透明的存在。为什么要有这个组件？为了有更好的代码组织体验。比如：有时，组件模板的一部分在逻辑上属于此组件，但从技术角度来看(如：样式化需求），最好将模板的这一部分移动到 DOM 中的其他位置。</p>
<p>比如：一些 UI 组件库的 模态窗、对话框、通知，下拉菜单等需要通过 z-index 来控制层级关系，如果都只是在不同的组件或者元素层级中，那么 z-index 的层级顺序就难以保证。可能你会说很多 UI 库不是都已经是这样的实现了的吗？至于这个 UI 库是如何实现的，我猜应该是直接操作 DOM。为什么还要提供这个 teleport 组件呢？可能是因为vue 本身的使命使然：尽量不让开发者直接操作 DOM，这些事都统一由 VUE 来完成。开发者可以把更多的时间放在业务的开发上。</p>
<pre><code class="hljs html copyable xml"><span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">teleport</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">to</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"#modals"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>A<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">teleport</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">teleport</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">to</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"#modals"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>B<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">teleport</span>&gt;</span>
<span class="hljs-comment"><span class="hljs-comment">&lt;!-- result--&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">id</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"modals"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>A<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>B<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>更多细节可看：github.com/vuejs/rfcs/…</p>
<h3 class="heading" data-id="heading-4">Suspense</h3>
<p>加载异步组件，在异步组件加载完成成并完全渲染之前 suspense 会先显示&nbsp;<code>#fallback</code>&nbsp;插槽的内容 。</p>
<pre><code class="hljs html copyable xml"><span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">Suspense</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">Suspended-component</span> /&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span> #</span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">fallback</span>&gt;</span>
Loading...
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">Suspense</span>&gt;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p><code>#fallback</code>&nbsp;其实是插件&nbsp;<code>v-solt</code>&nbsp;的简写，而第一个&nbsp;<code>template</code>&nbsp;没有给，则为默认插槽。</p>
<h2 class="heading" data-id="heading-5">变更</h2>
<h3 class="heading" data-id="heading-6">插槽 slot 语法</h3>
<p>github.com/vuejs/rfcs/…</p>
<p>适用版本：Version: 2.x，Version: 3.x</p>
<p>未来版本的 vue 中可以说合二为一了（slot 和 slot-scope）</p>
<pre><code class="hljs html copyable xml"><span class="hljs-comment"><span class="hljs-comment">&lt;!-- vue 2.x --&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">foo</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">bar</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">slot</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"one"</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">slot-scope</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"one"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">slot-scope</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"bar"</span>&gt;</span>
{{ one }} {{ bar }}
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">bar</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">bar</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">slot</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"two"</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">slot-scope</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"two"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">slot-scope</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"bar"</span>&gt;</span>
{{ two }} {{ bar }}
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">bar</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">foo</span>&gt;</span>
<span class="hljs-comment"><span class="hljs-comment">&lt;!-- vue 3.x --&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">foo</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-slot:one</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"one"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">bar</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-slot</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"bar"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>{{ one }} {{ bar }}<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">bar</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-slot:two</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"two"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">bar</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-slot</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"bar"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>{{ two }} {{ bar }}<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">bar</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">foo</span>&gt;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>我觉得这是好事，合二为一，不会让人有一点点的困惑。</p>
<p>简写</p>
<pre><code class="hljs html copyable xml"><span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">TestComponent</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span> #</span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">one</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"{ name }"</span>&gt;</span>Hello {{ name }}<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">TestComponent</span>&gt;</span></span></span></span></span></span></span></span></span></span></span></code></pre>
<h3 class="heading" data-id="heading-7">指令动态参数</h3>
<p>适用版本：Version: 2.x，Version: 3.x</p>
<pre><code class="hljs js copyable javascript">&lt;!-- v-bind <span class="hljs-keyword"><span class="hljs-keyword">with</span> dynamic key --&gt;
<span class="xml"><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">div</span> </span></span><span class="hljs-attr"><span class="xml"><span class="hljs-tag"><span class="hljs-attr">v-bind:</span>[</span></span><span class="hljs-attr"><span class="xml"><span class="hljs-tag"><span class="hljs-attr">key</span>]=</span></span><span class="hljs-string"><span class="xml"><span class="hljs-tag"><span class="hljs-string">"value"</span>&gt;</span></span><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;/</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span></span>
&lt;!-- v-bind shorthand <span class="hljs-keyword"><span class="hljs-keyword">with</span> dynamic key --&gt;
<span class="xml"><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">div</span> </span></span><span class="hljs-attr"><span class="xml"><span class="hljs-tag"><span class="hljs-attr">:</span>[</span></span><span class="hljs-attr"><span class="xml"><span class="hljs-tag"><span class="hljs-attr">key</span>]=</span></span><span class="hljs-string"><span class="xml"><span class="hljs-tag"><span class="hljs-string">"value"</span>&gt;</span></span><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;/</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span></span>
&lt;!-- v-on <span class="hljs-keyword"><span class="hljs-keyword">with</span> dynamic event --&gt;
<span class="xml"><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">div</span> </span></span><span class="hljs-attr"><span class="xml"><span class="hljs-tag"><span class="hljs-attr">v-on:</span>[</span></span><span class="hljs-attr"><span class="xml"><span class="hljs-tag"><span class="hljs-attr">event</span>]=</span></span><span class="hljs-string"><span class="xml"><span class="hljs-tag"><span class="hljs-string">"handler"</span>&gt;</span></span><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;/</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span></span>
&lt;!-- v-on shorthand <span class="hljs-keyword"><span class="hljs-keyword">with</span> dynamic event --&gt;
<span class="xml"><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">div</span> @[</span></span><span class="hljs-attr"><span class="xml"><span class="hljs-tag"><span class="hljs-attr">event</span>]=</span></span><span class="hljs-string"><span class="xml"><span class="hljs-tag"><span class="hljs-string">"handler"</span>&gt;</span></span><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;/</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span></span>
&lt;!-- v-slot <span class="hljs-keyword"><span class="hljs-keyword">with</span> dynamic name --&gt;
<span class="xml"><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">foo</span>&gt;</span>
</span><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">template</span> </span></span><span class="hljs-attr"><span class="xml"><span class="hljs-tag"><span class="hljs-attr">v-slot:</span>[</span></span><span class="hljs-attr"><span class="xml"><span class="hljs-tag"><span class="hljs-attr">name</span>]&gt;</span>
Hello
</span><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;/</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
</span><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;/</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">foo</span>&gt;</span></span>
&lt;!-- v-slot shorthand <span class="hljs-keyword"><span class="hljs-keyword">with</span> dynamic name --&gt;
<span class="xml"><span class="hljs-comment">&lt;!-- pending #<span class="hljs-number">3</span> --&gt;
<span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">foo</span>&gt;</span>
</span><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">template</span> #[</span></span><span class="hljs-attr"><span class="xml"><span class="hljs-tag"><span class="hljs-attr">name</span>]&gt;</span>
Default slot
</span><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;/</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
</span><span class="hljs-tag"><span class="xml"><span class="hljs-tag">&lt;/</span></span><span class="hljs-name"><span class="xml"><span class="hljs-tag"><span class="hljs-name">foo</span>&gt;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>简单地说就是指令名，事件名，插槽名，都可以使用变量来定义了。</p>
<h3 class="heading" data-id="heading-8">Tree-shaking</h3>
<p>适用版本：Version: 3.x</p>
<p>在 vue 3 中不会把所有的 api 都打包进来，只会 打包你用到的 api</p>
<pre><code class="hljs js copyable javascript">&lt;!-- vue <span class="hljs-number"><span class="hljs-number">2.</span>x --&gt;
<span class="hljs-keyword"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword"><span class="hljs-keyword">from</span> <span class="hljs-string"><span class="hljs-string">'vue'</span>
Vue.nextTick(<span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {})
<span class="hljs-keyword"><span class="hljs-keyword">const</span> obj = Vue.observable({})
&lt;!-- vue <span class="hljs-number"><span class="hljs-number">3.</span>x --&gt;
<span class="hljs-keyword"><span class="hljs-keyword">import</span> Vue, { nextTick, observable } <span class="hljs-keyword"><span class="hljs-keyword">from</span> <span class="hljs-string"><span class="hljs-string">'vue'</span>
Vue.nextTick <span class="hljs-comment"><span class="hljs-comment">// undefined</span>
nextTick(<span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {})
<span class="hljs-keyword"><span class="hljs-keyword">const</span> obj = observable({})</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>即我们在项目中用什么什么，就只会打包什么，不会像 vue 2.x 那样全部 api 都打包。</p>
<h3 class="heading" data-id="heading-9">.sync 大变样</h3>
<p>适用版本： vue 3.x</p>
<pre><code class="hljs html copyable xml"><span class="hljs-comment"><span class="hljs-comment">&lt;!-- vue 2.x --&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">MyComponent</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-bind:title.sync</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"title"</span> /&gt;</span>
<span class="hljs-comment"><span class="hljs-comment">&lt;!-- vue 3.x --&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">MyComponent</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-model:title</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"title"</span> /&gt;</span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>也就是说，vue 3.0 又去掉了 .sync ，合并到了 v-model 里，而 v-model 的内部实现也有了小调整</p>
<p>元素</p>
<pre><code class="hljs html copyable xml"><span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">input</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-model</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"xxx"</span>&gt;</span>
<span class="hljs-comment"><span class="hljs-comment">&lt;!-- would be shorthand for: --&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">input</span>
</span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">:model-value</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"xxx"</span>
@</span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">update:model-value</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"newValue =&gt; { xxx = newValue }"</span>
&gt;</span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>组件</p>
<pre><code class="hljs js copyable javascript">&lt;MyComponent v-model:aaa=<span class="hljs-string"><span class="hljs-string">"xxx"</span>/&gt;
&lt;!-- would be shorthand <span class="hljs-keyword">for</span>: --&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">MyComponent</span>
<span class="hljs-attr">:aaa</span>=<span class="hljs-string">"xxx"</span>
@<span class="hljs-attr">update:aaa</span>=<span class="hljs-string">"newValue =&gt; { xxx = newValue }"</span>
/&gt;</span></span></span></code></pre>
<p>不过好像组 alpha 版本的还不支持&nbsp;<code>v-model:aaa="xxx"</code></p>
<h3 class="heading" data-id="heading-10">函数组件</h3>
<p>适用版本： vue 3.x</p>
<pre><code class="hljs js copyable javascript">&lt;!-- vue <span class="hljs-number"><span class="hljs-number">2.</span>x --&gt;
<span class="hljs-keyword"><span class="hljs-keyword">const</span> FunctionalComp = {
<span class="hljs-attr"><span class="hljs-attr">functional</span>: <span class="hljs-literal"><span class="hljs-literal">true</span>,
render(h) {
<span class="hljs-keyword"><span class="hljs-keyword">return</span> h(<span class="hljs-string"><span class="hljs-string">'div'</span>, <span class="hljs-string"><span class="hljs-string"></span>)
}
}
&lt;!-- vue <span class="hljs-number"><span class="hljs-number">3.</span>x --&gt;
<span class="hljs-keyword"><span class="hljs-keyword">import</span> { h } <span class="hljs-keyword"><span class="hljs-keyword">from</span> <span class="hljs-string"><span class="hljs-string">'vue'</span>
<span class="hljs-keyword"><span class="hljs-keyword">const</span> FunctionalComp = <span class="hljs-function"><span class="hljs-function">(</span><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">props, { slots, attrs, emit }</span>) =&gt;</span> {
< span class="hljs-keyword" > <span class="hljs-keyword" >return </span> h(<span class="hljs-string"><span class="hljs-string">'div'</span >, <span class="hljs-string" > <span class="hljs-string" >
   < /span>)
}</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>不再需要&nbsp;<code>functional:true</code>&nbsp;选项，<code>&lt;template functional&gt;</code>&nbsp;不再支付</p>
<p>异步组件也必需通过 api 方法创建</p>
<pre><code class="hljs js copyable javascript"><span class="hljs-keyword"><span class="hljs-keyword">import</span> { defineAsyncComponent } <span class="hljs-keyword"><span class="hljs-keyword">from</span> <span class="hljs-string"><span class="hljs-string">'vue'</span>
<span class="hljs-keyword"><span class="hljs-keyword">const</span> AsyncComp = defineAsyncComponent(<span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword"><span class="hljs-keyword">import</span>(<span class="hljs-string"><span class="hljs-string">'./Foo.vue'</span>))</span></span></span></span></span></span></span></span></code></pre>
<h3 class="heading" data-id="heading-11">全局 api</h3>
<p>适用版本： vue 3.x</p>
<p>在 vue 2.x 中</p>
<pre><code class="hljs js copyable javascript"><span class="hljs-keyword"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword"><span class="hljs-keyword">from</span> <span class="hljs-string"><span class="hljs-string">'vue'</span>
<span class="hljs-keyword"><span class="hljs-keyword">import</span> App <span class="hljs-keyword"><span class="hljs-keyword">from</span> <span class="hljs-string"><span class="hljs-string">'./App.vue'</span>
Vue.config.ignoredElements = [<span class="hljs-regexp"><span class="hljs-regexp">/^app-/</span>]
Vue.use(<span class="hljs-comment"><span class="hljs-comment">/* ... */</span>)
Vue.mixin(<span class="hljs-comment"><span class="hljs-comment">/* ... */</span>)
Vue.component(<span class="hljs-comment"><span class="hljs-comment">/* ... */</span>)
Vue.directive(<span class="hljs-comment"><span class="hljs-comment">/* ... */</span>)
Vue.prototype.customProperty = <span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {}
<span class="hljs-keyword"><span class="hljs-keyword">new</span> Vue({
<span class="hljs-attr"><span class="hljs-attr">render</span>: <span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">h</span> =&gt;</span> h(App)
}).$mount(<span class="hljs-string"><span class="hljs-string">'#app'</span>)</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>在 vue 3.x 中</p>
<pre><code class="hljs js copyable javascript"><span class="hljs-keyword"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword"><span class="hljs-keyword">from</span> <span class="hljs-string"><span class="hljs-string">'vue'</span>
<span class="hljs-keyword"><span class="hljs-keyword">import</span> App <span class="hljs-keyword"><span class="hljs-keyword">from</span> <span class="hljs-string"><span class="hljs-string">'./App.vue'</span>
<span class="hljs-keyword"><span class="hljs-keyword">const</span> app = createApp(App)
app.config.isCustomElement = <span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">tag</span> =&gt;</span> tag.startsWith(<span class="hljs-string"><span class="hljs-string">'app-'</span>)
app.use(<span class="hljs-comment"><span class="hljs-comment">/* ... */</span>)
app.mixin(<span class="hljs-comment"><span class="hljs-comment">/* ... */</span>)
app.component(<span class="hljs-comment"><span class="hljs-comment">/* ... */</span>)
app.directive(<span class="hljs-comment"><span class="hljs-comment">/* ... */</span>)
app.config.globalProperties.customProperty = <span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {}
app.mount(App, <span class="hljs-string"><span class="hljs-string">'#app'</span>)</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>可以看到，创建实例的方式也改变了。一些全局的 api 方法也不在全局上了，而是放到了实例上。</p>
<p>更多的改变可以看这里：github.com/vuejs/rfcs/…</p>
<h3 class="heading" data-id="heading-12">v-model</h3>
<p>适用版本：Version 3.x</p>
<p>1.原来的方式保留</p>
<pre><code class="hljs html copyable xml"><span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">input</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-model</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"foo"</span>&gt;</span></span></span></span></span></code></pre>
<p>2.可绑定多个 v-model</p>
<pre><code class="hljs html copyable xml"><span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">InviteeForm</span>
</span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-model:name</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"inviteeName"</span>
</span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-model:email</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"inviteeEmail"</span>
/&gt;</span></span></span></span></span></span></span></code></pre>
<p>其实上面这种方式就相当于之前的 .sync 。</p>
<p>3.额外处理</p>
<pre><code class="hljs html copyable xml"><span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">Comp</span>
</span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-model:foo.trim</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"text"</span>
</span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-model:bar.number</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"number"</span> /&gt;</span></span></span></span></span></span></span></code></pre>
<p>我们可以给这个属性添加额外的处理</p>
<h3 class="heading" data-id="heading-13">指令的钩子函数</h3>
<p>适用版本：Version 3.x</p>
<p>在 vue 3.x 中 指令的钩子函数仿照了组件中的钩子函数命名规则</p>
<p>vue 2.x 时</p>
<pre><code class="hljs js copyable javascript"><span class="hljs-keyword"><span class="hljs-keyword">const</span> MyDirective = {
bind(el, binding, vnode, prevVnode) {},
inserted() {},
update() {},
componentUpdated() {},
unbind() {}
}</span></code></pre>
<p>vue 3.0 中</p>
<pre><code class="hljs js copyable javascript"><span class="hljs-keyword"><span class="hljs-keyword">const</span> MyDirective = {
beforeMount(el, binding, vnode, prevVnode) {},
mounted() {},
beforeUpdate() {},
updated() {},
beforeUnmount() {}, <span class="hljs-comment"><span class="hljs-comment">// new</span>
unmounted() {}
}</span></span></code></pre>
<h3 class="heading" data-id="heading-14">transition</h3>
<p>适用版本：Version 3.x</p>
<p>当&nbsp;<code>&lt;transition&gt;</code>&nbsp;作为组件的根元素时，外部切换不会触发过渡效果</p>
<p>vue 2.x</p>
<pre><code class="hljs html copyable xml"><span class="hljs-comment"><span class="hljs-comment">&lt;!-- modal component --&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">transition</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">class</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"modal"</span>&gt;</span><span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">slot</span>/&gt;</span><span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">transition</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
<span class="hljs-comment"><span class="hljs-comment">&lt;!-- usage --&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">modal</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-if</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"showModal"</span>&gt;</span>hello<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">modal</span>&gt;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>vue 3.x</p>
<pre><code class="hljs html copyable xml"><span class="hljs-comment"><span class="hljs-comment">&lt;!-- modal component --&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">transition</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-if</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"show"</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">class</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"modal"</span>&gt;</span><span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">slot</span>/&gt;</span><span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">transition</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">template</span>&gt;</span>
<span class="hljs-comment"><span class="hljs-comment">&lt;!-- usage --&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">modal</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">:show</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"showModal"</span>&gt;</span>hello<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">modal</span>&gt;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>也就是说我们只能在&nbsp;<code>&lt;transition&gt;</code>&nbsp;内使用切换。</p>
<h3 class="heading" data-id="heading-15">transition-class</h3>
<p>重命名两个过渡类</p>
<p><code>v-enter</code>&nbsp;重命名成<code>v-enter-from</code>，<code>v-leave</code>重命名成&nbsp;<code>v-enter-from</code>。</p>
<pre><code class="hljs css copyable"><span class="hljs-selector-class"><span class="hljs-selector-class">.v-enter-from</span>, <span class="hljs-selector-class"><span class="hljs-selector-class">.v-leave-to</span> {
<span class="hljs-attribute"><span class="hljs-attribute">opacity</span>: <span class="hljs-number"><span class="hljs-number">0</span>;
}
<span class="hljs-selector-class"><span class="hljs-selector-class">.v-leave-from</span>, <span class="hljs-selector-class"><span class="hljs-selector-class">.v-enter-to</span> {
<span class="hljs-attribute"><span class="hljs-attribute">opacity</span>: <span class="hljs-number"><span class="hljs-number">1</span>
}</span></span></span></span></span></span></span></span></code></pre>
<h3 class="heading" data-id="heading-16">Router</h3>
<p>适合版本：Version: Vue (2.x / 3.x) Vue Router (3.x / 4.x)</p>
<h4 class="heading" data-id="heading-17">router-link 变动</h4>
<p><code>router-link</code>&nbsp;添加&nbsp;<code>scoped-slot</code>&nbsp;API 和 custom 属性，并移除了 tag 属性和 event 属性。</p>
<p>添加&nbsp;<code>scoped-slot</code>&nbsp;有什么用呢？以前只能通过 active-class 来改变元素样式的，现在有了 scoped-slot 之后，我们就更加灵活了，可以根据&nbsp;<code>scoped-slot</code>&nbsp;回传的状态自定义，不管是样式还是类。</p>
<pre><code class="hljs html copyable xml"><span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">router-link</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">to</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"/"</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">custom</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">v-slot</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"{ href, navigate, isActive }"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">li</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">:class</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"{ 'active': isActive }"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">a</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">:href</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"href"</span> @</span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">click</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"navigate"</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">Icon</span>&gt;</span>home<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">Icon</span>&gt;</span><span class="hljs-tag"><span class="hljs-tag">&lt;</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">span</span> </span><span class="hljs-attr"><span class="hljs-tag"><span class="hljs-attr">class</span>=</span><span class="hljs-string"><span class="hljs-tag"><span class="hljs-string">"xs-hidden"</span>&gt;</span>Home<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">a</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag"><span class="hljs-tag">&lt;/</span><span class="hljs-name"><span class="hljs-tag"><span class="hljs-name">router-link</span>&gt;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>也就是说，新版本的 Router 就更加的纯粹，只提供给我们一些参数，让我们自己利用这些参数来实现不同的场景。</p>
<h4 class="heading" data-id="heading-18">meta 合并</h4>
<pre><code class="hljs js copyable javascript">{
<span class="hljs-attr"><span class="hljs-attr">path</span>: <span class="hljs-string"><span class="hljs-string">'/parent'</span>,
<span class="hljs-attr"><span class="hljs-attr">meta</span>: { <span class="hljs-attr"><span class="hljs-attr">requiresAuth</span>: <span class="hljs-literal"><span class="hljs-literal">true</span>, <span class="hljs-attr"><span class="hljs-attr">isChild</span>: <span class="hljs-literal"><span class="hljs-literal">false</span> },
<span class="hljs-attr"><span class="hljs-attr">children</span>: [
{ <span class="hljs-attr"><span class="hljs-attr">path</span>: <span class="hljs-string"><span class="hljs-string">'child'</span>, <span class="hljs-attr"><span class="hljs-attr">meta</span>: { <span class="hljs-attr"><span class="hljs-attr">isChild</span>: <span class="hljs-literal"><span class="hljs-literal">true</span> }}
]
}</span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>当访问&nbsp;<code>/parent/child</code>&nbsp;时，子路由中的 meta 如下：</p>
<pre><code class="hljs js copyable javascript">{ <span class="hljs-attr"><span class="hljs-attr">requiresAuth</span>: <span class="hljs-literal"><span class="hljs-literal">true</span>, <span class="hljs-attr"><span class="hljs-attr">isChild</span>: <span class="hljs-literal"><span class="hljs-literal">true</span> }</span></span></span></span></code></pre>
<p>合并策略与&nbsp;<code>Object.assign</code>&nbsp;类似</p>
<h4 class="heading" data-id="heading-19">路由匹配所有</h4>
<pre><code class="hljs js copyable javascript"><span class="hljs-keyword"><span class="hljs-keyword">const</span> routes = [
{
<span class="hljs-attr"><span class="hljs-attr">path</span>: <span class="hljs-string"><span class="hljs-string">'/'</span>,
<span class="hljs-attr"><span class="hljs-attr">name</span>: <span class="hljs-string"><span class="hljs-string">'Home'</span>,
<span class="hljs-attr"><span class="hljs-attr">component</span>: <span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword"><span class="hljs-keyword">import</span>(<span class="hljs-comment"><span class="hljs-comment">/* webpackChunkName: "Home" */</span> <span class="hljs-string"><span class="hljs-string">'../views/Home.vue'</span>)
},
{
<span class="hljs-attr"><span class="hljs-attr">path</span>: <span class="hljs-string"><span class="hljs-string">'/about'</span>,
<span class="hljs-attr"><span class="hljs-attr">name</span>: <span class="hljs-string"><span class="hljs-string">'About'</span>,
<span class="hljs-attr"><span class="hljs-attr">component</span>: <span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword"><span class="hljs-keyword">import</span>(<span class="hljs-comment"><span class="hljs-comment">/* webpackChunkName: "about" */</span> <span class="hljs-string"><span class="hljs-string">'../views/About.vue'</span>)
},
{
<span class="hljs-attr"><span class="hljs-attr">path</span>: <span class="hljs-string"><span class="hljs-string">'/:catchAll(.*)'</span>,
<span class="hljs-attr"><span class="hljs-attr">name</span>: <span class="hljs-string"><span class="hljs-string">'All'</span>,
<span class="hljs-attr"><span class="hljs-attr">component</span>: <span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword"><span class="hljs-keyword">import</span>(<span class="hljs-comment"><span class="hljs-comment">/* webpackChunkName: "All" */</span> <span class="hljs-string"><span class="hljs-string">'../views/Home.vue'</span>)
}
]</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>这里有一个需要注意的就是 vue-router 匹配所有路由的写法已经改变了，不是旧版本的&nbsp;<code>*</code>&nbsp;，在新的版本里写法参考上面的示例代码</p>
<h4 class="heading" data-id="heading-20">获取当前路由信息</h4>
<pre><code class="hljs js copyable javascript"><span class="hljs-keyword"><span class="hljs-keyword">import</span> router <span class="hljs-keyword"><span class="hljs-keyword">from</span> <span class="hljs-string"><span class="hljs-string">'../router'</span>
<span class="hljs-keyword"><span class="hljs-keyword">export</span> <span class="hljs-keyword"><span class="hljs-keyword">default</span> {
setup () {
<span class="hljs-keyword"><span class="hljs-keyword">const</span> currentRoute = router.currentRoute.value
<span class="hljs-built_in"><span class="hljs-built_in">console</span>.log(currentRoute)
}
}</span></span></span></span></span></span></span></code></pre>
<p>引入的 router 为我们通过&nbsp;<code>createRouter()</code>&nbsp;方法创建的对象</p>
<pre><code class="hljs js copyable javascript"><span class="hljs-keyword"><span class="hljs-keyword">import</span> { createRouter, createWebHashHistory } <span class="hljs-keyword"><span class="hljs-keyword">from</span> <span class="hljs-string"><span class="hljs-string">'vue-router'</span>
<span class="hljs-keyword"><span class="hljs-keyword">const</span> router = createRouter({
<span class="hljs-attr"><span class="hljs-attr">history</span>: createWebHashHistory(),
routes
})</span></span></span></span></span></code></pre>
<p><code>routes</code>&nbsp;路由为我们定义的路由数组，跟旧版本的一样。</p>
<h3 class="heading" data-id="heading-21">样式 scoped</h3>
<p>适用版本：Version: 2.x, 3.x</p>
<p>旧版本写法</p>
<pre><code class="hljs css copyable"><span class="hljs-comment">/* 深度选择器 */</span>
<span class="hljs-comment">/*方式一：*/</span>
&gt;&gt;&gt; <span class="hljs-selector-class">.foo</span>{ }
<span class="hljs-comment">/*方式二：*/</span>
/<span class="hljs-selector-tag">deep</span>/ <span class="hljs-selector-class">.foo</span>{ }
<span class="hljs-comment">/*方式三*/</span>
<span class="hljs-selector-pseudo">::v-deep</span> <span class="hljs-selector-class">.foo</span>{ }</code></pre>
<p>新版本写法</p>
<pre><code class="hljs css copyable"><span class="hljs-comment"><span class="hljs-comment">/* 深度选择器 */</span>
<span class="hljs-selector-pseudo"><span class="hljs-selector-pseudo">::v-deep(.foo)</span> {}</span></span></code></pre>
<p>除了上面的深度选择器外，还有下面的两个，写法也差不多。</p>
<pre><code class="hljs css copyable"><span class="hljs-comment"><span class="hljs-comment">/* slot content 起作用 */</span>
<span class="hljs-selector-pseudo"><span class="hljs-selector-pseudo">::v-slotted(.foo)</span> {}
<span class="hljs-comment"><span class="hljs-comment">/* 全局 */</span>
<span class="hljs-selector-pseudo"><span class="hljs-selector-pseudo">::v-global(.foo)</span> {}</span></span></span></span></code></pre>
<h3 class="heading" data-id="heading-22">属性值修正</h3>
<p>适用版本：Version: 3.x</p>
<p>vue 本身会对元素的属性作相应的处理。在旧版本的 vue 中处理如下：</p>
<table>
<thead>
<tr>
<th>表达式</th>
<th>正常</th>
<th>最终处理成</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>:attr="null"</code></td>
<td>/</td>
<td><code>draggable="false"</code></td>
</tr>
<tr>
<td><code>:attr="undefined"</code></td>
<td>/</td>
<td>/</td>
</tr>
<tr>
<td><code>:attr="true"</code></td>
<td><code>foo="true"</code></td>
<td><code>draggable="true"</code></td>
</tr>
<tr>
<td><code>:attr="false"</code></td>
<td>/</td>
<td><code>draggable="false"</code></td>
</tr>
<tr>
<td><code>:attr="0"</code></td>
<td><code>foo="0"</code></td>
<td><code>draggable="true"</code></td>
</tr>
<tr>
<td><code>attr=""</code></td>
<td><code>foo=""</code></td>
<td><code>draggable="true"</code></td>
</tr>
<tr>
<td><code>attr="foo"</code></td>
<td><code>foo="foo"</code></td>
<td><code>draggable="true"</code></td>
</tr>
<tr>
<td><code>attr</code></td>
<td><code>foo=""</code></td>
<td><code>draggable="true"</code></td>
</tr>
</tbody>
</table>
<p>新版本处理方式：</p>
<table>
<thead>
<tr>
<th>表达式</th>
<th>正常</th>
<th>最终处理成</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>:attr="null"</code></td>
<td>/</td>
<td>/</td>
</tr>
<tr>
<td><code>:attr="undefined"</code></td>
<td>/</td>
<td>/</td>
</tr>
<tr>
<td><code>:attr="true"</code></td>
<td><code>foo="true"</code></td>
<td><code>draggable="true"</code></td>
</tr>
<tr>
<td><code>:attr="false"</code></td>
<td><code>foo="false"</code></td>
<td><code>draggable="false"</code></td>
</tr>
<tr>
<td><code>:attr="0"</code></td>
<td><code>foo="0"</code></td>
<td><code>draggable="0"</code></td>
</tr>
<tr>
<td><code>attr=""</code></td>
<td><code>foo=""</code></td>
<td><code>draggable=""</code></td>
</tr>
<tr>
<td><code>attr="foo"</code></td>
<td><code>foo="foo"</code></td>
<td><code>draggable="foo"</code></td>
</tr>
<tr>
<td><code>attr</code></td>
<td><code>foo=""</code></td>
<td><code>draggable=""</code></td>
</tr>
</tbody>
</table>
<p>在新版本中基本保持了原样，也就是我们给元素添加什么属性值，最好 vue 处理完后还是什么属性值。</p>
<h3 class="heading" data-id="heading-23">异步组件</h3>
<pre><code class="hljs js copyable javascript"><span class="hljs-keyword"><span class="hljs-keyword">import</span> { defineAsyncComponent } <span class="hljs-keyword"><span class="hljs-keyword">from</span> <span class="hljs-string"><span class="hljs-string">"vue"</span>
<span class="hljs-comment"><span class="hljs-comment">// simple usage</span>
<span class="hljs-keyword"><span class="hljs-keyword">const</span> AsyncFoo = defineAsyncComponent(<span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword"><span class="hljs-keyword">import</span>(<span class="hljs-string"><span class="hljs-string">"./Foo.vue"</span>))</span></span></span></span></span></span></span></span></span></code></pre>
<p>写法上与之前有些不一样。</p>
<h3 class="heading" data-id="heading-24">动态路由</h3>
<p>适用版本 Router 4</p>
<p>添加了几个方法</p>
<ol>
<li><code>router.addRoute(route: RouteRecord)</code>&nbsp;动态添加路由</li>
<li><code>router.removeRoute(name: string | symbol)</code>，动态删除路由</li>
<li><code>router.hasRoute(name: string | symbol): boolean</code>&nbsp;，判断路由是否存在</li>
<li><code>router.getRoutes(): RouteRecord[]</code>&nbsp;获取路由列表</li>
</ol>
<pre><code class="hljs js copyable javascript">router.addRoute({
<span class="hljs-attr"><span class="hljs-attr">path</span>: <span class="hljs-string"><span class="hljs-string">'/new-route'</span>,
<span class="hljs-attr"><span class="hljs-attr">name</span>: <span class="hljs-string"><span class="hljs-string">'NewRoute'</span>,
<span class="hljs-attr"><span class="hljs-attr">component</span>: NewRoute
})
<span class="hljs-comment"><span class="hljs-comment">// add to the children of an existing route</span>
router.addRoute(<span class="hljs-string"><span class="hljs-string">'ParentRoute'</span>, {
<span class="hljs-attr"><span class="hljs-attr">path</span>: <span class="hljs-string"><span class="hljs-string">'new-route'</span>,
<span class="hljs-attr"><span class="hljs-attr">name</span>: <span class="hljs-string"><span class="hljs-string">'NewRoute'</span>,
<span class="hljs-attr"><span class="hljs-attr">component</span>: NewRoute
})
router.removeRoute(<span class="hljs-string"><span class="hljs-string">'NewRoute'</span>)
<span class="hljs-comment"><span class="hljs-comment">// normalized version of the records added</span>
<span class="hljs-keyword"><span class="hljs-keyword">const</span> routeRecords = router.getRoutes()</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>详情可见：github.com/vuejs/rfcs/…</p>
<h3 class="heading" data-id="heading-25">emits-option</h3>
<pre><code class="hljs js copyable javascript"><span class="hljs-keyword"><span class="hljs-keyword">const</span> Foo = defineComponent({
<span class="hljs-attr"><span class="hljs-attr">emits</span>: {
<span class="hljs-attr"><span class="hljs-attr">submit</span>: <span class="hljs-function"><span class="hljs-function">(</span><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">payload: { email: string; password: string }</span>) =&gt;</span> {
<span class="hljs-comment"><span class="hljs-comment">// perform runtime validation</span>
}
},
<span class="hljs-attr"><span class="hljs-attr">methods</span>: {
onSubmit() {
<span class="hljs-keyword"><span class="hljs-keyword">this</span>.$emit(<span class="hljs-string"><span class="hljs-string">'submit'</span>, {
<span class="hljs-attr"><span class="hljs-attr">email</span>: <span class="hljs-string"><span class="hljs-string">'foo@bar.com'</span>,
<span class="hljs-attr"><span class="hljs-attr">password</span>: <span class="hljs-number"><span class="hljs-number">123</span> <span class="hljs-comment"><span class="hljs-comment">// Type error!</span>
})
<span class="hljs-keyword"><span class="hljs-keyword">this</span>.$emit(<span class="hljs-string"><span class="hljs-string">'non-declared-event'</span>) <span class="hljs-comment"><span class="hljs-comment">// Type error!</span>
}
}
})</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></code></pre>
<p>现在的&nbsp;<code>$emit()</code>&nbsp;方法在用法上没变，但需要额外多定义 emits 对象，但要注意的是现在 alpha 版本还不支持 TypeScript</p>
<h3 class="heading" data-id="heading-26">组件根元素数量</h3>
<p>vue 3 后组件不再限制 template 中根元素的个数（旧的版本之前是只能有一个根元素）。</p>
<h2 class="heading" data-id="heading-27">vue 3.x 中费弃</h2>
<ul>
<li>beforeCreate、created</li>
<li>filters</li>
<li>keycode</li>
<li>inline-template</li>
<li>data-object</li>
<li><img class="equation" src="https://juejin.im/equation?tex=on%2C" alt="on,">off 和 $once</li>
</ul>
<p>1.阅读完本文我相信你大概对 vue 3 有了一个基本的认识。虽然本文会不让你瞬间成为 vue 3.x 的驾驭者，但怎么说也让你含蓄地体验了一把 vue 3.x 的新特性。特别是 composition API 即使本文没有详细写出来，但通过补充的链接，你也能阅读到它的所有。我觉得 composition API 真的很棒。</p>
<p><em id="__mceDel">本文的文字及图片来源于网络加上自己的想法,仅供学习、交流使用,不具有任何商业用途,版权归原作者所有,如有问题请及时联系我们以作处理</em></p>
</div>
<div class="yarpp-related">
    

</div>

</div>`,
  authorId: 1,
  created: moment(),
};

export const todayPost: Post = {
  ...basePost,
  id: 1,
  title: "vue3.x新特性快速掌握",
};

export const thisWeek: Post = {
  ...basePost,
  id: 2,
  title: "记一次vue3.0技术分享会",
  html: `<div class="entry-content e-content" itemprop="description articleBody" style="height: auto !important;">
  
<h6>记录了组内技术分享会, 有同样需求的同学可以参考一下</h6>
<h6>分享全程下来时间大约1小时</h6>
<h4>一. 版本</h4>
<p>当前还处于 <code>beta</code>版本, 想要正式使用在项目里还需要一段的时间, 但是结构与api变化应该不大了.</p>
<pre><code class="hljs yaml"><span class="hljs-string">这里列出的并不全,</span> <span class="hljs-string">但是够用了</span>
<span class="hljs-number">1</span><span class="hljs-string">.</span> <span class="hljs-string">alpha</span> <span class="hljs-string">内测版本</span>
<span class="hljs-number">2</span><span class="hljs-string">.</span> <span class="hljs-string">beta</span>  <span class="hljs-string">公测版本</span>
<span class="hljs-number">3</span><span class="hljs-string">.</span> <span class="hljs-string">Gamma</span> <span class="hljs-string">正式发布的候选版本</span>
<span class="hljs-number">4</span><span class="hljs-string">.</span> <span class="hljs-string">Final</span> <span class="hljs-string">正式版</span>
<span class="hljs-number">5</span><span class="hljs-string">.</span> <span class="hljs-string">plus</span>  <span class="hljs-string">增强版</span>
<span class="hljs-number">6</span><span class="hljs-string">.</span> <span class="hljs-string">full</span>  <span class="hljs-string">完全版</span>
<span class="hljs-number">7</span><span class="hljs-string">.</span> <span class="hljs-string">Trial</span> <span class="hljs-string">试用版（一般有时间或者功能限制）</span>
</code></pre>
<h4>二. 介绍</h4>
<p><code>  1. 学一门新鲜的技术,就像练习王者荣耀新出的英雄一样, 探索他的好玩之处可以给开发者带来快乐, 使用新的好的技术会让工作更愉悦</code></p>
<p><code>2. 这个版本的vue 类似"我的世界", 全部都是一个个方块组成, 不要小看方块, 方块多了甚至可以组成圆形(量变引起质变), 新鲜的玩法才能激发我们的兴趣<br>
</code></p>
<h4>三. vue3.0的环境搭建</h4>
<h6>准备一套搭建好的环境防治到时候出现意外, 现场再按照步骤搭建一版, 每一步都不要落下能让大家更好的理解.</h6>
<p><code>  1. npm install -g @vue/cli  cli升级到4版本<br>
</code></p>
<p><code>2. 随便创建个项目, vue create next-test<br>
</code></p>
<p><code>3. 选择配置最好把router与vuex一起选上, 方便后续升级<br>
</code></p>
<p><code>4. vue add vue-next   cli提供的进化到下一版本的命令, 执行后自动将router, vuex 升级到alpha版.</code></p>
<h4>四. vue3.0重要的优化</h4>
<pre><code class="hljs yaml">  <span class="hljs-number">1</span><span class="hljs-string">.</span> <span class="hljs-string">模板编译速度的提升,</span> <span class="hljs-string">对静态数据的跳过处理.</span></code>
<code class="hljs yaml"><span class="hljs-number">2</span><span class="hljs-string">.</span> <span class="hljs-string">对数组的监控</span></code>
<code class="hljs yaml"><span class="hljs-number">3</span><span class="hljs-string">.</span> <span class="hljs-string">对ts有了很好的支持</span></code>
<code class="hljs css">4. 对2<span class="hljs-selector-class">.x</span>版本的完全兼容</code>
<code class="hljs less"><span class="hljs-selector-tag">5</span>. 可以有多个根节点 (也有bug, 比如外层开了<span class="hljs-attribute">display</span>:flex 那么里面会收到影响, 也就是说布局更灵活但也更要小心, 总之请对自己与他人的代码负责)</code>
<code class="hljs go"><span class="hljs-number">6.</span> 支持Source <span class="hljs-keyword">map</span>, 虽然没演示但是这点真的重要</code></pre>
<h4>五. vuex, router, vue 初始化写法的变化</h4>
<h6>vue:</h6>
<pre><code class="hljs typescript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">'./App.vue'</span>
<span class="hljs-keyword">import</span> router <span class="hljs-keyword">from</span> <span class="hljs-string">'./router'</span>
<span class="hljs-keyword">import</span> store <span class="hljs-keyword">from</span> <span class="hljs-string">'./store'</span>
<span class="hljs-comment">// 方法一. 创建实例变成了链式, 直接写下去感觉语义与结构有点模糊, 但是我们要理解vue这样做的良苦用心, 前端趋近于函数化.</span>
<span class="hljs-comment">// createApp(App).use(router).use(store).mount('#app')</span>
<span class="hljs-comment">// 方法二.</span>
<span class="hljs-keyword">const</span> app = createApp(App);
app.use(router);
app.use(store);
app.mount(<span class="hljs-string">'#app'</span>);</code></pre>
<h6>vuex:</h6>
<pre><code class="hljs typescript"><span class="hljs-keyword">import</span> { createStore } <span class="hljs-keyword">from</span> <span class="hljs-string">'vuex'</span>
<span class="hljs-comment">// 专门创建实例的一个方法</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createStore({
state: {
},
mutations: {
},
actions: {
},
modules: {
}
});
</code></pre>
<h6>router</h6>
<pre><code class="hljs typescript"><span class="hljs-keyword">import</span> { createRouter, createWebHistory } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-router'</span>;
<span class="hljs-keyword">import</span> Home <span class="hljs-keyword">from</span> <span class="hljs-string">'../views/Home.vue'</span>
<span class="hljs-keyword">const</span> routes = [
{
path: <span class="hljs-string">'/'</span>,
name: <span class="hljs-string">'Home'</span>,
component: Home
}
]
<span class="hljs-keyword">const</span> router = createRouter({
<span class="hljs-comment">// 专门创建history的函数</span>
history: createWebHistory(process.env.BASE_URL),
routes
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> router</code></pre>
<h4>六. 变量的定义</h4>
<p>1: ref</p>
<pre><code class="hljs javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">"vue"</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
<span class="hljs-comment">// 1: 这个版本基本逻辑都在setup里面完成了, 有人说把他当成2.x的data.</span>
setup() {
<span class="hljs-comment">// 2: 定义一个追踪的变量,也就是双向绑定.</span>
<span class="hljs-keyword">const</span> n = ref(<span class="hljs-number">1</span>); <span class="hljs-comment">// 生成的n是一个对象, 这样方便vue去监控它</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addN</span>(<span class="hljs-params"></span>) </span>{
n.value++; <span class="hljs-comment">// 注意这里要使用.value的形式, 因为n是对象↑, value才是他的值</span>
}
<span class="hljs-keyword">return</span> {
n,   <span class="hljs-comment">// 返回出去页面的template才可以使用它, {{n}} 不需要.value</span>
addN
}
}
}</code></pre>
<p>2: reactive</p>
<pre><code class="hljs javascript"><span class="hljs-keyword">import</span> { reactive, toRefs } <span class="hljs-keyword">from</span> <span class="hljs-string">"vue"</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
setup() {
<span class="hljs-comment">// 注意事项: reactive的对象不可以结构返回或导入, 会导致失去响应式</span>
<span class="hljs-keyword">const</span> obj = reactive({
<span class="hljs-attr">name</span>: <span class="hljs-string">"金毛"</span>,
<span class="hljs-attr">age</span>: <span class="hljs-number">4</span>
});
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addObj</span>(<span class="hljs-params"></span>) </span>{
obj.age++;
}
<span class="hljs-keyword">return</span> {
...obj, <span class="hljs-comment">// 这样写不好, 里面会失去响应式</span>
obj, <span class="hljs-comment">// 这样写那么外面就要都基于obj来调取, 类型{{obj.age}}</span>
...toRefs(obj) <span class="hljs-comment">// 必须是reactive生成的对象, 普通对象不可以, 他把每一项都拿出来包了一下, 我们可以这样用了 {{age}}, 放心咱们多深的obj也可以响应</span>
}
}
}</code></pre>
<h4>7. 之前的ref何去何从</h4>
<h6>这个老兄被别人抢了关键词, 也只能自己改改写法了</h6>
<pre><code class="hljs xml">  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"content"</span>&gt;</span>第一步, 在dom上面定义, 他会有一个回调<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>v-for 出来的ref<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>可以写为表达式的形式, 可以推导出vue是如何实现的<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>vue2.x的时候v-for不用这么麻烦, 直接写上去会被组装成数组<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">:ref</span>=<span class="hljs-string">"el =&gt; { items[index] = el }"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(item,index) in 6"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></code></pre>
<pre><code class="hljs python"><span class="hljs-keyword">import</span> { ref, onMounted, onBeforeUpdate } <span class="hljs-keyword">from</span> <span class="hljs-string">"vue"</span>;</code></pre>
<pre><code class="hljs typescript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
setup() {
<span class="hljs-comment">// 2: 定义一个变量接收dom, 名字无所谓, 但是与dom统一的话会有很好的语义化</span>
<span class="hljs-keyword">const</span> content = ref(<span class="hljs-literal">null</span>);
<span class="hljs-keyword">const</span> items = ref([]);
<span class="hljs-comment">// 4: 在生命周期下, 这个值已经完成了变化, 所以当然第一时间就拿到</span>
onMounted(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-built_in">console</span>.log(content.value);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"li标签组"</span>, items.value);
});
<span class="hljs-comment">// 5: 确保在每次变更之前重置引用</span>
onBeforeUpdate(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
items.value = [];
});
<span class="hljs-comment">// 3: 返出去的名称要与dom的ref相同, 这样就可以接收到dom的回调</span>
<span class="hljs-keyword">return</span> {
content,
items
};
}
};</code></pre>
<h4>8. 生命周期</h4>
<pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"add"</span>&gt;</span>点击增加, 触发updata<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{obj.count}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
2.x与 3.0的对照
beforeCreate -&gt; 使用 setup()
created -&gt; 使用 setup()
beforeMount -&gt; onBeforeMount
mounted -&gt; onMounted
beforeUpdate -&gt; onBeforeUpdate
updated -&gt; onUpdated
beforeDestroy -&gt; onBeforeUnmount
destroyed -&gt; onUnmounted
errorCaptured -&gt; onErrorCaptured
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-comment">//这些生命周期注册方法只能用在 setup 钩子中</span>
<span class="hljs-keyword">import</span> { onMounted, onUpdated, onBeforeUnmount, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">"vue"</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
<span class="hljs-comment">// 1: setup显得冗长, 可以自己动手做一些插件来优化</span>
<span class="hljs-comment">// 2: 本身更加明确意图</span>
<span class="hljs-comment">// 3: 需要树立工程师的正确代码意识</span>
<span class="hljs-comment">// 4: 能力不足可能会写出更差的代码</span>
<span class="hljs-comment">// 作者说: 提升上界的收益远远大于降低下界的损失。值得深思, 前端需要提高门槛</span>
<span class="hljs-comment">// 5: 调用时机: 创建组件实例，然后初始化 props ，紧接着就调用setup 函数。从生命周期钩子的视角来看，它会在 beforeCreate 钩子之前被调用</span>
<span class="hljs-comment">// 6: 这些生命周期钩子注册函数只能在 setup() 期间同步使用， 因为它们依赖于内部的全局状态来定位当前组件实例（正在调用 setup() 的组件实例）, 不在当前组件下调用这些函数会抛出一个错误。</span>
<span class="hljs-comment">// 7: 原则上生命周期里面不会放具体的逻辑,哪怕只有一句赋值一个三元都不可放, 这也正好符合当前的工程模式</span>
<span class="hljs-comment">// 讨论: 有多少种方式, 可以判断出某个函数 当前处于哪个函数?</span>
<span class="hljs-comment">//       比如有多层嵌套的组件是否有影响</span>
setup() {
onMounted(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"is mounted!"</span>);
});
onUpdated(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"is onUpdated!"</span>);
});
onBeforeUnmount(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"is onBeforeUnmount!"</span>);
});
<span class="hljs-keyword">const</span> obj = reactive({
<span class="hljs-attr">count</span>: <span class="hljs-number">1</span>
});
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params"></span>) </span>{
obj.count++;
}
<span class="hljs-keyword">return</span> {
obj,
add
};
}
};
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
<h4>9. 路由</h4>
<pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
{{id}}
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { getCurrentInstance, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
setup(){
<span class="hljs-keyword">const</span> { ctx } = getCurrentInstance()
<span class="hljs-comment">// 1. 这样也是为了去掉this</span>
<span class="hljs-comment">// 2. 方便类型推导</span>
<span class="hljs-built_in">console</span>.log(ctx.$router); <span class="hljs-comment">// push等方法</span>
<span class="hljs-built_in">console</span>.log(ctx.$router.currentRoute.value); <span class="hljs-comment">// 路由实例</span>
<span class="hljs-comment">// 这个其实没有必要变成ref因为这个值没必要动态</span>
<span class="hljs-comment">// 但是他太长了, 这个真的不能忍</span>
<span class="hljs-keyword">const</span> id = ref(ctx.$router.currentRoute.value.query.id)
<span class="hljs-comment">// 4: 页面拦截器</span>
ctx.$router.beforeEach(<span class="hljs-function">(<span class="hljs-params">to, <span class="hljs-keyword">from</span>,next</span>)=&gt;</span>{
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'路由的生命周期'</span>)
next()
})
<span class="hljs-keyword">return</span> {
id
}
}
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
<h4>10. vuex</h4>
<pre><code class="hljs typescript"><span class="hljs-keyword">import</span> { createStore } <span class="hljs-keyword">from</span> <span class="hljs-string">'vuex'</span>
<span class="hljs-comment">// 难道前端趋势只有函数这一种吗</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createStore({
state: {
name:<span class="hljs-string">'牛逼, 你拿到我了'</span>,
age: <span class="hljs-number">24</span>,
a:<span class="hljs-string">'白'</span>,
b:<span class="hljs-string">'黑'</span>
},
mutations: {
updateName(state, n){
state.name += n
}
},
actions: {
deferName(store) {
setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
<span class="hljs-comment">// 必须只有commit可以修改值, 这个设定我比较反对, 可以讨论</span>
<span class="hljs-comment">// vuex本身结构就很拖沓, 定义域使用个人都不喜欢</span>
store.state.name = <span class="hljs-string">'牛逼, 你改回来了'</span>
},<span class="hljs-number">1000</span>)
}
},
getters: {
fullName(state){ <span class="hljs-keyword">return</span> <span class="hljs-string"></span> }
},
modules: {
}
});</code></pre>
<pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{name}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"updateName('+')"</span>&gt;</span>点击改变名字<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"deferName('+')"</span>&gt;</span>改回来<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{fullName}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { useStore } <span class="hljs-keyword">from</span> <span class="hljs-string">"vuex"</span>;
<span class="hljs-keyword">import</span> { computed } <span class="hljs-keyword">from</span> <span class="hljs-string">"vue"</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
setup() {
<span class="hljs-keyword">const</span> store = useStore();
<span class="hljs-comment">// 1: 单个引入</span>
<span class="hljs-keyword">const</span> name = computed(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> store.state.name);
<span class="hljs-comment">// 2: 引入整个state</span>
<span class="hljs-keyword">const</span> state = computed(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> store.state);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"vuex的实例"</span>, state.value); <span class="hljs-comment">// 别忘了.value</span>
<span class="hljs-comment">// 3: 方法其实就直接从本体上取下来了</span>
<span class="hljs-keyword">const</span> updateName = <span class="hljs-function"><span class="hljs-params">newName</span> =&gt;</span> store.commit(<span class="hljs-string">"updateName"</span>, newName);
<span class="hljs-comment">// 4: action一个意思</span>
<span class="hljs-keyword">const</span> deferName = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> store.dispatch(<span class="hljs-string">"deferName"</span>);
<span class="hljs-comment">// 5: getter 没变化</span>
<span class="hljs-keyword">const</span> fullName = computed(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> store.getters.fullName);
<span class="hljs-keyword">return</span> {
name,
fullName,
deferName,
updateName,
};
}
};
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
<h4>11. composition(这个可能是最重要的改革了)</h4>
<h6>前端算是面向函数编程, 各种规范也都趋近于函数化</h6>
<h6>composition使得前端工程师的编程规范, 更接近于原生js, 三十年河东三十年河西, 几年前前端需要模板来进行’规则化’, 现在前端又想要更多的自由.</h6>
<h6>开发工程而不是插件的话, 还是不要使用mixin了, 这东西无法追溯来源, 搞得语义太差了, 我们要对它说’no’.</h6>
<h6>举例子的变量命名有点low, 抱歉~~</h6>
<pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"addN1"</span>&gt;</span>上面的增加<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>---&gt; {{n1}}
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"addN2"</span>&gt;</span>下面的增加<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>---&gt; {{n2}}
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"addN210"</span>&gt;</span>每次n2+10<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>组件里面也可以如此引用, 这就可以代替mixin一部分功能了<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"addN3"</span>&gt;</span>n3的增加<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>---&gt; {{n3.value}}
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">com</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">com</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref} <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">import</span> n3Change <span class="hljs-keyword">from</span> <span class="hljs-string">'./mixin'</span>;
<span class="hljs-keyword">import</span> com <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/composition.vue'</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
<span class="hljs-attr">components</span>:{
com
},
setup(){
<span class="hljs-comment">// 1: setup只是一个整合函数</span>
<span class="hljs-comment">// 2: 甚至整个函数里面可能会没有具体的逻辑</span>
<span class="hljs-comment">// 3: 以此推断, ref等方式定义的变量, 会自动识别在哪个setup内部, 从而达到逻辑的复用</span>
<span class="hljs-comment">// 4: 由此方法可以很好的代替mixin了</span>
<span class="hljs-comment">// 5: 当然, 这里也可以截获数据,来做一些事情</span>
<span class="hljs-keyword">const</span> {n2, addN2} = n2Change();
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addN210</span>(<span class="hljs-params"></span>)</span>{
n2.value += <span class="hljs-number">10</span>
}
<span class="hljs-keyword">return</span> {
...n1Change(),
...n3Change(),
n2,
addN2,
addN210
}
}
}
<span class="hljs-comment">// 甚至已经可以写在任何地方了, 响应式自由度大大提高</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">n1Change</span>(<span class="hljs-params"></span>)</span>{
<span class="hljs-keyword">const</span> n1 = ref(<span class="hljs-number">1</span>);
<span class="hljs-keyword">let</span> addN1 = <span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
n1.value++
}
<span class="hljs-keyword">return</span> {
n1,
addN1
}
}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">n2Change</span>(<span class="hljs-params"></span>)</span>{
<span class="hljs-keyword">const</span> n2 = ref(<span class="hljs-number">1</span>);
<span class="hljs-keyword">let</span> addN2 = <span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
n2.value++
}
<span class="hljs-keyword">return</span> {
n2,
addN2
}
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
<p>写在任何地方, 然后导入就成了mixin</p>
<pre><code class="hljs typescript">
<span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> ()=&gt; {
<span class="hljs-keyword">const</span> n3 = reactive({
name: <span class="hljs-string">'mixin'</span>,
value: <span class="hljs-number">1</span>
})
<span class="hljs-keyword">const</span> addN3=<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
n3.value++
}
<span class="hljs-keyword">return</span> {
n3,
addN3
}
}</code></pre>
<h4>12. 插件的新思路</h4>
<pre><code class="hljs javascript"><span class="hljs-comment">// 开发插件并不一定要挂载到vue的原型上</span>
<span class="hljs-comment">// 导致vue原型臃肿, 命名冲突等等(比如两个ui都叫 message)</span>
<span class="hljs-comment">// 原理就是 provide 和 inject, 依赖注入.</span>
<span class="hljs-keyword">import</span> {provide, inject} <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-comment">// 这里使用symbol就不会造成变量名的冲突了, 这个命名权交给用户才是真正合理的架构设计</span>
<span class="hljs-keyword">const</span> StoreSymbol = <span class="hljs-built_in">Symbol</span>()
<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">provideString</span>(<span class="hljs-params">store</span>)</span>{
provide(StoreSymbol, store)
}
<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">useString</span>(<span class="hljs-params"></span>) </span>{
<span class="hljs-keyword">const</span> store = inject(StoreSymbol)
<span class="hljs-keyword">return</span> store
}</code></pre>
<p>app.vue页面统一的初始化一下</p>
<pre><code class="hljs less"><span class="hljs-selector-tag">export</span> <span class="hljs-selector-tag">default</span> {
<span class="hljs-selector-tag">setup</span>(){
<span class="hljs-comment">// 一些初始化'配置/操作'可以在这里进行</span>
<span class="hljs-comment">// 需要放在对应的根节点, 因为依赖provide 和 inject</span>
<span class="hljs-selector-tag">provideString</span>({
<span class="hljs-attribute">a</span>:<span class="hljs-string">'可能我是axios'</span>,
<span class="hljs-attribute">b</span>:<span class="hljs-string">'可能我是一个message弹框'</span>
})
}
}</code></pre>
<p>在需要使用的组件里面接收</p>
<pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
插件的演示
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { useString } <span class="hljs-keyword">from</span> <span class="hljs-string">'../插件'</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
setup(){
<span class="hljs-keyword">const</span> store = useString();
<span class="hljs-comment">// 不光是拿到值, 可以由app定义什么可以被拿到</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'拿到值了'</span>,store)
}
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
<h4>13. 新观察者</h4>
<pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"addn1"</span>&gt;</span>n1增加--{{n1}}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"addn2"</span>&gt;</span>n2增加--{{n2}}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"addn3"</span>&gt;</span>n3增加--{{n3}}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { watch, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">"vue"</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
setup() {
<span class="hljs-keyword">const</span> n1 = ref(<span class="hljs-number">1</span>);
<span class="hljs-keyword">const</span> n2 = ref(<span class="hljs-number">1</span>);
<span class="hljs-keyword">const</span> n3 = ref(<span class="hljs-number">1</span>);
<span class="hljs-comment">// 1: 监听一个</span>
<span class="hljs-comment">// 第一个参数是函数返回值, 当然也可以 直接写n1</span>
<span class="hljs-comment">// 如果监听的是一个对象里面的某个属性, 那就需要这种函数的写法了, 比2.x的字符串写法高明很多</span>
watch(
<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> n1.value,
(val, oldVal) =&gt; {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"新值"</span>, val);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"老值"</span>, oldVal);
}
);
<span class="hljs-comment">// 2: 监听多个</span>
<span class="hljs-comment">// 数组的形式定义多个, 这就出现问题了吧, 如果我观察的对象就是个数组, 并且每一项都是一个返回值的函数, 岂不是会被他误认为是多监控的结构, 苦恼</span>
watch(
[<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> n2.value, ()=&gt;n3.value],
([val, val3],[val2, val4]) =&gt; {
<span class="hljs-comment">// val 是 n2的新值   val2是 n2的老值</span>
<span class="hljs-comment">// val3 是 n3的新值  val4是 n3的老值</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"新值 与 老值 是这种对应关系"</span>, val, val2);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"新值 与 老值 是这种对应关系"</span>, val3, val4);
}
);
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addn1</span>(<span class="hljs-params"></span>) </span>{
n1.value++;
}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addn2</span>(<span class="hljs-params"></span>) </span>{
n2.value++;
}
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addn3</span>(<span class="hljs-params"></span>) </span>{
n3.value++;
}
<span class="hljs-keyword">return</span> {
addn1,
addn2,
addn3,
n1,
n2,
n3
};
}
};
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
<h4>13. 新计算属性</h4>
<h6>别看watchEffect带个’watch’,但是他的功能可以归为计算属性里面</h6>
<pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"addCount"</span>&gt;</span>点击计算<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"setCount(1)"</span>&gt;</span>点击出发set<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>count--{{count}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>count2--{{count2}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>count3--{{count3}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-comment">// 弄得类似react了</span>
<span class="hljs-keyword">import</span> { computed, ref, watchEffect } <span class="hljs-keyword">from</span> <span class="hljs-string">"vue"</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
setup() {
<span class="hljs-keyword">const</span> count = ref(<span class="hljs-number">1</span>);
<span class="hljs-comment">// 1. 默认的定义方式</span>
<span class="hljs-keyword">const</span> count2 = computed(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> count.value * <span class="hljs-number">2</span>);
<span class="hljs-built_in">console</span>.log(count2.value); <span class="hljs-comment">// 也要value因为可能是简单类型</span>
<span class="hljs-comment">// 2. getter与setter当然可以定义</span>
<span class="hljs-keyword">const</span> count3 = computed({
<span class="hljs-attr">get</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> count.value * <span class="hljs-number">3</span>,
<span class="hljs-attr">set</span>: <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {
<span class="hljs-comment">// 这里重置了count</span>
count.value = val;
}
});
<span class="hljs-comment">// 3. watchEffect 更像是计算函数</span>
<span class="hljs-comment">// 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数</span>
<span class="hljs-comment">// 侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止。</span>
<span class="hljs-comment">// Vue 的响应式系统会缓存副作用函数，并异步地刷新它, 比如同时改变了count与conut4此时watchEffect只是执行一次</span>
<span class="hljs-comment">// 初始化运行是在组件 mounted 之前执行的。因此，如果你希望在编写副作用函数时访问 DOM（或模板 ref），请在 onMounted 钩子中进行</span>
<span class="hljs-comment">// 并不是返回值, 而是监听里面所有的值, 任何有变化都会重新执行, 他应该可以玩出点东西。</span>
<span class="hljs-keyword">const</span> count4 = ref(<span class="hljs-number">1</span>);
<span class="hljs-keyword">const</span> stop = watchEffect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-keyword">if</span> (count4.value) {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"作为判断条件也可以根据count4的变化而重新执行"</span>);
}
<span class="hljs-built_in">console</span>.log(count.value);
});
setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
stop(); <span class="hljs-comment">// 停止监听</span>
}, <span class="hljs-number">10000</span>);
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addCount</span>(<span class="hljs-params"></span>) </span>{
count.value++;
setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
count4.value++;
}, <span class="hljs-number">1000</span>);
}
<span class="hljs-comment">// 触发setter</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setCount</span>(<span class="hljs-params"></span>) </span>{
count3.value = <span class="hljs-number">2</span>;
}
<span class="hljs-keyword">return</span> {
count,
count2,
addCount,
count3,
setCount
};
}
};
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
<h4>14. customRef防抖</h4>
<h6>当然这里说的’防抖’不是重点, 重点是这种代码的思维</h6>
<pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"text"</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { customRef, onUnmounted } <span class="hljs-keyword">from</span> <span class="hljs-string">"vue"</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
setup() {
<span class="hljs-keyword">let</span> timeout = <span class="hljs-literal">null</span>; <span class="hljs-comment">// 并不需要响应式</span>
<span class="hljs-keyword">const</span> text = useDebouncedRef(<span class="hljs-string">"hello"</span>, (time) =&gt; {
<span class="hljs-comment">// 毕竟是延时的不用担心获取不到这个值</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"延时执行回调"</span>, text.value);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'时间实例'</span>, time)
timeout = time;
});
<span class="hljs-comment">// 好习惯也是成为合格工程师的必要条件</span>
onUnmounted(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
clearTimeout(timeout);
})
<span class="hljs-keyword">return</span> {
text
};
}
};
<span class="hljs-comment">// 并不用纯粹的js编写, 可以利用customRef来监控这个值的一举一动</span>
<span class="hljs-comment">// 写法一般, 但是思路又多了一条, 感谢</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">useDebouncedRef</span>(<span class="hljs-params">value, callback, delay = <span class="hljs-number">200</span></span>) </span>{
<span class="hljs-keyword">let</span> timeout;
<span class="hljs-comment">// 两个参数分别是用于追踪的 track 与用于触发响应的 trigger</span>
<span class="hljs-comment">// 这两个参数对 值的追踪 在当前并没有用,比如watchEffect的出发机制</span>
<span class="hljs-comment">// 不调用这两个值没问题, 但是如果写成插件的话还是要调用的, 因为别人没准在追踪这个值,</span>
<span class="hljs-comment">// 注意:  这个函数不可以有太大的delay, 如果超过500的话就需要考虑在组件销毁时候的清除定时器, 反而逻辑加深了, 此时我们可以每次把演示器的实例拿到</span>
<span class="hljs-keyword">return</span> customRef(<span class="hljs-function">(<span class="hljs-params">track,trigger</span>) =&gt;</span> {
<span class="hljs-keyword">return</span> {
get() {
track()
<span class="hljs-keyword">return</span> value;
},
set(newValue) {
clearTimeout(timeout);
<span class="hljs-comment">// callback接受的太晚了, 可以在这里用另一个函数或对象接收</span>
timeout = setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
value = newValue;
trigger()
callback(timeout);
}, delay);
}
};
});
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
<h4>15. 组件与注入</h4>
<p>父级</p>
<pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
组件:
<span class="hljs-tag">&lt;<span class="hljs-name">zj</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">"type"</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">"wancheng"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">zj</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> zj <span class="hljs-keyword">from</span> <span class="hljs-string">"../components/子组件.vue"</span>;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
<span class="hljs-keyword">import</span> { provide } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
<span class="hljs-attr">components</span>: {
zj
},
setup() {
provide(<span class="hljs-string">'name'</span>,<span class="hljs-string">'向下传值'</span>); <span class="hljs-comment">// 基础值</span>
provide(<span class="hljs-string">'name2'</span>, ref(<span class="hljs-string">'向下传值'</span>)); <span class="hljs-comment">// 监控值</span>
<span class="hljs-keyword">const</span> type = ref(<span class="hljs-string">'大多数'</span>);
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">wancheng</span>(<span class="hljs-params">msg</span>)</span>{
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'子组件--&gt;'</span>,msg)
setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
type.value = <span class="hljs-string">'xxxxxxx'</span>
},<span class="hljs-number">2000</span>)
}
<span class="hljs-keyword">return</span> {
type,
wancheng
}
}
};
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
<p>子组件</p>
<pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>props的属性不用setup去return --- {{type}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { inject, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
<span class="hljs-comment">// 为了让 TypeScript 正确的推导类型，我们必须使用 createComponent 来定义组件:</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
<span class="hljs-attr">props</span>: {
<span class="hljs-attr">type</span>: <span class="hljs-built_in">String</span>
},
<span class="hljs-comment">// 1: props也是不可以解构的, 会失去响应式</span>
<span class="hljs-comment">// 2: context是上下文, 我们可以获取到slots emit 等方法</span>
<span class="hljs-comment">// 3: props, context 分开也是为了ts更明确的类型推导</span>
<span class="hljs-comment">// setup({type}){</span>
setup(props, context) {
<span class="hljs-comment">// 1: props</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"props"</span>, props.type);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"上下文"</span>, context);
context.emit(<span class="hljs-string">'ok'</span>,<span class="hljs-string">'传递完成'</span>)
<span class="hljs-comment">// 2: 注入</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'inject'</span>,inject(<span class="hljs-string">'name'</span>));
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'inject'</span>,inject(<span class="hljs-string">'xxxx'</span>,<span class="hljs-string">'我是默认值'</span>))
inject(<span class="hljs-string">'name1'</span>, ref(<span class="hljs-string">'默认值'</span>)) <span class="hljs-comment">// 接收方也可以这样</span>
}
};
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
<h4>16. 总结</h4>
<p>每次看到新技术都会感觉挺好玩的, 一成不变的生活会太无趣了, 在某些方面讲vue失去了一些本来的优势, 但是人家可以兼容vue2.x那就没的说了, 作为分享会的稿子的话时间差不多一个小时, 最好每个点都现场手敲, 光让大家看已经写好的代码会走神的, 我在学习视频的时候最不喜欢的就是老师说”这个我就不演示了”.<br>
这次就这么多, 希望和你一起进步.</p>
<div class="yarpp-related">
</div>
</div>
  `,
  created: moment().subtract(2, "days"),
};

export const thisMonth: Post = {
  ...basePost,
  id: 3,
  title: "Vue3核心API",
  html: `<div id="content_views" class="markdown_views prism-atom-one-light">
  <!-- flowchart 箭头图标 勿删 -->
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
  </svg>
                          <p><img src="https://imgconvert.csdnimg.cn/aHR0cDovL3dlaXhpbi1zdG9yYWdlLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vMjAyMDA1L3Z1ZS1qcy10dXRvcmlhbC9iYW5uZXIucG5n?x-oss-process=image/format,png" alt=""><br>
Vue 3尚未正式发布，但是维护者已经发布了Beta版本，供我们的参与者尝试并提供反馈。</p>
<p>如果你想知道Vue 3的主要功能和主要变化是什么，那么我将在这篇文章中重点介绍一下，告诉你使用Vue 3 beta 9创建一个简单的应用程序。</p>
<p>我将介绍尽可能多的新内容，包括fragments，teleport，Composition API以及其他一些晦涩的更改。我将尽力解释该功能或更改的原理。</p>
<p><strong>目录</strong></p>
<p></p><div class="toc"><h3><a name="t0"></a><a name="t0"></a>文章目录</h3><ul><ul><li><a href="#_12" rel="nofollow" target="_self">我们将建立什么</a></li><li><a href="#Vue_3setup_20" rel="nofollow" target="_self">Vue 3安装和setup</a></li><li><a href="#Vue_3_app_43" rel="nofollow" target="_self">创建一个新的Vue 3 app</a></li><ul><li><a href="#_63" rel="nofollow" target="_self">变化的原因</a></li></ul><li><a href="#state_83" rel="nofollow" target="_self">添加state属性</a></li><ul><li><a href="#_111" rel="nofollow" target="_self">变化的原因</a></li></ul><li><a href="#_150" rel="nofollow" target="_self">使用一个根组件</a></li><li><a href="#_236" rel="nofollow" target="_self">多根模板</a></li><li><a href="#Composition_API_266" rel="nofollow" target="_self">使用Composition API进行重构</a></li><ul><li><a href="#setup__301" rel="nofollow" target="_self">setup 方法</a></li><li><a href="#_309" rel="nofollow" target="_self">变化的原因</a></li></ul><li><a href="#Teleporting_content_315" rel="nofollow" target="_self">Teleporting content</a></li><li><a href="#Emitting__event_363" rel="nofollow" target="_self">Emitting 和 event</a></li><ul><li><a href="#_408" rel="nofollow" target="_self">变化的原因</a></li></ul><li><a href="#_416" rel="nofollow" target="_self">样式插槽内容</a></li><li><a href="#_452" rel="nofollow" target="_self">其他改变</a></li></ul></ul></div><p></p>
<hr>
<h2><a name="t1"></a><a name="t1"></a><a id="_12"></a>我们将建立什么</h2>
<p>我们将构建一个带有模式窗口功能的简单应用。我之所以选择它，是因为它可以方便地展示Vue 3的许多变化。</p>
<p>这是该应用在打开和关闭状态下的外观，因此你可以在脑海中描绘出我们正在做什么：</p>
<p><img src="https://imgconvert.csdnimg.cn/aHR0cDovL3dlaXhpbi1zdG9yYWdlLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vMjAyMDA1L3Z1ZS1qcy10dXRvcmlhbC8xLnBuZw?x-oss-process=image/format,png" alt=""></p>
<h2><a name="t2"></a><a name="t2"></a><a id="Vue_3setup_20"></a>Vue 3安装和setup</h2>
<p>与其直接安装Vue 3，不如克隆一个项目 <code>vue-next-webpack-preview</code>，这将为我们提供一个包括Vue 3在内的最小的Webpack设置。</p>
<pre class="prettyprint"><code class="prism language-bash has-numbering" onclick="mdcp.signin(event)" style="position: unset;">$ <span class="token function">git</span> clone https://github.com/vuejs/vue-next-webpack-preview.git vue3-experiment
$ <span class="token function">cd</span> vue3-experiment
$ <span class="token function">npm</span> i
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li></ul></pre>
<p>一旦克隆好了，安装好了NPM模块，我们需要做的就是删除样板文件，然后创建一个新的 <code>main.js</code> 文件，这样我们就可以从头开始创建我们的Vue 3 app了。</p>
<pre class="prettyprint"><code class="prism language-bash has-numbering" onclick="mdcp.signin(event)" style="position: unset;">$ <span class="token function">rm</span> -rf src/*
$ <span class="token function">touch</span> src/main.js
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li></ul></pre>
<p>现在，我们将运行开发服务器：</p>
<pre class="prettyprint"><code class="prism language-bash has-numbering" onclick="mdcp.signin(event)" style="position: unset;">$ <span class="token function">npm</span> run dev
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li></ul></pre>
<h2><a name="t3"></a><a name="t3"></a><a id="Vue_3_app_43"></a>创建一个新的Vue 3 app</h2>
<p>我们启动一个新的Vue应用程序的方式改变了，我们现在需要导入新的 <code>createApp</code> 方法，而不是使用新的 <code>Vue()</code>。</p>
<p>我们调用这个方法，传递我们的Vue实例定义对象，并将返回对象分配给一个变量 <code>app</code>。</p>
<p>接下来，我们将在 <code>app</code> 上调用 <code>mount</code> 方法，并传递一个CSS选择器来指示我们的mount元素，就像在Vue 2中使用 <code>$mount</code> 实例方法一样。</p>
<pre class="prettyprint"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token comment">// src/main.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// 根实例定义</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li></ul></pre>
<h3><a name="t4"></a><a name="t4"></a><a id="_63"></a>变化的原因</h3>
<p>与旧的API一样，我们添加的任何全局配置（plugins，mixins，原型属性等）都将永久更改全局状态。例如：</p>
<pre class="prettyprint"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token comment">// src/main.js</span>

<span class="token comment">// 影响两个实例</span>
Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> app1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> el<span class="token punctuation">:</span> <span class="token string">'#app-1'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> el<span class="token punctuation">:</span> <span class="token string">'#app-2'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li></ul></pre>
<p>在单元测试中，这确实是一个问题，因为要确保将每个测试都与上一个测试隔离是很棘手的。</p>
<p>在新的API下，调用 <code>createApp</code> 将返回一个新的app实例，该实例不会被应用于其他实例的任何全局配置污染。</p>
<blockquote>
<p>了解更多：<a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0009-global-api-change.md">Global API change RFC</a>。</p>
</blockquote>
<h2><a name="t5"></a><a name="t5"></a><a id="state_83"></a>添加state属性</h2>
<p>我们的模态窗口可以处于两种状态之一——打开或关闭。让我们用一个布尔状态属性 <code>modalOpen</code> 来管理它，我们将给它一个初始值 <code>false</code>。</p>
<p>在Vue 2下，我们可以通过在我们的应用实例上创建一个 <code>data</code> 属性并将一个对象分配给该对象来声明 <code>modalOpen</code> 属性，例如：</p>
<pre class="prettyprint"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token comment">// src/main.js</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
data<span class="token punctuation">:</span> <span class="token punctuation">{</span>
modalOpen<span class="token punctuation">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li></ul></pre>
<p>不再允许这样做。相反，必须为数据分配一个返回状态对象的工厂函数。</p>
<pre class="prettyprint"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token comment">// src/main.js</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
data<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
modalOpen<span class="token punctuation">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li></ul></pre>
<h3><a name="t6"></a><a name="t6"></a><a id="_111"></a>变化的原因</h3>
<p>使用对象而不是工厂函数来存储数据的优点是，首先，它在语法上更简单；其次，你可以在多个根实例之间共享顶级状态，例如：</p>
<pre class="prettyprint"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token comment">// src/main.js</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
sharedVal<span class="token punctuation">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> state <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> state <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 影响两个实例</span>
app1<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>sharedVal <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li><li style="color: rgb(153, 153, 153);">10</li><li style="color: rgb(153, 153, 153);">11</li></ul></pre>
<p>这种用例很少，可以使用。因为有两种类型的声明是不适合初学者的，所以决定删除这个特性。</p>
<blockquote>
<p>了解更多：<a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0019-remove-data-object-declaration.md">Data object declaration removed RFC</a></p>
</blockquote>
<p>在继续之前，我们还添加一个方法来切换 <code>modalOpen</code> 值。这与Vue 2没什么不同。</p>
<pre class="prettyprint"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token comment">// src/main.js</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
data<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
modalOpen<span class="token punctuation">:</span> <span class="token boolean">true</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>
<span class="token function">toggleModalState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>modalOpen <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>modalOpen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li><li style="color: rgb(153, 153, 153);">10</li><li style="color: rgb(153, 153, 153);">11</li><li style="color: rgb(153, 153, 153);">12</li></ul></pre>
<h2><a name="t7"></a><a name="t7"></a><a id="_150"></a>使用一个根组件</h2>
<p>如果你现在进入浏览器并检查控制台，则会看到警告“Component is missing render function”，因为我们尚未为根实例定义模板。</p>
<p>Vue 2的最佳实践是为根实例创建一个最小的模板，并创建一个app组件，其中将声明主app标记。</p>
<p>让我们在这里也这样做。</p>
<pre class="prettyprint"><code class="prism language-bash has-numbering" onclick="mdcp.signin(event)" style="position: unset;">$ <span class="token function">touch</span> src/App.vue
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li></ul></pre>
<p>现在我们可以获取根实例来渲染该组件。区别在于，对于Vue 2，我们通常会使用render函数来执行此操作：</p>
<pre class="prettyprint"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token comment">// src/main.js</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token operator">...</span>
render<span class="token punctuation">:</span> h <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li><li style="color: rgb(153, 153, 153);">10</li></ul></pre>
<p>我们仍然可以做到这一点，但是Vue 3有一个更简单的方法——使 <code>App</code> 成为根组件。为此，我们可以删除根实例定义，而是传递 <code>App</code> 组件。</p>
<pre class="prettyprint"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token comment">// src/main.js</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li></ul></pre>
<p>这意味着 <code>App</code> 组件不仅由根实例渲染，而且是根实例。</p>
<p>在此过程中，我们通过删除 <code>app</code> 变量来简化语法：</p>
<pre class="prettyprint"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token comment">// src/main.js</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li></ul></pre>
<p>现在移至根组件，让我们向该组件重新添加状态和方法：</p>
<pre class="prettyprint"><code class="prism language-html has-numbering" onclick="mdcp.signin(event)" style="position: unset;">// src/App.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
data<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
modalOpen<span class="token punctuation">:</span> <span class="token boolean">true</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>
<span class="token function">toggleModalState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>modalOpen <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>modalOpen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li><li style="color: rgb(153, 153, 153);">10</li><li style="color: rgb(153, 153, 153);">11</li><li style="color: rgb(153, 153, 153);">12</li><li style="color: rgb(153, 153, 153);">13</li><li style="color: rgb(153, 153, 153);">14</li></ul></pre>
<p>我们还为模态功能创建一个新组件：</p>
<pre class="prettyprint"><code class="prism language-bash has-numbering" onclick="mdcp.signin(event)" style="position: unset;">$ <span class="token function">touch</span> src/Modal.vue
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li></ul></pre>
<p>现在，我们将提供一个最小的模板，其中包括内容插槽。这确保了我们的模态是可重用的。稍后我们将向此组件添加更多内容。</p>
<pre class="prettyprint"><code class="prism language-html has-numbering" onclick="mdcp.signin(event)" style="position: unset;">// src/Modal.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li></ul></pre>
<h2><a name="t8"></a><a name="t8"></a><a id="_236"></a>多根模板</h2>
<p>现在让我们为我们的根组件创建模板。我们将创建一个按钮来打开模态，它将触发 <code>toggleModalState</code> 方法。</p>
<p>我们还将使用我们刚刚创建的modal组件，它将根据 <code>modalState</code> 的值来渲染。让我们也在槽中插入一段文字作为内容。</p>
<pre class="prettyprint"><code class="prism language-html has-numbering" onclick="mdcp.signin(event)" style="position: unset;">// src/App.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toggleModalState<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Open modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modal</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modalOpen<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hello, I'm a modal window.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
<span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">"./Modal.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
components<span class="token punctuation">:</span> <span class="token punctuation">{</span>
Modal
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token operator">...</span>
<span class="token punctuation">}</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li><li style="color: rgb(153, 153, 153);">10</li><li style="color: rgb(153, 153, 153);">11</li><li style="color: rgb(153, 153, 153);">12</li><li style="color: rgb(153, 153, 153);">13</li><li style="color: rgb(153, 153, 153);">14</li><li style="color: rgb(153, 153, 153);">15</li><li style="color: rgb(153, 153, 153);">16</li><li style="color: rgb(153, 153, 153);">17</li></ul></pre>
<p>注意这个模板有什么奇怪的地方吗？再看一遍。</p>
<p>没错——有两个根元素。在Vue 3中，由于有了一个叫做片段（fragments）的功能，它不再强制要求有一个单一的根元素！</p>
<h2><a name="t9"></a><a name="t9"></a><a id="Composition_API_266"></a>使用Composition API进行重构</h2>
<p>Vue 3的旗舰功能是Composition API。这个新的API允许你使用 <code>setup</code> 功能而不是使用添加到组件定义对象的属性来定义组件功能。</p>
<p>现在，让我们重构App组件以使用Composition API。</p>
<p>在解释代码之前，请清楚我们所做的只是重构——组件的功能将相同。还要注意，模板没有更改，因为Composition API仅影响我们定义组件功能的方式，而不影响我们渲染它的方式。</p>
<p>src/App.vue</p>
<pre class="prettyprint"><code class="prism language-javascript has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"toggleModalState"</span><span class="token operator">&gt;</span>Open modal<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>modal v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"modalOpen"</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> <span class="token constant">I</span>'m a modal window<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>modal<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">"./Modal.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
<span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> modalState <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">toggleModalState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
modalState<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>modalState<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
modalState<span class="token punctuation">,</span>
toggleModalState
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li><li style="color: rgb(153, 153, 153);">10</li><li style="color: rgb(153, 153, 153);">11</li><li style="color: rgb(153, 153, 153);">12</li><li style="color: rgb(153, 153, 153);">13</li><li style="color: rgb(153, 153, 153);">14</li><li style="color: rgb(153, 153, 153);">15</li><li style="color: rgb(153, 153, 153);">16</li><li style="color: rgb(153, 153, 153);">17</li><li style="color: rgb(153, 153, 153);">18</li><li style="color: rgb(153, 153, 153);">19</li><li style="color: rgb(153, 153, 153);">20</li><li style="color: rgb(153, 153, 153);">21</li><li style="color: rgb(153, 153, 153);">22</li></ul></pre>
<h3><a name="t10"></a><a name="t10"></a><a id="setup__301"></a>setup 方法</h3>
<p>首先，请注意，我们导入了 <code>ref</code> 函数，该函数允许我们定义响应式变量 <code>modalState</code>。此变量等效于<code>this.modalState</code>。</p>
<p><code>toggleModalState</code> 方法只是一个普通的JavaScript函数。但是，请注意，要更改方法主体中的 <code>modalState</code> 值，我们需要更改其子属性 <code>value</code>。 这是因为使用 <code>ref</code> 创建的响应式变量被封装在一个对象中。这对于保留它们的响应式是非常必要的，因为它们在被传递的过程中会被保留下来。</p>
<p>最后，我们从 <code>setup</code> 方法返回 <code>modalState</code> 和 <code>toggleModalState</code> ，因为这些是在呈现模板时传递给模板的值。</p>
<h3><a name="t11"></a><a name="t11"></a><a id="_309"></a>变化的原因</h3>
<p>请记住，Composition API并不是更改，因为它纯粹是可选的。主要动机是允许更好的代码组织和组件之间的代码重用（因为mixin本质上是一种反模式）。</p>
<p>如果你认为在这个例子中重构App组件以使用Composition API是没有必要的，那你的想法是正确的。但是，如果这是一个更大的组件，或者我们需要与其他组件共享其功能，那么你就会发现它的用处。</p>
<h2><a name="t12"></a><a name="t12"></a><a id="Teleporting_content_315"></a>Teleporting content</h2>
<p>如果你曾经创建过模态功能，你会知道它通常被放置在关闭的 <code>&lt;/body&gt;</code> 标签之前。</p>
<pre class="prettyprint"><code class="prism language-html has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--main page content here--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--modal here--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li></ul></pre>
<p>这样做是因为模式通常具有覆盖页面的背景，要使用CSS来实现，您不需要处理父元素定位和z-index堆栈上下文，因此最简单的解决方案是将模式放在DOM的最底部。</p>
<p>但这在Vue.js中产生了一个问题，它假定UI将作为一个单一的组件树来构建。为了允许将树的片段移动到DOM中的其他位置，在Vue 3中添加了一个新的 <code>teleport</code> 组件。</p>
<p>要使用teleport，首先要在页面上添加一个元素，我们要将模态内容移动到该页面。我们将转到 <code>index.html</code>，并将ID为 <code>modal-wrapper</code> 的 <code>div</code> 放在Vue的安装元素旁边。</p>
<p>index.html</p>
<pre class="prettyprint"><code class="prism language-html has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--Vue mounting element--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--modal should get moved here--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li></ul></pre>
<p>现在，回到 <code>App.vue</code>，我们将模态内容包装在 <code>teleport</code> 组件中。我们还需要指定一个 <code>to</code> 属性，为该属性分配一个查询选择器，以标识目标元素，在本例中为 <code>#modal-wrapper</code>。</p>
<p>src/App.vue</p>
<pre class="prettyprint"><code class="prism language-html has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toggleModalState<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Open modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#modal-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modal</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modalOpen<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hello, I'm a modal window.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li></ul></pre>
<p>就是这样，<code>teleport</code> 中的任何内容都将渲染在目标元素中。</p>
<h2><a name="t13"></a><a name="t13"></a><a id="Emitting__event_363"></a>Emitting 和 event</h2>
<p>现在，让我们在modal中添加一个按钮，让它可以被关闭。要做到这一点，我们要在modal 模板中添加一个按钮元素，并添加一个点击处理程序，该处理程序会发出一个 <code>close</code> 事件。</p>
<p>src/Modal.vue</p>
<pre class="prettyprint"><code class="prism language-html has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>$emit(<span class="token punctuation">'</span>close<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Dismiss<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li></ul></pre>
<p>然后，该事件将由父组件捕获，并将切换 <code>modalState</code> 的值，从逻辑上将其设置为 <code>false</code> 并导致窗口关闭。</p>
<p>src/App.vue</p>
<pre class="prettyprint"><code class="prism language-html has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modal</span> 
<span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modalOpen<span class="token punctuation">"</span></span> 
<span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toggleModalState<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hello, I'm a modal window.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li><li style="color: rgb(153, 153, 153);">8</li><li style="color: rgb(153, 153, 153);">9</li><li style="color: rgb(153, 153, 153);">10</li></ul></pre>
<p>到目前为止，此功能与Vue 2中的功能相同。但是，现在在Vue 3中，建议您使用新的 <code>emits</code>  组件选项显式声明组件的事件。就像props一样，你可以简单地创建一个字符串数组来命名组件将发出的每个事件。</p>
<p>src/Modal.vue</p>
<pre class="prettyprint"><code class="prism language-html has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
emits<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">"close"</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li></ul></pre>
<h3><a name="t14"></a><a name="t14"></a><a id="_408"></a>变化的原因</h3>
<p>想象一下，打开别人写的组件的文件，看到它的prop和event明文声明。马上，你就会明白这个组件的界面，也就是它要发送和接收什么。</p>
<p>除了提供自说明代码外，你还可以使用事件声明来验证你的事件有效载荷，虽然我在这个例子中找不到理由来验证。</p>
<blockquote>
<p>了解更多：<a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0030-emits-option.md">Emits Option RFC</a></p>
</blockquote>
<h2><a name="t15"></a><a name="t15"></a><a id="_416"></a>样式插槽内容</h2>
<p>为了使模态可重用，我们提供了一个内容插槽。让我们开始通过为组件添加 <code>style</code> 标签来为内容设置样式。</p>
<p>在我们的组件中使用 <code>scoped</code> CSS是一种很好的做法，以确保我们提供的规则不会对页面中的其他内容产生意外影响。</p>
<p>让我们把任何被放入插槽中的段落文字变成斜体。要做到这一点，我们将使用 <code>p</code> 选择器创建一个新的CSS规则。</p>
<p>src/Modal.vue</p>
<pre class="prettyprint"><code class="prism language-html has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"><span class="token operator">...</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
<span class="token selector">p</span> <span class="token punctuation">{</span>
<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li><li style="color: rgb(153, 153, 153);">6</li><li style="color: rgb(153, 153, 153);">7</li></ul></pre>
<p>如果你尝试一下，你会发现这一点并不奏效。问题是，在编译时，当插槽内容仍属于父对象时，Scoped styling是在编译时确定的。</p>
<p>Vue 3提供的解决方案是提供一个伪选择器 <code>::v-slotted()</code>，允许你在提供插槽的组件中使用范围化规则来针对插槽内容。</p>
<p>这是我们的用法：</p>
<pre class="prettyprint"><code class="prism language-html has-numbering" onclick="mdcp.signin(event)" style="position: unset;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
<span class="token selector">::v-slotted(p)</span> <span class="token punctuation">{</span>
<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<div class="hljs-button signin" data-title="登录后复制"></div></code><ul class="pre-numbering" style=""><li style="color: rgb(153, 153, 153);">1</li><li style="color: rgb(153, 153, 153);">2</li><li style="color: rgb(153, 153, 153);">3</li><li style="color: rgb(153, 153, 153);">4</li><li style="color: rgb(153, 153, 153);">5</li></ul></pre>
<p>Vue 3还包含了其他一些新的Scoped Styling选择器：<code>::v-deep</code> 和 <code>::v-global</code>，你可以在这里了解更多：<a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md">Scoped Styles RFC</a>。</p>
<h2><a name="t16"></a><a name="t16"></a><a id="_452"></a>其他改变</h2>
<p>好吧，这就是我可以在一个简单示例中涵盖的所有新功能。主要的我基本都有了，但这里有一些我认为很重要的，在总结文章之前，我觉得足够重要，可以自己研究一下。</p>
<p>添加的：</p>
<ul>
<li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0004-global-api-treeshaking.md">Global API treeshaking</a></li>
</ul>
<p>移出的：</p>
<ul>
<li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0015-remove-filters.md">Filters</a></li>
<li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0016-remove-inline-templates.md">Inline templates</a></li>
<li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0020-events-api-change.md">Event interface for components</a>（不再有event bus）</li>
</ul>
<p>更改的：</p>
<ul>
<li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0026-async-component-api.md">Async component API</a></li>
<li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0012-custom-directive-api-change.md">Custom directive API</a></li>
<li><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0008-render-function-api-change.md">Render function syntax</a></li>
</ul>
<p>关于Vue Router也有各种变化，但我将专门用一篇文章来介绍这些变化！</p>
<hr>
</div>`,
  created: moment().subtract(2, "weeks"),
};
