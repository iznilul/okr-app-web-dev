<template>
  <div id="blog">
    <Button id="back" type="primary" @click="back">返回</Button>
    <Card id="content" shadow="true">
      <div slot="title">
        <p>No border title</p>
        <p>
          Content of no border type. Content of no border type. Content of no border type. Content of no border type.
        </p>
      </div>
      <div id="message">
        <span>shit</span>
        <Divider type="vertical" />
        <span>fuck</span>
        <Divider type="vertical" />
        <span>ass</span>
      </div>
      <div class="tags">
        <Tag v-for="item in tagList" :key="item" :name="item">{{ item }} </Tag>
      </div>
      <Divider />
      <div id="preview"></div>
      <Divider />
      <div id="comment">
        <h2>评语</h2>
        <Input disabled v-model="comment" type="textarea"></Input>
      </div>
    </Card>
  </div>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'blog',
  data() {
    return {
      blogId: null,
      tagList: ['123', '12'],
      comment: 'oh i am a fucking shit',
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    console.log(this.blogId)
  },
  mounted() {
    this.renderMarkdown(
      '<hr />\n' +
        '<p>title: 自动脚本订舱\n' +
        'date: 2021-05-21\n' +
        'tags:</p>\n' +
        '<ul>\n' +
        '<li>python</li>\n' +
        '<li>爬虫</li>\n' +
        '</ul>\n' +
        '<hr />\n' +
        '<h1>python+selenium实现自动订舱</h1>\n' +
        '<h2>0x01前言+准备工具</h2>\n' +
        '<p>最近重操旧业想写点爬虫，感受一下刚上大学用python敲出hello world的那段时光</p>\n' +
        '<p><a href="https://github.com/iznilul/magicargoSpider">github</a></p>\n' +
        '<p>浏览器：chrome91.0及其驱动</p>\n' +
        '<p>python3.7+selenium</p>\n' +
        '<p>基于订舱网站 http://www.magicargo.com/#/</p>\n' +
        '<h2>0x02 需求流程</h2>\n' +
        '<p>这次的分析是基于登录账户-》站到站查询-》班列订舱-》填写信息-》下单</p>\n' +
        '<p>打开主页</p>\n' +
        '<p><img src="https://cdn.jsdelivr.net/gh/iznilul/img/1645438557563.png" alt="" /></p>\n' +
        '<p>点击查询可以看到班列信息，点击订舱</p>\n' +
        '<p><img src="https://cdn.jsdelivr.net/gh/iznilul/img/1645438555181.png" alt="" /></p>\n' +
        '<p>在这个页面填上一些货物信息，下单</p>\n' +
        '<p><img src="https://cdn.jsdelivr.net/gh/iznilul/img/1645438563499.png" alt="" /></p>\n' +
        '<p>会有一个验证码，验证通过即可下单</p>\n' +
        '<h2>0x03 分析</h2>\n' +
        '<p>根据这个需求决定写一个自动化脚本比较好，所以采用浏览器模拟请求的方式，动态调试方法</p>\n' +
        '<p>首先在桌面上新建立一个chrome快捷方式，然后再硬盘里准备一个空文件夹</p>\n' +
        '<p>打开快捷方式属性，在后面加上</p>\n' +
        '<p>--remote-debugging-port=5003 --user-data-dir=&quot;D:\\python\\pySelenium&quot;</p>\n' +
        '<p>标识5003为浏览器的调试端口，可以通过访问这个端口控制浏览器</p>\n' +
        '<p>python代码</p>\n' +
        '<pre><code class="language-python">self.options = webdriver.ChromeOptions()\n' +
        'self.options.add_experimental_option(&quot;debuggerAddress&quot;, &quot;127.0.0.1:5003&quot;)      #调试方法启动浏览器\n' +
        'self.driver = webdriver.Chrome(options=self.options)\n' +
        '</code></pre>\n' +
        '<p>这样就可以，动态的调试浏览器，不用像以前那样用selenium每次运行都得重启啦</p>\n' +
        '<h3>登录</h3>\n' +
        '<p>登录可以设置cookies解决，而且因为是用浏览器请求，只要在第一次登录网站的时候登录一次，浏览器就可以保存cookies到本地</p>\n' +
        '<p><img src="https://cdn.jsdelivr.net/gh/iznilul/img/1645438558111.png" alt="" /></p>\n' +
        '<p>而且保质期有一个月，一个月内只要再次登录就能继续延长</p>\n' +
        '<p>为了保险起见我还是把cookies的一些函数写上了，只不过没有调用</p>\n' +
        '<h3>查询</h3>\n' +
        '<p>这一部分比较简单，定位四个元素模拟填入和点击即可</p>\n' +
        '<p><img src="https://cdn.jsdelivr.net/gh/iznilul/img/1645438561105.png" alt="" /></p>\n' +
        '<p>需要注意的点是起始地和目的地需要先<strong>选中元素-》填入部分字段-》再根据提示选择字段</strong>，源代码中有具体步骤</p>\n' +
        '<h3>订舱&amp;填写消息</h3>\n' +
        '<p>点击查询之后回有一个xhr请求耗时比较长需要sleep一会</p>\n' +
        '<p>填写消息时也是最后一个确认checkbox类型需要用js脚本模拟点击</p>\n' +
        '<p>其他都是比较基础的操作，就不一一赘述了</p>\n' +
        '<h3>下单&amp;&amp;滑动验证</h3>\n' +
        '<p>验证码这里需要仔细分析一下</p>\n' +
        '<p>点击下单之后会弹出一张验证码</p>\n' +
        '<p><img src="https://cdn.jsdelivr.net/gh/iznilul/img/1645438563499.png" alt="" /></p>\n' +
        '<p>这种滑动验证一般采用的方法是对比两张图片，计算图像左侧到拼图缺口的距离，然后模拟拉取操作</p>\n' +
        '<h4>坑一</h4>\n' +
        '<p>首先需要得到两张图片，一张背景图一张有缺口的图</p>\n' +
        '<p>可是发现网页元素上只有这一张缺口图，背景图藏在了network选项卡的静态资源请求记录里</p>\n' +
        '<p><img src="https://cdn.jsdelivr.net/gh/iznilul/img/1645438564003.png" alt="" /></p>\n' +
        '<p>网页元素缺口可以用截图的方式保存到本地</p>\n' +
        '<p>这张藏在network选项卡里的图片只好先获取chrome performance日志记录，然后再把base64转码存储</p>\n' +
        '<h4>坑二</h4>\n' +
        '<p>仔细对比两张图片那张缺口的截图图片似乎有问题，因为它最上面总有一个没截完整的细细白条</p>\n' +
        '<p><img src="https://cdn.jsdelivr.net/gh/iznilul/img/1645438565463.png" alt="" /></p>\n' +
        '<p>这样两张图片根本不一样，导致无法定位</p>\n' +
        '<p>只好用裁剪的方式修改了一下</p>\n' +
        '<p><img src="https://cdn.jsdelivr.net/gh/iznilul/img/1645438567983.png" alt="" /></p>\n' +
        '<p>这样就帅多了</p>\n' +
        '<p>然后俺用网上找来的参考代码，结合pillow图像处理的函数，进行了缺图定位和模拟拉取</p>\n' +
        '<p>模拟滑动之后下单完成</p>\n' +
        '<h2>0x04总结+参考资料</h2>\n' +
        '<p>总之还是一个很水的自动化脚本，后续如果需要的话将继续优化</p>\n' +
        '<p>https://cloud.tencent.com/developer/article/1703946</p>\n' +
        '<p>https://www.cnblogs.com/liuhui0308/p/12091810.html</p>\n' +
        '<p>https://www.aneasystone.com/archives/2018/03/python-selenium-geetest-crack.html</p>\n'
    )
  },
  methods: {
    back() {
      this.$router.push('/okr/okrlist')
    },
    renderMarkdown(md) {
      Vditor.preview(document.getElementById('preview'), md, {
        hljs: { style: 'github' },
      })
    },
  },
}
</script>

<style lang="scss">
@import '../style/views/blog';
</style>
