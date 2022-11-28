import React, { createContext } from 'react';

import "./App.css"

import NavBar from './navbar/navBar.jsx';
import ArticleCategory from './article-category/ArticleCategory';
import MainPage from './MainPage';
import EditPage from "./EditPage";
import { Route, Routes } from 'react-router-dom';

const categoryTreeContext = createContext(null);
const UserContext = createContext(null);

function App() {
    const categoryTree = {
        0: { id: 0, value: "root", children: [1, 5, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        1: { id: 1, value: "深度学习", children: [2], author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        2: { id: 2, value: "CNN", children: [3, 4, 9], author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        3: { id: 3, value: "卷积原理", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        4: { id: 4, value: "卷积应用", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        5: { id: 5, value: "前端", children: [6], author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        6: { id: 6, value: "react入门", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        7: { id: 7, value: "后端", children: [8], author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        8: { id: 8, value: "django入门", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        9: { id: 9, value: "文件夹", children: [10], author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        10: { id: 10, value: "文章", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        11: { id: 11, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        12: { id: 12, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        13: { id: 13, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        14: { id: 14, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        15: { id: 15, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        16: { id: 16, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        17: { id: 17, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        18: { id: 18, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        19: { id: 19, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        20: { id: 20, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        21: { id: 21, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        22: { id: 22, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        23: { id: 23, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        24: { id: 24, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        25: { id: 25, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        26: { id: 26, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        27: { id: 27, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
        28: { id: 28, value: "快速排序算法", href: "www.baidu.com", author: "王科龙", lastModifyTime: "2022-11-28 16:04" },
    };
    return (<div className='w-full h-full 
        flex flex-d-col bg-light-gray'>
        <NavBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/category" element={
                <UserContext.Provider value={"王科龙"}>
                    <categoryTreeContext.Provider value={categoryTree}>
                        <ArticleCategory name={categoryTree[0].value} 
                            id={categoryTree[0].id} 
                            treeChildren={categoryTree[0].children} 
                            author={categoryTree[0].author} />
                    </categoryTreeContext.Provider>
                </UserContext.Provider>
            } />
        </Routes>
    </div>);
}

export default App;

export {
    categoryTreeContext,
    UserContext,
}