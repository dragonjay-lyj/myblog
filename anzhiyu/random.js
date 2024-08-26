<<<<<<< HEAD
var posts=["e72792221588/","a718d92a0f3a/"];function toRandomPost(){
=======
var posts=["e72792221588/"];function toRandomPost(){
>>>>>>> a184133104e23d2c987fad926d78364896ee5eae
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","hundredSuffix":"","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"小丁的屋舍","hundredSuffix":"","link":"https://xding.top/","avatar":"https://xding.top/face.png","descr":"谈笑有鸿儒，往来无白丁","siteshot":null},{"name":"应龙笔记","hundredSuffix":"","link":"https://www.silverdragon.cn/","avatar":"https://www.silverdragon.cn/favicon.ico","descr":"应龙笔记是一个专注于知识分享的网站"},{"name":"Android","hundredSuffix":"","link":"https://android99.com","avatar":"https://android99.com/img/avatar.png","descr":"边缘矩阵"},{"name":"iMaeGoo’s Blog","hundredSuffix":"","link":"https://www.imaegoo.com","avatar":"https://www.gravatar.com/avatar/05bb2aa29c9da6ef65fabd321135e7b6?s=128","descr":"虹墨空间站"},{"name":"freejishu的美丽世界","hundredSuffix":"","link":"http://www.freejishu.com","avatar":"https://cdn-p.freejishu.com/img/2022/01/19/gNxI.jpg","descr":"A New World"},{"name":"MUKAPP","hundredSuffix":"","link":"https://www.mukapp.top/","avatar":"https://www.mukapp.top/pic/muk/large.webp","descr":"MUK的小窝"},{"name":"本当迷博客","hundredSuffix":"","link":"https://www.bdmcom.cn","avatar":"https://www.bdmcom.cn/usr/themes/handsome/assets/img/favicon.ico","descr":"人丑嘴不甜长得唠嗑还没钱的00后博客"},{"name":"咕咕三原小窝","hundredSuffix":"","link":"https://咕咕三原.wang","avatar":"https://akaik2233-1257232308.cos-website.ap-guangzhou.myqcloud.com/img/gugusanyuan.jpg?s=220&r=X&d=mm","descr":"记录美好，赠与未来。"},{"name":"rencai","link":"https://btrencai.top","avatar":"https://picbed.btrencai.top/rencai.4b3i8vcj8vo.webp","descr":"今天你学了么"},{"name":"神经蛙","link":"https://hexo.sjava.cn/","avatar":"https://hexo.sjava.cn/img/pic.png","descr":"种一棵树最好的时间是十年前，其次是现在。"},{"name":"葱苓sama","link":"https://blog.ciraos.top","avatar":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.webp","descr":"Dare && Do"},{"name":"煮雪话河山`Blog","link":"https://blog.cent1pedee.top/","avatar":"https://img.cent1pedee.top/img/wechat.jpg","descr":"如月之恒，如日之升。"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };