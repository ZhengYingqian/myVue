<template>
<div class="egCSS">
  <h1>项目总结：令牌拍中遇到的样式问题</h1>
  <section>
    <h2>1、两栏布局</h2>
    <p>（1）父元素ul用display:flex,子元素用width:50%</p>
    <div>
      <ul class="cls1">
        <li class="twoClo">
          <img :src='imgUrl' />
          <p>this is a watch</p>
          </li>
        <li class="twoClo">
          <img :src='imgUrl' />
          <p>this is another watch </p>
        </li>
      </ul>
    </div>
     <p>
      (2)设置父元素width:100%,子元素width:50%，对子元素设置display:inline-block
    </p>
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
      <div class="in-wrapper" v-for="(item, i) in dates" :key="item.id">
        <time>{{item.day}}</time>
        <p> {{item.time}} </p>
        <!-- <p>{{item.state}}</p> -->
      </div>
      </div>
    </div>
    <p>
      (2) 父元素width：100%，设置overflow x方向scroll，white-space：nowrap.子元素设固定宽高，设display：inline-block。
    </p>
    <div class="wrapper-1">
      <div class="in-wrapper-1" v-for="(item, i) in dates" :key="item.id">
        <time>{{item.day}}</time>
        <p> {{item.time}} </p>
      </div>
    </div>
    <h2>3、图片：背景图片和装饰图片</h2>
    <p>
      (1) 装饰图片
    </p>
    <p>
      <i class="icon"></i>
      <span>12345</span>
    </p>
    <h2>4、边框：伪类元素添加边框和类添加边框</h2>
    <h2>5、scss语法</h2>
  </section>
</div>
</template>

<script>
export default {
  name: 'egCSS',
  data () {
    return {
      imgUrl: '../static/img/watch.png',
        dates: [
          {"id": 0, "day": "8月15日 ", "time":"10：00", "state": 0},
          {"id": 1, "day": "8月16日 ", "time":"10：00", "state": 1},
          {"id": 2, "day": "8月17日 ", "time":"10：00", "state": 1},
          {"id": 3, "day": "8月18日 ", "time":"10：00", "state": 2},
          {"id": 4, "day": "8月19日 ", "time":"10：00", "state": 2},
          {"id": 5, "day": "8月20日 ", "time":"10：00", "state": 2},
        ],
      items: [
          {
            "id": "1",
            "name": "金镶玉18k金镶嵌钻石冰种",
            "price": "200",
            "audience": "1999999",
            "img": "../../../static/img/watch.png"
          },
          {
            "id": "2",
            "name": "金镶玉18k金镶嵌钻石冰种",
            "price": "200",
            "audience": "1999999",
            "img": "../../../static/img/watch.png"
          },
          {
            "id": "3",
            "name": "金镶玉18k金镶嵌钻石冰种",
            "price": "200",
            "audience": "1999999",
            "img": "../../../static/img/watch.png"
          },
          {
            "id": "4",
            "name": "金镶玉18k金镶嵌钻石冰种",
            "price": "200",
            "audience": "1999999",
            "img": "../../../static/img/watch.png"
          }
        ]
    }
  }
}
</script>
<style scoped>
li {
  list-style: none;
}
ul{
  padding: 0;
}
.cls1{
  display: flex;
}
.twoClo{
  width: 50%;
  background-color: gray;
}
.content{
  overflow: auto;
}
.wrapper{
  width: max-content;
  /* height: 4rem; */
  white-space: nowrap;
}
.in-wrapper{
  width: 5rem;
  float: left;
  height: 4rem;
  background: gray;
}
time{
  width: 5rem;
}
.wrapper-1{
  width: 100%;
  white-space:nowrap;
  overflow-x: scroll;
}
.in-wrapper-1{
  display:inline-block;
  width:4rem;
  height:4rem;
  background:gray;
  border-right:2px solid blue;
}
.list{
  width: 100%;
}
.item{
  width: 50%;
  display: inline-block;
}

.icon{
  /* background: url("../../../static/img/hore.png") no-repeat 17px 27px */
}
</style>
<style lang="scss" scoped>

</style>
