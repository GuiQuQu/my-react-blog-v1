import React, { useEffect } from 'react';

import MdEditor from "./editor/Editor.jsx";

const mdContent = `
[TOC]

# 标题

**Hello World**

测试内容,占用阿三顶顶第哦啊算法i啊沙发沙发

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

# 123
`;

function EditPage() {
    // useEffect(() => {
    //     const body = document.querySelector("body");
    //     body.style.overflowY = "hidden";
    //     return function() {
    //         body.style.overflowY = "auto";
    //     }
    // }, []);
      // border-box flex justify-center overflow-hidden w-full h-full min-w-0 pd-t-8
    return (<div className="border-box flex w-full min-h-sub-nav justify-center grow pd-t-8">
        <MdEditor
            title={"测试文章"}
            value={mdContent} />
    </div>);
}

export default EditPage;