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
    render_toc(html) {
        let catalog = document.querySelector("#md-toc");
        catalog.innerHTML += html;
    }
    render() {
        return (
            <React.Fragment>
                {/* top */}
                {/* <div className="content-top">
                    <a className='edit-btn' href='www.baidu.com'>编辑文档</a>
                </div> */}
                {/* md-body */}
                <div className='markdown-body border-box md-container white-card w-full pd-8' id="md-body"></div>
                {/* toc */}
                <div className="all-toc-container sticky-box d-xl-block d-none border-box 
                        white-card pd-4 thin-gray-scroll" id="md-toc">
                    <span className='color-60-gray'>On this Page</span>
                    <hr className="margin-b-2 margin-t-2" />
                </div>

            </React.Fragment>
        );
    }

    componentDidMount() {
        this.render_md()
    }

}

export default Article;