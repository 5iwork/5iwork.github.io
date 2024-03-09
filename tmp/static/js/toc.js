var toctitle = document.getElementById('toctitle');
var path = window.location.pathname;
if (toctitle != null) {
    var oldtoc = toctitle.nextElementSibling;
    var newtoc = document.createElement('div');
    newtoc.setAttribute('id', 'tocbot');
    newtoc.setAttribute('class', 'js-toc desktop-toc');
    oldtoc.setAttribute('class', 'mobile-toc');
    oldtoc.parentNode.appendChild(newtoc);
    tocbot.init({
        contentSelector: '#content',
        headingSelector: 'h1, h2, h3, h4, h5',
        positionFixedSelector: 'body',
        fixedSidebarOffset: 50,
        smoothScroll: false
    });
    if (!path.endsWith("index.html") && !path.endsWith("/")) {
        var link = document.createElement("a");
        if (document.getElementById('index-link')) {
          indexLinkElement = document.querySelector('#index-link > p > a');
          linkHref = indexLinkElement.getAttribute("href");
          link.setAttribute("href", linkHref);
        } else {
          link.setAttribute("href", "index.html");
        }
        link.innerHTML = "<span><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></span> 返回";
        var block = document.createElement("div");
        block.setAttribute('class', 'back-action');
        block.appendChild(link);
        var toc = document.getElementById('toc');
        var next = document.getElementById('toctitle').nextElementSibling;
        toc.insertBefore(block, next);
    }
}

var domain = document.domain?document.domain:"5i.work";
var toctitle = document.getElementById('footer-text');
if (toctitle != null) {
    toctitle.insertAdjacentHTML("beforeend", " © 2024 <a href='/'>" + domain + "</a> | <a style='font-size:14px;' href='http://www.beian.miit.gov.cn/'>浙ICP备15019268号-1</a>")
}

