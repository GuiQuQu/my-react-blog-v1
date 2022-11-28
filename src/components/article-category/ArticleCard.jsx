import React, { useMemo, useContext} from 'react';
import { categoryTreeContext } from '../App';
import { Link } from 'react-router-dom';

/**
 * 传入的数据
 * 1.name 文章标题
 * 2.id 文章id
 * 3.
 * 4.author 文章作者
 * 5.lastmodifyTime 最后一次修改的时间(后端通过读取文件获取,不在数据库中存)
 * 请求文章内容可以直接使用id
 * **/

function ArticleCard(props) {
    const name = useMemo((() => {return props.name}), [props.name]);
    // const id = useMemo(() => {return props.id}, [props.id]);
    const articleHref = useMemo(() => {return props.href});
    const author = useMemo(() => {return props.author}, [props.author]);
    const lastModifyTime = useMemo(() => {return props.lastModifyTime}, [props.lastModifyTime]);
    const categoryTree = useContext(categoryTreeContext);
    return ( <div>
        <Link to={`abc`}>
            <div>{name}</div>
            <div></div>
        </Link>
    </div> );
}

export default ArticleCard;