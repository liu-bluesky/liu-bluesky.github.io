"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8890],{9504:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-612679ba",path:"/page/uniapp/renderjs.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"介绍",slug:"介绍",children:[]},{level:2,title:"官方提供的案例地址",slug:"官方提供的案例地址",children:[]},{level:2,title:"本次案例 地图渲染",slug:"本次案例-地图渲染",children:[]}],filePathRelative:"page/uniapp/renderjs.md",git:{updatedTime:1676620998e3,contributors:[{name:"blue",email:"229236940@qq.com",commits:1}]}}},9290:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(6252);const p={href:"https://uniapp.dcloud.net.cn/tutorial/renderjs.html#renderjs",target:"_blank",rel:"noopener noreferrer"},e={href:"https://ext.dcloud.net.cn/plugin?id=1207",target:"_blank",rel:"noopener noreferrer"},o={},l=(0,a(3744).Z)(o,[["render",function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[s[2]||(s[2]=(0,t._)("h2",{id:"介绍",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),(0,t.Uk)(" 介绍")],-1)),(0,t._)("p",null,[(0,t._)("a",p,[s[0]||(s[0]=(0,t.Uk)("官方介绍地址")),(0,t.Wm)(a)])]),s[3]||(s[3]=(0,t._)("h2",{id:"官方提供的案例地址",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#官方提供的案例地址","aria-hidden":"true"},"#"),(0,t.Uk)(" 官方提供的案例地址")],-1)),(0,t._)("p",null,[(0,t._)("a",e,[s[1]||(s[1]=(0,t.Uk)("官方demo地址")),(0,t.Wm)(a)])]),s[4]||(s[4]=(0,t.uE)('<h2 id="本次案例-地图渲染" tabindex="-1"><a class="header-anchor" href="#本次案例-地图渲染" aria-hidden="true">#</a> 本次案例 地图渲染</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>analysisCardTitle ml20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t\t\t各区域客户分布情况\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echarts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echarts.onClick<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:change:prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echarts.updateEcharts<span class="token punctuation">&quot;</span></span>\n\t\t\t<span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echarts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t\t\t\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n\t<span class="token keyword">import</span> <span class="token punctuation">{</span>\n\t\tmap\n\t<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/modules/analysis.js&#39;</span>\n\t<span class="token keyword">import</span> china <span class="token keyword">from</span> <span class="token string">&quot;./map.json&quot;</span><span class="token punctuation">;</span>  <span class="token comment">//案例地图数据 开源去 我开源模板演示案例获取数据地址</span>\n\t<span class="token comment">//引用配置文件 用于改写样式覆盖使用</span>\n\t<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\t\t<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>\n\t\t\t\t<span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;1100rpx&quot;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t  <span class="token literal-property property">toolbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>\n\t\t\t\t\t    <span class="token literal-property property">itemSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n\t\t\t\t\t    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\t\t\t\t\t    <span class="token literal-property property">feature</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t      \n\t\t\t\t\t      <span class="token literal-property property">restore</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\t\t\t\t\t    <span class="token punctuation">}</span>\n\t\t\t\t\t  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t\n\t\t\t\t\t<span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n\t\t\t\t\t\t<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;map&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">roam</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token string">&quot;china&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\t\t<span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t\t<span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t\t<span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&quot;#409eff&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t\t<span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,0.7)&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t\t<span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\t\t\t<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t\t\t<span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t\n\n\t\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\t<span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token literal-property property">visualMap</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\t<span class="token comment">//地图图例</span>\n\t\t\t\t\t\t<span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">showLabel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token comment">// text: [&#39;High&#39;, &#39;Low&#39;],</span>\n\t\t\t\t\t\t<span class="token literal-property property">realtime</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t<span class="token literal-property property">calculable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t\t  <span class="token literal-property property">inRange</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\t\t<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lightskyblue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;orangered&#39;</span><span class="token punctuation">]</span>\n\t\t\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\t\t\t\t<span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">}</span>\n\n\n\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n\t\t\t<span class="token comment">//自定义格式化Tooltip显示内容</span>\n\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">.</span>date <span class="token operator">=</span> <span class="token punctuation">[</span>\n\t\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>date<span class="token punctuation">.</span>starDate<span class="token punctuation">,</span>\n\t\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>date<span class="token punctuation">.</span>endDate<span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">]</span>\n\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token function">onViewClick</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">)</span>\n\t\t\t\t\t<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\t\t\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> res<span class="token punctuation">.</span>data\n\t\t\n\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echarts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>renderjs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n\t<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&quot;echarts&quot;</span>\n\t<span class="token keyword">import</span> china <span class="token keyword">from</span> <span class="token string">&quot;./map.json&quot;</span><span class="token punctuation">;</span>\n\t<span class="token keyword">let</span> myChart\n\t<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initEcharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token function">updateEcharts</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> ownerInstance<span class="token punctuation">,</span> instance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token comment">// 监听 service 层数据变更</span>\n\t\t\t\tmyChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token function">onClick</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> ownerInstance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token comment">// 调用 service 层的方法</span>\n\t\t\t\townerInstance<span class="token punctuation">.</span><span class="token function">callMethod</span><span class="token punctuation">(</span><span class="token string">&#39;onViewClick&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token function">initEcharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\techarts<span class="token punctuation">.</span><span class="token function">registerMap</span><span class="token punctuation">(</span><span class="token string">&quot;china&quot;</span><span class="token punctuation">,</span> china<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\tmyChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;echarts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\t\t\t\t<span class="token comment">// console.log(myChart.setOption);</span>\n\t\t\t\t<span class="token comment">// 观测更新的数据在 view 层可以直接访问到</span>\n\t\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>tooltip<span class="token punctuation">.</span><span class="token function-variable function">formatter</span><span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> t<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t     <span class="token keyword">let</span> data <span class="token operator">=</span> e<span class="token punctuation">.</span>data<span class="token operator">?</span>e<span class="token punctuation">.</span>data<span class="token operator">:</span><span class="token punctuation">{</span>\n\t\t\t\t\t\t <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>\n\t\t\t\t\t\t <span class="token literal-property property">prop</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>\n\t\t\t\t\t <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t\t\t\t\t console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t     <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n\t\t\t\t        &lt;div&gt;\n\t\t\t\t            &lt;p&gt;&lt;b style=&quot;font-size:15px;&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/b&gt;&lt;/p&gt;\n\t\t\t\t            &lt;p class=&quot;tooltip_style&quot;&gt;&lt;span class=&quot;tooltip_left&quot;&gt;城市&lt;/span&gt;&lt;span class=&quot;tooltip_right&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>value<span class="token operator">?</span>data<span class="token punctuation">.</span>value<span class="token operator">:</span><span class="token number">0</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span&gt;&lt;/p&gt;\n\t\t\t\t            &lt;p class=&quot;tooltip_style&quot;&gt;&lt;span class=&quot;tooltip_left&quot;&gt;占比&lt;/span&gt;&lt;span class=&quot;tooltip_right&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>prop<span class="token operator">?</span>data<span class="token punctuation">.</span>prop<span class="token operator">:</span><span class="token string">&quot;0%&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span&gt;&lt;/p&gt;\n\t\t\t\t        &lt;/div&gt;\n\t\t\t\t     </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\t\t\t\t     <span class="token keyword">return</span> context<span class="token punctuation">;</span>\n\t\t\t\t   <span class="token punctuation">}</span>\n\t\t\t\tmyChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n\t<span class="token selector">.echarts</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n\t\t<span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br></div></div>',2))],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);