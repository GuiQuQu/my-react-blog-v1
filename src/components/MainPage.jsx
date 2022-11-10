import React from 'react';

import Article from './article/Article';
import CategoryList from './category-list/CategoryList';
import Bottom from "./bottom/Bottom.jsx"
const mdContent = `
# 标题

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
`;

function MainPage() {
    return ( 
    <React.Fragment>
            <div className='main-warpper'>
                <CategoryList />
                <Article md={mdContent}/>
            </div>
            <Bottom />
    </React.Fragment>
 );
}

export default MainPage;