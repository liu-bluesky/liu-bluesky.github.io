"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5391],{7376:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-06cf5899",path:"/page/js/function/download.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"下载文件",slug:"下载文件",children:[{level:3,title:"方案1",slug:"方案1",children:[]},{level:3,title:"方案2",slug:"方案2",children:[]}]}],filePathRelative:"page/js/function/download.md",git:{updatedTime:1657853872e3,contributors:[{name:"llt18336465466",email:"229236940@qq.com",commits:1}]}}},1805:(n,a,s)=>{s.r(a),s.d(a,{default:()=>e});var t=s(6252);const p={},e=(0,s(3744).Z)(p,[["render",function(n,a){return a[0]||(a[0]=(0,t.uE)('<h2 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件" aria-hidden="true">#</a> 下载文件</h2><h3 id="方案1" tabindex="-1"><a class="header-anchor" href="#方案1" aria-hidden="true">#</a> 方案1</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`${完整的下载地址}`<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>downloadFile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{文件名称}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>downloadFile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="方案2" tabindex="-1"><a class="header-anchor" href="#方案2" aria-hidden="true">#</a> 方案2</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 用fetch发送请求 对请求回来的二进制文件流进行处理</span>\n<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/upload/user.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  res<span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">blob</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> blobUrl <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 这里的文件名根据实际情况从响应头或者url里获取</span>\n    <span class="token keyword">const</span> filename <span class="token operator">=</span> <span class="token string">&#39;user.txt&#39;</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    a<span class="token punctuation">.</span>href <span class="token operator">=</span> blobUrl<span class="token punctuation">;</span>\n    a<span class="token punctuation">.</span>download <span class="token operator">=</span> filename<span class="token punctuation">;</span>\n    a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>blobUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',5))}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);