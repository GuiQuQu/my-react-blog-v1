import React from 'react';

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
`;

function MainPage() {
    return ( 
    <div className='min-h-sub-nav border-box pd-t-6 flex flex-d-col justify-ed items-center'>
            {/* main部分 */}
            <div className='w-full flex justify-center grow gap-4 main-container'>
                <CategoryList />
                <Article md={mdContent}/>
            </div>
            {/* 底部 */}
            <Bottom />
    </div>
 );
}

export default MainPage;