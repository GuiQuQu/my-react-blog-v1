import React, { useMemo , useContext} from 'react';

// import { categoryTreeContext} from '../App';
/**
    根据提供的内容展示非叶节点或者叶节点的预览内容
 */
function CategoryCard(props) {
    const name = useMemo((() => {return props.name}), [props.name]);
    // const id = useMemo(() => {return props.id}, [props.id]);
    const treeChildren = useMemo(() => {return props.treeChildren}, [props.treeChildren]);
    const author = useMemo(() => {return props.author}, [props.author]);
    const lastModifyTime = useMemo(() => {return props.lastModifyTime}, [props.lastModifyTime]);
    // const categoryTree = useContext(categoryTreeContext);
    return ( 
    <div>
        <div>{name}</div>
        <div>{`共有${treeChildren.length}个项目`}</div>
        <div>
            <span>{`作者:${author}`}</span>
            <span>{`修改时间:${lastModifyTime}`}</span>
        </div>
    </div> 
    );
}

export default CategoryCard;