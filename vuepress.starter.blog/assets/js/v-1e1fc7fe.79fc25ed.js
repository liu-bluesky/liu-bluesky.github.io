"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3828],{5360:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-1e1fc7fe",path:"/page/uniapp/openMap.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"第一步：后去用户当前的位置",slug:"第一步-后去用户当前的位置",children:[]},{level:2,title:"第二步，打开高德地图导航",slug:"第二步-打开高德地图导航",children:[]}],filePathRelative:"page/uniapp/openMap.md",git:{updatedTime:1676620998e3,contributors:[{name:"blue",email:"229236940@qq.com",commits:1}]}}},1780:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(6252);const p={},o=(0,a(3744).Z)(p,[["render",function(n,s){return s[0]||(s[0]=(0,t.uE)('<h2 id="第一步-后去用户当前的位置" tabindex="-1"><a class="header-anchor" href="#第一步-后去用户当前的位置" aria-hidden="true">#</a> 第一步：后去用户当前的位置</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//获取用户经纬度</span>\n\t\t\t<span class="token keyword">async</span> <span class="token function">getCurlocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\t\tuni<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token literal-property property">geocode</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;gcj02&#39;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n\t\t\t\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>latitude <span class="token operator">=</span> res<span class="token punctuation">.</span>latitude<span class="token punctuation">;</span>\n\t\t\t\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>longitude <span class="token operator">=</span> res<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>\n\t\t\t\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>current_address <span class="token operator">=</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span>province<span class="token operator">+</span>res<span class="token punctuation">.</span>address<span class="token punctuation">.</span>city<span class="token operator">+</span>res<span class="token punctuation">.</span>address<span class="token punctuation">.</span>district<span class="token operator">+</span>res<span class="token punctuation">.</span>address<span class="token punctuation">.</span>street<span class="token operator">+</span>res<span class="token punctuation">.</span>address<span class="token punctuation">.</span>streetNum<span class="token operator">+</span>res<span class="token punctuation">.</span>address<span class="token punctuation">.</span>poiName<span class="token punctuation">;</span>\n\t\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="第二步-打开高德地图导航" tabindex="-1"><a class="header-anchor" href="#第二步-打开高德地图导航" aria-hidden="true">#</a> 第二步，打开高德地图导航</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">navigaToShop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\t\t\t\t<span class="token keyword">let</span> shop_latitude <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shop_latitide<span class="token punctuation">;</span>\n\t\t\t\t<span class="token keyword">let</span> shop_longtude <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shop_longtude<span class="token punctuation">;</span>\n\t\t\t\t<span class="token keyword">let</span> current_latitude <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>latitude<span class="token punctuation">;</span>\n\t\t\t\t<span class="token keyword">let</span> current_longitude <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>\n\t\t\t\t\n\t\t\t\t<span class="token keyword">var</span> packageName <span class="token operator">=</span> <span class="token string">&#39;com.autonavi.minimap&#39;</span><span class="token punctuation">;</span>\n\t\t\t\t<span class="token keyword">var</span> main <span class="token operator">=</span> plus<span class="token punctuation">.</span>android<span class="token punctuation">.</span><span class="token function">runtimeMainActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t<span class="token keyword">var</span> packageManager <span class="token operator">=</span> main<span class="token punctuation">.</span><span class="token function">getPackageManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t<span class="token keyword">var</span> PackageManager <span class="token operator">=</span> plus<span class="token punctuation">.</span>android<span class="token punctuation">.</span><span class="token function">importClass</span><span class="token punctuation">(</span>packageManager<span class="token punctuation">)</span>\n\t\t\t\t<span class="token keyword">var</span> packageInfo <span class="token operator">=</span> packageManager<span class="token punctuation">.</span><span class="token function">getPackageInfo</span><span class="token punctuation">(</span>packageName<span class="token punctuation">,</span>PackageManager<span class="token punctuation">.</span><span class="token constant">GET_ACTIVITIES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>packageInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t    <span class="token keyword">var</span> Uri <span class="token operator">=</span> plus<span class="token punctuation">.</span>android<span class="token punctuation">.</span><span class="token function">importClass</span><span class="token punctuation">(</span><span class="token string">&quot;android.net.Uri&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t\t<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&quot;amapuri://route/plan?sourceApplication=maxuslife&quot;</span> <span class="token operator">+</span>\n\t\t\t\t\t\t<span class="token string">&quot;&amp;sid=A&amp;slat=&quot;</span><span class="token operator">+</span><span class="token function">current_latitude</span><span class="token punctuation">(</span>当前维度<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;&amp;slon=&quot;</span><span class="token operator">+</span>current_longitude（当前经度）<span class="token operator">+</span><span class="token string">&quot;&amp;sname=&quot;</span> <span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>current_address（当前位置）<span class="token operator">+</span>\n\t\t\t\t\t\t<span class="token string">&quot;&amp;did=B&amp;dlat=&quot;</span><span class="token operator">+</span>shop_latitude（店铺经度）<span class="token operator">+</span><span class="token string">&quot;&amp;dlon=&quot;</span><span class="token operator">+</span>shop_longtude（店铺维度）<span class="token operator">+</span><span class="token string">&quot;&amp;dname=&quot;</span><span class="token operator">+</span>shop_address（店铺地址）<span class="token operator">+</span><span class="token string">&quot;D10&amp;dev=0&amp;t=0&quot;</span><span class="token punctuation">;</span>\n\t\t\t\t\t<span class="token keyword">var</span> Intent <span class="token operator">=</span> plus<span class="token punctuation">.</span>android<span class="token punctuation">.</span><span class="token function">importClass</span><span class="token punctuation">(</span><span class="token string">&#39;android.content.Intent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t\t<span class="token keyword">var</span> intent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t\tintent<span class="token punctuation">.</span><span class="token function">setAction</span><span class="token punctuation">(</span>Intent<span class="token punctuation">.</span><span class="token constant">ACTION_VIEW</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t\tintent<span class="token punctuation">.</span><span class="token function">addCategory</span><span class="token punctuation">(</span>Intent<span class="token punctuation">.</span><span class="token constant">CATEGORY_DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t\t<span class="token keyword">var</span> uri <span class="token operator">=</span> Uri<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t\t<span class="token comment">//将功能Scheme以URI的方式传入data  </span>\n\t\t\t\t    intent<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t\tintent<span class="token punctuation">.</span><span class="token function">setPackage</span><span class="token punctuation">(</span><span class="token string">&quot;com.autonavi.minimap&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t\t<span class="token keyword">var</span> main <span class="token operator">=</span> plus<span class="token punctuation">.</span>android<span class="token punctuation">.</span><span class="token function">runtimeMainActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t\tmain<span class="token punctuation">.</span><span class="token function">startActivity</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\t\t\t    <span class="token comment">// alert(&#39;未安装&#39; + packageName + &#39;&#39;)</span>\n\t\t\t\t\tuni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\t\t\t\t<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">目前导航暂只支持</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>packageName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>',4))}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);