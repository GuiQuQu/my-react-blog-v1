import React, { Component } from 'react';

// import "./CategoryList.css"

import Folder from './Folder';
import File from './File';

class CategoryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : {
                0:{id:0,value:"root",children:[1,5,7,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},
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
                12:{id:12,value:"快速排序算法",href:"www.baidu.com"},
                13:{id:13,value:"快速排序算法",href:"www.baidu.com"},
                14:{id:14,value:"快速排序算法",href:"www.baidu.com"},
                15:{id:15,value:"快速排序算法",href:"www.baidu.com"},
                16:{id:16,value:"快速排序算法",href:"www.baidu.com"},
                17:{id:17,value:"快速排序算法",href:"www.baidu.com"},
                18:{id:18,value:"快速排序算法",href:"www.baidu.com"},
                19:{id:19,value:"快速排序算法",href:"www.baidu.com"},
                20:{id:20,value:"快速排序算法",href:"www.baidu.com"},
                21:{id:21,value:"快速排序算法",href:"www.baidu.com"},
                22:{id:22,value:"快速排序算法",href:"www.baidu.com"},
                23:{id:23,value:"快速排序算法",href:"www.baidu.com"},
                24:{id:24,value:"快速排序算法",href:"www.baidu.com"},
                25:{id:25,value:"快速排序算法",href:"www.baidu.com"},
                26:{id:26,value:"快速排序算法",href:"www.baidu.com"},
                27:{id:27,value:"快速排序算法",href:"www.baidu.com"},
                28:{id:28,value:"快速排序算法",href:"www.baidu.com"},
                }
            }
    }
    render() {

        return (
            // 
                <div
                className='category-sider border-box w-full d-lg-block d-none grow sticky-box'
                id='category-sider'>
                <span className='fs-4'>Category</span>
                <hr className="margin-t-3 margin-b-3 h-hr" />
                {this.state.data[0].children.map(nodeId => {
                    let node = this.state.data[nodeId];
                    if (node.children)
                        return <Folder data={this.state.data} key={node.id} id={node.id} value={node.value} layer={parseInt("0")} treeChildren={node.children}/>
                    else
                        return <File key={node.id} id={node.id} value={node.value} layer={parseInt("0")} href={node.href} />
                })}
                </div>
        );
    }
}
 
export default CategoryList;