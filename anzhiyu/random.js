var posts=["2025/06/08/Markdown上下标/","2025/07/03/从零开始搭建个人博客/","2025/07/02/npm命令语法不正确/","2025/07/03/优化主题/","2025/06/07/字符编码/","2025/07/02/安装node.js和Hexo/","2025/07/02/设置next主题/","2025/07/01/购买域名/","2025/07/02/解析域名/","2025/07/05/优化主题anzhiyu/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };