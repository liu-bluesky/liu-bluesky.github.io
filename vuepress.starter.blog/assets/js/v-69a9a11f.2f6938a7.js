"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8860],{2620:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-69a9a11f",path:"/page/vue/Frontmatter.html",title:"前端知识模块",lang:"zh-CN",frontmatter:{lang:"zh-CN",title:"前端知识模块",description:"跟前端密切相关的笔记资料",sidebar:[{text:"elementUI 3.0",children:[{text:"通用数据选择器组件",link:"/page/vue/elementUI/checksRadio"}]},{text:"Vue2.0",children:[{text:"v-module数据双休绑定原理",link:"/page/vue/v-model"},{text:"字典选择器组件",link:"/page/vue/dict"},{text:"附件上传记录组件",link:"/page/vue/taskLog"},{text:"表格编辑功能组件",link:"/page/vue/editInput"}]},{text:"Vue3.0",children:[{text:"甘特图选型",link:"/page/vue/GanttChart"},{text:"vite + electron + vue3.0",link:"/page/vue/electronVite"},{text:"解决首屏加载慢",link:"/page/vue/performance"},{text:"vite SSR 超简单的服务端渲染",link:"/page/vue/viteSSR"},{text:"vue3.0国际化",link:"/page/vue/i18n"},{text:"element-plus打包报错",link:"/page/vue/elementPlus"},{text:"VueUse中文文档/Vue官方工具库",link:"/page/vue/vueUse"},{text:"大屏适配解决方案",link:"/page/vue/vue30_screen"},{text:"大屏适配Y滚动",link:"/page/vue/vue30_screenY"},{text:"vue3.0 日历组件",link:"/page/vue/vue3calendarVue"},{text:"vue3.0 强制更新",link:"/page/vue/vue3forceUpdate"},{text:"vue3.0 打开新页面",link:"/page/vue/openNewPage"},{text:"vue3.0 Typescript给window对象添加全局变量",link:"/page/vue/windowVar"}]}]},excerpt:"",headers:[{level:2,title:"vue 分析项目外部依赖大小",slug:"vue-分析项目外部依赖大小",children:[{level:3,title:"webpack-bundle-analyzer插件配置 vue.config.js中使用",slug:"webpack-bundle-analyzer插件配置-vue-config-js中使用",children:[]}]},{level:2,title:"compression-webpack-plugin 插件安装",slug:"compression-webpack-plugin-插件安装",children:[{level:3,title:"vue.config.js添加如下配置",slug:"vue-config-js添加如下配置",children:[]},{level:3,title:"配置nginx",slug:"配置nginx",children:[]}]},{level:2,title:"splitchunks拆分",slug:"splitchunks拆分",children:[]}],filePathRelative:"page/vue/Frontmatter.md",git:{updatedTime:1706066187e3,contributors:[{name:"liu-bluesky",email:"229236940@qq.com",commits:7},{name:"llt18336465466",email:"229236940@qq.com",commits:4},{name:"blue",email:"229236940@qq.com",commits:3}]}}},4945:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var e=a(6252);const p={},l=(0,a(3744).Z)(p,[["render",function(n,s){return s[0]||(s[0]=(0,e.uE)('<h1 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h1><h2 id="vue-分析项目外部依赖大小" tabindex="-1"><a class="header-anchor" href="#vue-分析项目外部依赖大小" aria-hidden="true">#</a> vue 分析项目外部依赖大小</h2><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code># NPM \nnpm install --save-dev webpack-bundle-analyzer\n# Yarn \nyarn add -D webpack-bundle-analyzer\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="webpack-bundle-analyzer插件配置-vue-config-js中使用" tabindex="-1"><a class="header-anchor" href="#webpack-bundle-analyzer插件配置-vue-config-js中使用" aria-hidden="true">#</a> webpack-bundle-analyzer插件配置 vue.config.js中使用</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> BundleAnalyzerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-bundle-analyzer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>BundleAnalyzerPlugin<span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// webpack 配置</span>\n    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n \n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="compression-webpack-plugin-插件安装" tabindex="-1"><a class="header-anchor" href="#compression-webpack-plugin-插件安装" aria-hidden="true">#</a> compression-webpack-plugin 插件安装</h2><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm install compression-webpack-plugin -D\n或\nyarn add compression-webpack-plugin -D\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="vue-config-js添加如下配置" tabindex="-1"><a class="header-anchor" href="#vue-config-js添加如下配置" aria-hidden="true">#</a> vue.config.js添加如下配置</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> CompressionPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|css|html)?$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token comment">// 压缩文件格式</span>\n\t  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[path][name].gz&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 压缩后的文件名</span>\n\t  <span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">&#39;gzip&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 使用gzip压缩</span>\n\t  <span class="token comment">// 只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。</span>\n\t  <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">20240</span><span class="token punctuation">,</span>\n\t  <span class="token literal-property property">minRatio</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token comment">// 压缩率小于1才会压缩</span>\n\t  <span class="token literal-property property">deleteOriginalAssets</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token comment">// 是否删除原资源</span>\n <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="配置nginx" tabindex="-1"><a class="header-anchor" href="#配置nginx" aria-hidden="true">#</a> 配置nginx</h3><blockquote><p>一般写在server或者location均可；</p></blockquote><div class="language-config ext-config line-numbers-mode"><pre class="language-config"><code># 开启和关闭gzip模式\ngzip on;\n# gizp压缩起点，文件大于1k才进行压缩\ngzip_min_length 1k;\n# 设置压缩所需要的缓冲区大小，以4k为单位，如果文件为7k则申请2*4k的缓冲区 \ngzip_buffers 4 16k;\n# 设置gzip压缩针对的HTTP协议版本\ngzip_http_version 1.0;\n# gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间\ngzip_comp_level 2;\n# 进行压缩的文件类型\ngzip_types text/plain application/javascript text/css application/xml;\n# 是否在http header中添加Vary: Accept-Encoding，建议开启\ngzip_vary on;\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>###开启效果</p><blockquote><p>chunk-vendorsjs 原来大小4m 开启之后大小只有 1.4m</p></blockquote><h2 id="splitchunks拆分" tabindex="-1"><a class="header-anchor" href="#splitchunks拆分" aria-hidden="true">#</a> splitchunks拆分</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n<span class="token literal-property property">configureWebpack</span><span class="token operator">:</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token literal-property property">testVendor</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n            <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 注意跟默认配置的优先级问题</span>\n            <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;initial&#39;</span><span class="token punctuation">,</span>\n            <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>\n            <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span>chunks<span class="token punctuation">,</span> cacheGroupKey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token keyword">const</span> packageName <span class="token operator">=</span> module<span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/](.*?)([\\\\/]|$)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n              <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">npm.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>packageName<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;@&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n            <span class="token punctuation">}</span>\n\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>SplitChunks插件配置选项\nchunks 选项，决定要提取哪些模块\n默认是 async ：只提取异步加载的模块出来打包到一个文件中。\n异步加载的模块：通过 import(‘xxx’) 或 require([‘xxx’],() =&gt;{}) 加载的模块。\n\ninitial：提取同步加载和异步加载模块；\n如果 xxx 在项目中异步加载了，也同步加载了，那么 xxx 这个模块会被提取两次，分别打包到不同的文件中。\n同步加载的模块：通过 import xxx 或 require(‘xxx’) 加载的模块。\n\nall：不管异步加载还是同步加载的模块都提取出来，打包到一个文件中；\n\nminSize 选项：规定被提取的模块在压缩前的大小最小值，单位为字节；\n默认为30000，只有超过了30000字节才会被提取。\n\nmaxSize 选项：把提取出来的模块打包生成的文件大小不能超过maxSize值；\n如果超过了，要对其进行分割并打包生成新的文件。\n单位为字节，默认为0，表示不限制大小。\n\nminChunks 选项：表示要被提取的模块最小被引用次数，引用次数超过或等于minChunks值，才能被提取。\n\nmaxAsyncRequests 选项：最大的按需(异步)加载次数，默认为 6；\n\nmaxInitialRequests 选项：打包后的入口文件加载时，还能同时加载js文件的数量（包括入口文件），默认为4。\n\n优先级 ：maxInitialRequests / maxAsyncRequests &lt; maxSize &lt; minSize；\n\nautomaticNameDelimiter 选项：打包生成的js文件名的分割符，默认为：~\n\nname选项：打包生成 js 文件的名称；\n\ncacheGroups 选项，核心重点，配置提取模块的方案，里面每一项代表一个提取模块的方案。\n下面是 cacheGroups 每项中特有的选项，其余选项和外面一致，若 cacheGroups 每项中有，就按配置的，没有就使用外面配置的；\n\ntest 选项：用来匹配要提取的模块的资源路径或名称，值是正则或函数；\n\npriority 选项：方案的优先级，值越大表示提取模块时优先采用此方案，默认值为0；\n\nreuseExistingChunk 选项：true / false。\n为true时，如果当前要提取的模块，在已经在打包生成的js文件中存在，则将重用该模块，而不是把当前要提取的模块打包生成新的 js 文件。\n\nenforce选项：true / false。\n为true时，忽略minSize，minChunks，maxAsyncRequests和maxInitialRequests外面选项\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>',17))}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);