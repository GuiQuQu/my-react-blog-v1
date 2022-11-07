import React, { Component } from 'react';

import "./CategoryList.css"

import Folder from './Folder';
import File from './File';

class CategoryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // data : [
            //     {
            //         id:0,value:"深度学习",
            //         children:[
            //             {
            //                 id:1,value:"CNN",children: [
            //                     {id:2,value:"卷积原理",href:"www.baidu.com"},
            //                     {id:3,value:"卷积神经网络的应用", href: "www.baidu.com"},   
            //                     {id:8,value: "文件夹",children:[
            //                         {id:9,value:"卷积原理",href:"www.baidu.com"}
            //                     ]}
            //             ]
            //         }
            //         ]
            //     },
            //     {
            //         id:4,value:"前端",children:[
            //             {id:5,value:"react框架介绍",href: "www.baidu.com"}
            //         ]
            //     },
            //     {
            //         id:6,value:"后端",children:[
            //             {id:7,value:"diango框架的使用",href:"www.baidu.com"}
            //         ]
            //     },
            //     {
            //         id:10,value:"快速排序算法",href:"www.baidu.com"
            //     },
            //     ],
            data : {
                0:{id:0,value:"root",children:[1,5,7,11]},
                1:{id:1,value:"深度学习",children:[2]},
                2:{id:2,value:"CNN",children:[3,4,9]},
                3:{id:3,value:"卷积原理",href:"www.baidu.com"},
                4:{id:4,value:"卷积应用",href:"www.baidu.com"},
                5:{id:5,value:"前端",children:[6]},
                6:{id:6,value:"react入门",href:"www.baidu.com"},
                7:{id:7,value:"后端",children:[8]},
                8:{id:8,value:"django入门",href:"www.baidu.com"},
                9:{id:9,value:"文件夹",children:[10]},
                10:{id:10,value:"文章",href:"www.baidu.com"},
                11:{id:11,value:"快速排序算法",href:"www.baidu.com"},
                }
            }
    }

    render() {

        return (
            <React.Fragment>
                <div className='category d-md-block d-none'>
                <span>Category</span>
                <hr className="category-line" />
                {this.state.data[0].children.map(nodeId => {
                    let node = this.state.data[nodeId];
                    if (node.children)
                    return <Folder data={this.state.data} key={node.id} id={node.id} value={node.value} layer={parseInt("0")} treeChildren={node.children}/>
                    else
                    return <File key={node.id} id={node.id} value={node.value} layer={parseInt("0")} href={node.href} />
                })}
                </div>
            </React.Fragment>
        );
    }
}
 
export default CategoryList;