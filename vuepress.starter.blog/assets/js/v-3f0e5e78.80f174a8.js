"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3606],{2471:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-3f0e5e78",path:"/page/flutter/Amap.html",title:"开发环境如下",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"flutter安卓地图配置",slug:"flutter安卓地图配置",children:[]}],filePathRelative:"page/flutter/Amap.md",git:{updatedTime:1637567472e3,contributors:[{name:"liu-bluesky",email:"229236940@qq.com",commits:1}]}}},3773:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var p=a(6252);const t={href:"https://jingyan.baidu.com/article/59703552e877f98fc00740f0.html",target:"_blank",rel:"noopener noreferrer"},e={href:"https://gitee.com/blueskyliu/flutter_map_amap_flutter_map",target:"_blank",rel:"noopener noreferrer"},o={},l=(0,a(3744).Z)(o,[["render",function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[s[3]||(s[3]=(0,p.uE)('<h1 id="开发环境如下" tabindex="-1"><a class="header-anchor" href="#开发环境如下" aria-hidden="true">#</a> 开发环境如下</h1><ol><li>flutter 开发环境</li><li>安卓开发环境</li><li>dart开发环境 目前flutter集成了dart</li><li>debug.keystore 生成</li></ol><h1 id="项目配置细节" tabindex="-1"><a class="header-anchor" href="#项目配置细节" aria-hidden="true">#</a> 项目配置细节</h1><h2 id="flutter安卓地图配置" tabindex="-1"><a class="header-anchor" href="#flutter安卓地图配置" aria-hidden="true">#</a> flutter安卓地图配置</h2><ol><li>android/app 下创建libs文件，并且下载地图SDK <img src="https://img-blog.csdnimg.cn/20210127135309181.png" alt="在这里插入图片描述"></li><li>android/app/build.gradle 配这个文件==带有添加的是你项目需要修改的地方==</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>def localProperties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\ndef localPropertiesFile <span class="token operator">=</span> rootProject<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&#39;local.properties&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>localPropertiesFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    localPropertiesFile<span class="token punctuation">.</span><span class="token function">withReader</span><span class="token punctuation">(</span><span class="token string">&#39;UTF-8&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> reader <span class="token operator">-</span><span class="token operator">&gt;</span>\n        localProperties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>reader<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\ndef flutterRoot <span class="token operator">=</span> localProperties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&#39;flutter.sdk&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>flutterRoot <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">GradleException</span><span class="token punctuation">(</span><span class="token string">&quot;Flutter SDK not found. Define location with flutter.sdk in the local.properties file.&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\ndef flutterVersionCode <span class="token operator">=</span> localProperties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&#39;flutter.versionCode&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>flutterVersionCode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    flutterVersionCode <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span>\n<span class="token punctuation">}</span>\n\ndef flutterVersionName <span class="token operator">=</span> localProperties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&#39;flutter.versionName&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>flutterVersionName <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    flutterVersionName <span class="token operator">=</span> <span class="token string">&#39;1.0&#39;</span>\n<span class="token punctuation">}</span>\n\napply plugin<span class="token operator">:</span> <span class="token string">&#39;com.android.application&#39;</span>\napply plugin<span class="token operator">:</span> <span class="token string">&#39;kotlin-android&#39;</span>\napply from<span class="token operator">:</span> <span class="token string">&quot;$flutterRoot/packages/flutter_tools/gradle/flutter.gradle&quot;</span>\n\nandroid <span class="token punctuation">{</span>\n    compileSdkVersion <span class="token number">29</span><span class="token comment">//建议使用30一下版本</span>\n    sourceSets <span class="token punctuation">{</span>\n        main<span class="token punctuation">.</span>java<span class="token punctuation">.</span>srcDirs <span class="token operator">+=</span> <span class="token string">&#39;src/main/kotlin&#39;</span>\n        <span class="token comment">//添加地图SDK引入路径</span>\n        main <span class="token punctuation">{</span>\n            jniLibs<span class="token punctuation">.</span>srcDirs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;libs&#39;</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    signingConfigs <span class="token punctuation">{</span>\n   \n        <span class="token comment">//添加keystore</span>\n        release <span class="token punctuation">{</span>\n            keyAlias <span class="token string">&#39;androiddebugkey&#39;</span>\n            keyPassword <span class="token string">&#39;android&#39;</span>\n            storeFile <span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&#39;../debug.keystore&#39;</span><span class="token punctuation">)</span>\n            storePassword <span class="token string">&#39;android&#39;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    defaultConfig <span class="token punctuation">{</span>\n        <span class="token comment">// TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).</span>\n        applicationId <span class="token string">&quot;com.example.flutter_app&quot;</span>\n        minSdkVersion <span class="token number">16</span>\n        targetSdkVersion <span class="token number">29</span><span class="token comment">//建议使用30一下版本</span>\n        versionCode flutterVersionCode<span class="token punctuation">.</span><span class="token function">toInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        versionName flutterVersionName\n    <span class="token punctuation">}</span>\n    \n    buildTypes <span class="token punctuation">{</span>\n     \t<span class="token comment">//添加如下配置关闭混淆</span>\n        release <span class="token punctuation">{</span>\n            <span class="token comment">// TODO: Add your own signing config for the release build.</span>\n            <span class="token comment">// Signing with the debug keys for now, so `flutter run --release` works.</span>\n            signingConfig signingConfigs<span class="token punctuation">.</span>debug\n            <span class="token comment">//关闭混淆, 否则在运行release包后可能出现运行崩溃， TODO后续进行混淆配置</span>\n            minifyEnabled <span class="token boolean">false</span> <span class="token comment">//删除无用代码</span>\n            shrinkResources <span class="token boolean">false</span> <span class="token comment">//删除无用资源</span>\n            <span class="token comment">// proguardFiles getDefaultProguardFile(&#39;proguard-android.txt&#39;), &#39;proguard-rules.pro&#39;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nflutter <span class="token punctuation">{</span>\n    source <span class="token string">&#39;../..&#39;</span>\n<span class="token punctuation">}</span>\n\ndependencies <span class="token punctuation">{</span>\n    implementation <span class="token string">&quot;org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version&quot;</span>\n    <span class="token comment">//添加demo中引入高德地图SDK</span>\n    implementation <span class="token function">fileTree</span><span class="token punctuation">(</span>include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*.jar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;libs&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><ol start="3"><li>添加安卓权限在android/app/src/main/AndroidManifest.xml ==这里就添加的比较多了根据当前需求选择添加的权限== 在manifest 标签下</li></ol><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>    <span class="token comment">&lt;!--用于进行网络定位--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.ACCESS_COARSE_LOCATION<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uses-permission</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!--用于访问GPS定位--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.ACCESS_FINE_LOCATION<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uses-permission</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!--用于获取运营商信息，用于支持提供运营商信息相关的接口--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.ACCESS_NETWORK_STATE<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uses-permission</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!--用于访问wifi网络信息，wifi信息会用于进行网络定位--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.ACCESS_WIFI_STATE<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uses-permission</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!--用于获取wifi的获取权限，wifi信息会用来进行网络定位--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.CHANGE_WIFI_STATE<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uses-permission</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!--用于访问网络，网络定位需要上网--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.INTERNET<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uses-permission</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!--用于读取手机当前的状态--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.READ_PHONE_STATE<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uses-permission</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!--用于写入缓存数据到扩展存储卡--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.WRITE_EXTERNAL_STORAGE<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uses-permission</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!--用于申请调用A-GPS模块--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.ACCESS_LOCATION_EXTRA_COMMANDS<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uses-permission</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="4"><li>引入flutter插件</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code> <span class="token key atrule">permission_handler</span><span class="token punctuation">:</span> ^5.0.1+1<span class="token comment">#权限申请插件</span>\n <span class="token key atrule">amap_flutter_map</span><span class="token punctuation">:</span> ^1.0.0<span class="token comment">#高德地图插件</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5"><li>配置这个文件android/gradle.properties 添加如下配置</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>android<span class="token punctuation">.</span>enableR8<span class="token operator">=</span><span class="token boolean">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="6"><li>配置 android/build.gradle classpath 版本目前建议3.5.0 4.1.0无法用</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>buildscript <span class="token punctuation">{</span>\n    ext<span class="token punctuation">.</span>kotlin_version <span class="token operator">=</span> <span class="token string">&#39;1.3.50&#39;</span>\n    repositories <span class="token punctuation">{</span>\n        <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token function">jcenter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    dependencies <span class="token punctuation">{</span>\n        classpath <span class="token string">&#39;com.android.tools.build:gradle:3.5.0&#39;</span><span class="token comment">//4.1.0</span>\n        classpath <span class="token string">&quot;org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="7"><li>配置这个文件android/gradle/wrapper/gradle-wrapper.properties ==建议使用5.6.2 gradle-6.7-all.zip无法使用目前==</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>distributionUrl<span class="token operator">=</span>https\\<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>services<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>org<span class="token operator">/</span>distributions<span class="token operator">/</span>gradle<span class="token operator">-</span><span class="token number">5.6</span><span class="token number">.2</span><span class="token operator">-</span>all<span class="token punctuation">.</span>zip\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="9"><li>keystore 生成</li></ol><p><strong>方案1</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>dos下进入<span class="token constant">JDK</span>的bin目录\n\n<span class="token literal-property property">运行如下命令</span><span class="token operator">:</span>\n\nkeytool <span class="token operator">-</span>genkey <span class="token operator">-</span>alias android<span class="token punctuation">.</span>keystore <span class="token operator">-</span>keyalg <span class="token constant">RSA</span> <span class="token operator">-</span>validity <span class="token number">20000</span> <span class="token operator">-</span>keystore android<span class="token punctuation">.</span><span class="token function">keystore</span>\n\n<span class="token punctuation">(</span><span class="token operator">-</span>validity <span class="token number">20000</span>代表有效期天数<span class="token punctuation">)</span>，命令完成后，bin目录中会生成android<span class="token punctuation">.</span>keystore\n\n 设置密码 keytool <span class="token operator">-</span>list <span class="token operator">-</span>keystore <span class="token string">&quot;android.keystore&quot;</span> 输入设置的keystore密码 \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',19)),(0,p._)("p",null,[s[1]||(s[1]=(0,p._)("strong",null,"方案2",-1)),(0,p._)("a",t,[s[0]||(s[0]=(0,p.Uk)("https://jingyan.baidu.com/article/59703552e877f98fc00740f0.html")),(0,p.Wm)(a)])]),s[4]||(s[4]=(0,p._)("h1",{id:"demo地址",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#demo地址","aria-hidden":"true"},"#"),(0,p.Uk)(" demo地址")],-1)),(0,p._)("p",null,[(0,p._)("a",e,[s[2]||(s[2]=(0,p.Uk)("https://gitee.com/blueskyliu/flutter_map_amap_flutter_map")),(0,p.Wm)(a)])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);