<template>
<div class="egCSS">
  <h1>项目总结：令牌拍中遇到的样式问题</h1>
  <section>
    <h2>1、两栏布局</h2>
    <p>（1）父元素ul用display:flex,flex-wrap：wrap,子元素用width:50%</p>
    <p>另：子元素justfy-content：flex-start（默认）左对齐， center 居中 space-around项目间隔一致，space-between两端对齐 </p>
    <div>
      <ul class="cls1">
        <li v-for="item in items" :key= item.id class="twoClo">
          <img :src="item.img">
          <p>{{item.name}}</p>
          </li>
      </ul>
    </div>
     <p>
      (2)设置父元素width:100%,子元素width:50%，对子元素设置display:inline-block</p>
    <div class="list">
    <div v-for="item in items" :key= item.id class="item">
      <img :src="item.img">
      <p>{{item.name}}</p>
    </div>
    </div>
    <h2>2、无缝滚动</h2>
    <p>(1) 父元素width设为max-content，设置overflow x方向scroll，white-space：nowrap.子元素为float：left</p>
    <div class="content">
      <div class="wrapper">
      <div class="in-wrapper" v-for="(item) in dates" :key="item.id">
        <time>{{item.day}}</time>
        <p> {{item.time}} </p>
        <!-- <p>{{item.state}}</p> -->
      </div>
      </div>
    </div>
    <p>
      (2) 父元素width：100%，设置overflow x方向scroll，white-space：nowrap.子元素设固定宽高，设display：inline-block。
    </p>
    <div class="content">
    <div class="wrapper-1">
      <div class="in-wrapper-1" v-for="(item) in dates" :key="item.id">
        <time>{{item.day}}</time>
        <p> {{item.time}} </p>
      </div>
    </div>
    </div>
    <h2 id='route'>3、背景图片</h2>
    <p>
      (1) 内容覆盖图片:父元素position：relative，对文本设置position：absolute，用left/top/bottom进行定位，图片用img标签引用
    </p><p>子元素设定宽和text-align可以使文本居中显示</p>
     <!-- <p>图片加absolute的话，文本需要加z-index</p> -->
    <div class="img-wrapper">
      <h3 class="head" style="width:200px">header</h3>
      <p class="foot"> footer </p>
      <img src='../../static/img/bg.png'>
    </div>
    <p>(2)内容覆盖背景图片：在内容覆盖图片基础上，对父元素设置background，url为对应img地址（此处省略其余css规则）</p>
    <div class="img-wrapper-1">
      <h3 class="head" style="width:150px">header</h3>
      <p class="foot">footer</p>
      <img src='../../static/img/bg.png'>
    </div>
    <h2 id='route'>4、行内icon图片</h2>
    <p>(1) display:inline-block，固定宽高，background:url(图片路径),vertical-align：设置top、middle、bottom进行垂直定位</p>
    <p>
      <i class="icon "></i>
      <span>12345</span></p>
    <p>(2) padding-left设置宽度，font-size设置高度，background:url(图片路径),vertical-align：设置top、middle、bottom进行垂直定位
      <p>
       <i class="icon-1 "></i>
      <span>12345</span></p>
    <h2>5、边框</h2>
    <p>(1) 添加外部边框: 对父元素设置宽高，设置border的color、style等属性
    </p><p>对内部文本添加边框：display：inline-block，再设置border属性</p>
    <div class="border-right">
      <p class="border">text</p>
    </div>
    <p>(2) 伪类添加箭头 &nbsp;<a href="http://www.cssarrowplease.com/"><small>(小工具)</small></a></p>
    <p></p>
    <div>
      <p class="border arrow">arrow</p>
    </div>
    <h2>6、scss语法</h2>
    <p>这个之前总结过，详情见<a href='https://www.jianshu.com/p/412d11c93ba5'>简书</a></p>
  </section>
</div>
</template>

<script>
export default {
  name: "egCSS",
  data() {
    return {
      imgUrl: "../static/img/watch.png",
      dates: [
        { id: 0, day: "8月15日 ", time: "10：00", state: 0 },
        { id: 1, day: "8月16日 ", time: "10：00", state: 1 },
        { id: 2, day: "8月17日 ", time: "10：00", state: 1 },
        { id: 3, day: "8月18日 ", time: "10：00", state: 2 },
        { id: 4, day: "8月19日 ", time: "10：00", state: 2 },
        { id: 5, day: "8月20日 ", time: "10：00", state: 2 }
      ],
      items: [
        {
          id: "1",
          name: "This is a watch",
          price: "200",
          audience: "1999999",
          img: "../../../static/img/watch.png"
        },
        {
          id: "2",
          name: "This is a watch",
          price: "200",
          audience: "1999999",
          img: "../../../static/img/watch.png"
        },
        {
          id: "3",
          name: "This is a watch",
          price: "200",
          audience: "1999999",
          img: "../../../static/img/watch.png"
        },
        {
          id: "4",
          name: "This is a watch",
          price: "200",
          audience: "1999999",
          img: "../../../static/img/watch.png"
        }
      ]
    };
  },
  methods: {
    goAnchor(selector) {
      var anchor = this.$el.querySelector(selector);
      document.documentElement.scrollTop = anchor.offsetTop;
    }
  }
  // mounted(){
  // this.goAnchor("#route");
  // }
};
</script>
<style scoped>
li {
  list-style: none;
}
ul {
  padding: 0;
}
.cls1 {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center */
}
.twoClo {
  width: 50%;
  background-color: gray;
}
.content {
  overflow: auto;
  height: 4rem;
}
.wrapper {
  width: max-content;
  /* height: 4rem; */
  white-space: nowrap;
  overflow: hidden;
  overflow-x: scroll;
}
.in-wrapper {
  width: 5rem;
  float: left;
  height: 4rem;
  background: gray;
}
time {
  width: 5rem;
}
.wrapper-1 {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  overflow-x: scroll;
}
.in-wrapper-1 {
  display: inline-block;
  width: 4rem;
  height: 4rem;
  background: gray;
}
.list {
  width: 100%;
}
.item {
  width: 50%;
  display: inline-block;
}

.icon {
  width: 17px;
  height: 27px;
  display: inline-block;
  background: url("./../../static/img/hore.png") no-repeat center center;
  vertical-align: top;
}

.vAlingTop {
  vertical-align: top;
}

.icon-1 {
  padding-left: 17px;
  font-size: 27px;
  /* vertical-align: top; */
  line-height: 30px;
  background: url("./../../static/img/hore.png") no-repeat center center;
}

.img-wrapper {
  position: relative;
  text-align: start;
  height: 200px;
  color: aliceblue;
}
.head {
  position: absolute;
  /* left: 20px; */
  top: 0;
  text-align: center;
  /* z-index: 1; */
}
.foot {
  position: absolute;
  bottom: 10px;
  left: 0;
  padding-left: 10px;
  /* z-index: 1; */
}
.img-wrapper img {
  /* position: absolute; */
  width: 200px;
  height: 200px;
  left: 0;
}

.img-wrapper-1 {
  position: relative;
  width: 150px;
  height: 250px;
  background: url("./../../static/img/backgroud.png") no-repeat center center;
  color: palevioletred;
}

.img-wrapper-1 img {
  /* position: absolute; */
  width: 150px;
  height: 150px;
  left: 0;
}
.border{
  display: inline-block;
  padding: 0 10px;
  border: solid 1px #88b7d5;
}
.border-right{
  height: 50px; width: 200px;
  border-right: #88b7d5 solid 1px;
}
.arrow{
 position: relative;
	background: #88b7d5;
}
.arrow:after{
  bottom: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: rgba(136, 183, 213, 0);
	border-bottom-color: #88b7d5;
	border-width: 5px;
	margin-left: -5px;
}
</style>
<style lang="scss" scoped>
</style>
