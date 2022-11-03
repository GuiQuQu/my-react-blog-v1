import React, { Component } from 'react';

import "./CategoryList.css"

import tree2list from "../../utils/tree2list"
/**
 * 数据的格式
 * node {value:"value",children:[node1,node2,...]}
 * 叶节点用a标签
 * 有子节点非叶节点用summary标签
 * 
 * <>
 * **/
class CategoryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    value : "Deep Learning",
                    class: "toggle",
                    children :[
                        {
                            value: "CNN",
                            class: "toggle",
                            children: [
                                {
                                    value: "CNN详解1",
                                    url: "www.baidu.com",
                                },
                                {
                                    value: "CNN详解2",
                                    url: "www.baidu.com",
                                }
                            ]
                        }
                    ]
                },
                {
                    value: "前端",
                    class: "toggle",
                    children: [                
                        {
                        value: "前端文章1",
                        url: "www.baidu.com",
                        },
                    ]
                },
                {
                    value: "后端",
                    class: "toggle",
                    children: [
                        {
                            value: "后端文章1",
                            url: "www.baidu.com",
                        },
                    ]
                },
                {
                    value: "单独文章1",
                    url: "www.baidu.com",
                }  
            ],
        }
    }

    render_category = () => {
        
        tree2list(this.state.data,{
            list_type: "ul",
            list_class: "category-list",
            item_class: 'category-item',
            link_class: "category-link",
            callBack: (html) => {
                let div_block = document.querySelector(".category");
                div_block.innerHTML += html;
            }
        })
    }

    componentDidMount() {
        this.render_category()
    }
    render() {

        return (
            <React.Fragment>
                <div className='category d-md-block d-none'>
                <span>Category</span>
                <hr className="md-toc-line" />
                
                </div>
            </React.Fragment>
        );
    }
}
 
export default CategoryList;