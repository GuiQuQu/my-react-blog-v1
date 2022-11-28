import React,{ useContext } from 'react';
import { categoryTreeContext } from "../App";
import ArticleCard from './ArticleCard';
import CategoryCard from './CategoryCard';
/**
 * 生成这个组件需要传入的信息
 * 1.非叶节点的名字
 * 2.该节点的所有直接子节点的全部信息
 * 
 * ArticleCategory这个组件用来展示某一个非叶节点下面的内容,也允许修改
 * Article组件用来展示某一个叶节点下面的内容,也允许修改
 * **/

function ArticleCategory(props) {
    const name = props.name;
    // const id = props.id;
    const children = props.treeChildren; // id array
    const CategoryTree = useContext(categoryTreeContext);

    return ( <div className='category-container-warrper w-full flex justify-center'>
        <div className='category-container white-card pd-6 w-full'>
            <div>{name}</div>
            {children.map((nodeId) => {
                const node = CategoryTree[nodeId];
                if (node.children) {
                    return <CategoryCard key={nodeId} name={node.name} id={node.id}
                    treeChildren={node.treeChildren} author={node.author} lastModifyTime={node.lastModifyTime}
                    ></CategoryCard>
                }
                else {
                    
                }
            })}
        </div>
    </div> );
}

export default ArticleCategory;
