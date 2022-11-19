import React, { useEffect } from 'react';

import Article from './article/Article';
import CategoryList from './category-list/CategoryList';
import Bottom from "./bottom/Bottom.jsx"
const mdContent = `
# 标题aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

---

**Hello World**

![](https://cdn.acwing.com/media/user/profile/photo/117856_lg_b7be16fb18.jpg)
\`\`\`cpp
#include<iostream>

using namespace std;
int n;
int main() {
    cin >> n;
    cout << n << endl;
    return 0;
}

\`\`\`

$$
H_p(q) = \\sum_x q(x) \\log(\\frac{1}{p(x)}) = - \\sum_x q(x) \\log p(x)
$$

# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# 11
# 12
# 13
# 14
# 15
# 16
# 17
# 18
# 19
# 20
# 21
# 22
# 23
# 24
# 25
# 26
# 27
## 28
### 29
# 30
# 31
## 32
`;

function MainPage() {
    let arriveBottom = false;
    useEffect(() => {
        // console.log(root.scrollHeight,root.clientHeight);
        // console.log(document.body.clientHeight,document.body.scrollHeight); // 总滚动高度
        // console.log(window.innerHeight); // 视口高度
        const handleScroll = (e) => {
            // console.log(window.scrollY,root.scrollTop, document.body.scrollTop);
            // console.log(window.scrollY, document.body.scrollHeight - window.innerHeight);
            // 64 是底部元素高度
            const bottom = document.querySelector("#bottom");
            if (!arriveBottom && window.scrollY >= document.body.scrollHeight - window.innerHeight - bottom.offsetHeight) {
                arriveBottom = true; // 到达底部
                const categorySider = document.querySelector("#category-sider");
                const mdToc = document.querySelector("#md-toc");
                const main = document.querySelector("#main");
                // console.log(categorySider.classList);
                categorySider.classList.remove("sticky-box");
                mdToc.classList.remove("sticky-box");
                main.classList.add("items-ed");
                main.classList.remove("items-st");
            }
            if (arriveBottom && window.scrollY < document.body.scrollHeight - window.innerHeight - bottom.offsetHeight) {
                arriveBottom = false; // 从底部返回
                const categorySider = document.querySelector("#category-sider");
                const mdToc = document.querySelector("#md-toc");
                const main = document.querySelector("#main");
                categorySider.classList.add("sticky-box");
                mdToc.classList.add("sticky-box");
                main.classList.add("items-st");
                main.classList.remove("items-ed");
            }
        }
        window.addEventListener("scroll", handleScroll);
        
        return function() {
            window.removeEventListener("scroll",handleScroll);
        }
    }, []);
    
    return ( 
    <div className='min-h-sub-nav border-box pd-t-6 flex flex-d-col justify-ed items-center'>
            {/* main部分 */}
            <div id="main" className='w-full flex justify-center items-st grow gap-4 main-container'>
                <CategoryList />
                <Article md={mdContent}/>
            </div>
            {/* 底部 */}
            <Bottom />
    </div>
 );
}

export default MainPage;