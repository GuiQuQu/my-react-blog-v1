import MarkdownIt from "markdown-it";
import hljs from "highlight.js";


import markdownItSub from  "markdown-it-sub";
import markdownItSup from "markdown-it-sup";
import markdownItEmoji from "markdown-it-emoji";
import markdownItFootnote from "markdown-it-footnote";
import markdownItIns from "markdown-it-ins";
import markdownItMark from "markdown-it-mark";
import markdownItTaskLists from "markdown-it-task-lists";
import markdownItAnchor from "markdown-it-anchor";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import markdownItTexMath from "markdown-it-texmath";
import Katex from "katex"

// import markdownItMultimdTable from "markdown-it-multimd-table"; 表语法插件


// task-lists 任务列表
// anchor 给标题添加anchor,用来生成目录 markdown-it-toc-done-right 做目录
// markdown-it-multimd-table 

/**
 * 目前不支持渲染html代码
 * **/
let md2html=(md,render_toc) => {
  let md_render = new MarkdownIt("default",{
    html: false, // 渲染html代码
    linkify: true, // 自动识别类似url的文本并转换
    typographer: true,
    breaks:true,
    highlight: function(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            `<pre class="hljs"><code>` +
            hljs.highlight(str, {language:lang, ignoreIllegals:true}).value +
            "</code></pre>"
          )
        }
        catch (__) {}
      }
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    },
  })
  .use(markdownItSub) // 下标 H~2~O;
  .use(markdownItSup) // 上标 29^th^
  .use(markdownItEmoji) //表情 :v:
  .use(markdownItFootnote) // 脚注,引用
  .use(markdownItIns) // 下划线 ==ins==
  .use(markdownItMark) // mark ++mark++
  .use(markdownItTaskLists, {
    enabled: true, //使得checkbox可选
    label: true, // 添加label标签
  }) 
  .use(markdownItAnchor,{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' })
  .use(markdownItTocDoneRight, {
    listType: "ul",
    containerClass: "toc-container",
    containerId: "toc-container",
    listClass: "toc-list",
    itemClass: "toc-item",
    linkClass: "toc-link",
    callback: function (html,ast) { //生成目录之后的回调函数
        render_toc(html);
    }
  })
  .use(markdownItTexMath,{
    engine: Katex,
    delimiters: "dollars",
    katexOptions: { macros: {"\\RR": "\\mathbb{R}"} },
    })
  ;
  let html = md_render.render(md);
  // console.log(html);
  return html;
}


export default md2html;