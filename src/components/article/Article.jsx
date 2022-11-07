import React, { Component } from 'react';
import './Article.css'
import md2html from '../../utils/md2html';
import "github-markdown-css/github-markdown.css";
import "highlight.js/styles/stackoverflow-light.css";
import "katex/dist/katex.css"; //还需要设置一下字体

class Article extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "md": this.props.md,
        }
    }

    render_md() {
        let md_body = document.querySelector(".markdown-body");
        md_body.innerHTML += md2html(this.props.md, this.render_toc);
    }
    render_toc (html) {
        let catalog = document.querySelector(".md-toc");
        catalog.innerHTML += html;
    }
    render() {
        return (
            <React.Fragment>
                        <div className="content">
                            <div className="content-top">
                                <a className='edit-btn' href='www.baidu.com'>编辑文档</a>
                            </div>
                            <div className='markdown-body'></div>
                        </div>
                        <div className="md-toc d-xl-block d-none">
                            <span>On this Page</span>
                            <hr className="md-toc-line" />
                        </div>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.render_md()
    }

}

export default Article;