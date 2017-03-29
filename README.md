# joke
> A Vue.js project
本地调试启动：

第零步：代码clone到本地： git clone https://github.com/alminchen/joke-robot.git

第一步：安装：npm install

 a:或者用淘宝的cnpm代理安装会更快，方法是：
 1.安装cnpm：npm install -g cnpm --registry=https://registry.npm.taobao.org 
 2.用cnpm代理npm安装： cnpm install

第二步：运行本机：npm run dev

（npm run dev 运行起来的话）可以在浏览器输入：localhost:8088来打开页面

第三步：打包：npm run build

打包成功后会在dist文件夹中，这个文件夹内的内容就是部署到服务器上的

**没有在线预览，代码提示：cache.js里边的feath 暂时还好多浏览器不支持。所以在weather.vue上换了另外一种写法，就是用的是vue-resource的this.$http(xxx)重新写了个,因此还要单独再 npm install vue-resource 一次
