# joke
> A Vue.js project
本地调试启动：

第零步：代码clone到本地： git clone https://github.com/alminchen/joke-robot.git

第一步：npm install

 a:或者用淘宝的cnpm代理安装会更快，方法是：
 1.安装cnpm：npm install -g cnpm --registry=https://registry.npm.taobao.org 
 2.用cnpm代理npm安装： cnpm install

第二步：npm run dev

第三步：打包：npm run build
打包成功后会在dist文件夹中，这个文件夹内的内容就是部署到服务器上的

**没有在线预览，代码还会更新：

cache.js里边的feath 暂时还好多浏览器不支持。所以在weatrh.vue上换了另外一种写法，就是用的是vue-resource来重新写了一个
