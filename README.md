
此项目开源API接口已经失效。不能观看效果
































# joke-robot
> A Vue.js project

本地调试启动步骤：

第零步：代码clone到本地： git clone https://github.com/alminchen/joke-robot.git

第一步：安装：npm install

 或者用淘宝的cnpm代理安装会更快，方法是：
 
 1.安装cnpm：npm install -g cnpm --registry=https://registry.npm.taobao.org 
 
 2.用cnpm代理npm安装： cnpm install

第二步：运行本机：npm run dev

（npm run dev 运行起来的话）可以在浏览器输入：localhost:8088来打开页面

第三步：打包：npm run build

打包成功后会在dist文件夹中，这个文件夹内的内容就是部署到服务器上的

项目说明：

*1. 在vue的基础上开发的

*2. 方便管理，简单易懂

*3. vuex是用在“智能机器人”对话的时候

*4. 也是为了熟悉下vue的流程，功能上不太复杂

*5. 样式用了sass，在移动适配用了‘rem方案’

*6. 页面加载更多有两种方式，一个是下拉自动加载，用的是自定义指令的方式，另外一种是点击加载（这个已经隐藏，想看效果的删除指令的方式来查看）

**没有在线预览

**代码提示：cache.js里边的feath 暂时还好多浏览器不支持。所以在messageList.vue上换了另外一种写法，就是用的是vue-resource的this.$http(xxx)重新写了个,因此还要单独再 npm/cnpm install vue-resource 一次

**在机器人聊天的（robot）页面的接口也是一个免费的接口，因此有个跨域的问题，可以使用谷歌的扩展插件 Access-Control-Expose-Headers 来实现想要的效果。

