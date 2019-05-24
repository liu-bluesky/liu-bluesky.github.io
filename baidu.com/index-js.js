/**
 * 显示菜单
 * @type {HTMLElement | null}
 */

    var nava8a=document.getElementById('nav-a-8-a')
    var navspan=document.getElementById('nav-span');
var    navspans=document.getElementById('nav-spans');
    var navspanA=navspan.children;
    var navdivspan=document.getElementById('nav-div-span')
        nava8a.onmouseover=function () {
         navdivspan.style.display='block'
     }
    navspan.onmouseover=function () {
            navdivspan.style.display='block'
        }
    navspan.onmouseout=function () {
            navdivspan.style.display='none'
        }


 //鼠标悬浮实现换背景换字体颜色
for (var i=0;i<navspanA.length;i++){
    navspanA[i].onmouseover=function () {
           for (var i=0;i<navspanA.length;i++){
               navspanA[i].className="nav-a-8-setup-span-a"
           }
           this.className +=' nav-a-8-setup-span-a-aa'
    }


}



    //获取更多产品浏览器高度documentElement.clientHeight
    var navmoreproduct=document.getElementById('nav-more-product')
    // var heightScr=document.body.scrollHeight
    var height=innerHeight
    var heights=window.screen.availHeight
    // var max=heightScr+height+document.documentElement.clientHeight    942px
    var sidebar=document.getElementById('sidebars')
    // navspanA[i].style.backgroundColor="#3388FF"
    //悬浮字体颜色变黑 背景编程和侧边栏一样慢慢出现
    //绑定事件
            navmoreproduct.onmouseover=function () {


                var arlast='';
                if (height==944) {
                    arlast=height
                }else if (height<=950 && height>944){
                    arlast=heights
                }else {
                    arlast=height
                }
        sidebar.style.height=arlast+'px';
        sidebar.style.width="85px"
        sidebar.style.display='block';
        }
        sidebar.onmouseover=function(){
        sidebar.style.display='block';

        }
        sidebar.onmouseout=function(){
                sidebar.style.display='none';
                }

//侧边栏内容
 //  var test=document.getElementById('sidebar-con-icon1')
var sidebarconheight=document.getElementsByClassName('sidebar-con-height')[0]
 var  sidebarconheights= sidebarconheight.children
// var str=sidebarconheights.firstElementChild || sidebarconheights.firstChild
for (var k=0;k<sidebarconheights.length;k++){
        sidebarconheights[k].onmouseover=function () {
            for (var k=0;k<sidebarconheights.length;k++){
            sidebarconheights[k].style.textDecoration='none'
            }
            this.style.textDecoration='underline'
        }
}
//var spanicon=sidebarconheights.children
var httparr='https://www.nuomi.com/?cid=002540|http://music.taihe.com/|http://image.baidu.com/|https://zhidao.baidu.com/|https://wenku.baidu.com/|http://top.baidu.com/'
var str=httparr.split('|')//split加参数就是以参数为分割点

// console.log(str[2]);
for (var j=0;j<sidebarconheights.length;j++) {
   httpicon(sidebarconheights[j],str[j])
    }
//  var s=sidebarconheight.children
// s[0].onclick=function () {
//     window.open(str[0])
// }

function httpicon(ele,index)
{
    ele.onclick=function () {
        window.open(index)
    }
}
var sidebarbotton=document.getElementsByClassName('sidebar-botton')[0]
   httpicon(sidebarbotton,'https://www.baidu.com/more/')
   //点击搜索栏border边蓝色
   //获取事件源
var inputLl=document.getElementById('search-input-l')
   // inputLl.onfocus=function () {
   //      /*onfocus获取焦点*/
   //     inputLl.style.border='1px solid #4791FF'
   //     inputLl.style.borderRight=''
   // }
   // inputLl.onblur=function () {
   //      /*失去焦点*/
   //     inputLl.style.border='1px solid #ccc'
   //     inputLl.style.borderRight=''
   // }
    //历史搜索记录
//创建历史记录数组 获取事件源
var searchHistory=['蓝天真帅','刘蓝天在干嘛','小迎','蓝天生气了','蓝天忙了','小迎生气了','小樱','魔法少女','蓝天是干什么的']
//获取事件源
//获取ul事件
//var searchhistorytopul=document.getElementById('search-history-top-ul')
inputLl.onkeyup=function () {//onkeyup键盘谈起
    //    var s=''
    // console.log(typeof s);
    var val=this.value//首先获取input的对话框然后然后跟后台数据库首字符对比
    var searchhistorytop=document.getElementsByClassName('search-history-top')[0]

    //通过循环跟每一个数据对比
    var newsearchhitory=[]
    for (var i=0;i<searchHistory.length;i++){
        if (searchHistory[i].indexOf(val)==0){//indexof里面的参数可以获得参数的位置
           //需要给他存到一个数组里面然后重新排序放到前端
            newsearchhitory.push('<li>'+searchHistory[i]+'</li>')
        }
    }
    //如何记录搜索历史·每次点击提交按钮 吧input.value 的参数传到新数组里面push方法
    // 然后记录到后台数据在用我这个模拟的后台数据方法出来 获取ul里面的子元素个数超过的删除
    // 如何删除呢超个数return给他切除不让在添加进去
    // if（获取的li个数==指定个数）{
    //         然后停止循环插入li即可新的搜索记录添加到后台数据的第一个索引位置就可以实现新手所的记录在第一个li里面1
    // }





       var str=newsearchhitory.join('')//join跟个以参数里面的分割并且返回为字符串
    // alert(newsearchhitory)测试参数数据
  // console.log(str);
    // alert(val)
    // if (searchhistorytopul.children[0]){
    //     searchhistorytopul.removeChild(searchhistorytopul.children[0])
    // }
    //HierarchyRequestError: Node cannot be inserted at the specified point in the hierarchy
    //他出现这个问题是因为我根本就没创新的ul容器所以不会出现下面创建ul的情况但是之后的参数也没用了
    if (searchhistorytop.children[0]){
        searchhistorytop.removeChild(searchhistorytop.children[0])
    }
   // var searchhistorytop=document.getElementsByClassName('search-history-top')[0]

    //为了模拟百度这个先不删除
    if(inputLl.value==='' || newsearchhitory.length===0){
        return

    }


    // if(inputLl.value.length===0 || newsearchhitory.length===0){
    //     return
    //
    // }
     // searchhistorytopul.innerHTML=str
     // searchhistorytopul.appendChild(searchhistorytopul)
    var ul=document.createElement("ul");
    ul.innerHTML=str;
    searchhistorytop.appendChild(ul)
    //鼠标悬浮隔行变色
//获取li标签
    var searchhili=searchhistorytop.children[0].children
    for (var i=0;i<searchhili.length;i++){

        searchhili[i].onmouseover=function(){
            for (var i=0;i<searchhili.length;i++){
                searchhili[i].style.backgroundColor=''
            }
            this.style.backgroundColor='#F0F0F0'
        }
    }




   }

//但是现在出现一个情况就是input数据为空他也会输出记录所以我要清除他的数据


// // alert(newsearchhitory)测试参数数据
// // console.log(str);
// // alert(val)
// var ul=document.createElement("ul");
// ul.innerHTML=str;
// // searchhistorytopul.innerHTML=str
// searchhistorytop.appendChild(ul)
//点击关闭按钮关闭历史记录
// 获取事件源
var closehistory=document.getElementById('search-history-bottom-span')
var searchhistory=document.getElementsByClassName('search-history')[0]
closehistory.onclick=function(){
    searchhistory.style.display='none'
  }


//获取焦点出现历史记录 失去焦点隐藏 默认是隐藏的

inputLl.onfocus=function () {
    inputLl.style.border='1px solid #4791FF';
    inputLl.style.borderRight='';
    searchhistory.style.display='block';
}
inputLl.onblur=function () {
    inputLl.style.border='1px solid #ccc'
    inputLl.style.borderRight=''
    searchhistory.style.display='none';
}

//foot脚步网址分配
var   tetxIntheline=document.getElementsByClassName('tetx-In-the-line')
var httpfoot='https://www.baidu.com/cache/sethelp/help.html|http://home.baidu.com/|http://ir.baidu.com/phoenix.zhtml?c=188488&p=irol-irhome' +
    '|http://e.baidu.com/?refer=888|https://www.baidu.com/duty/|http://jianyi.baidu.com/|http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001';
    var httpfootarr=httpfoot.split('|')
// console.log(httpfootarr);
    for (var i=0;i<httpfootarr.length;i++){
       httpicon(tetxIntheline[i],httpfootarr[i])
    }