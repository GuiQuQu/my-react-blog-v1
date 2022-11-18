import React, { useEffect } from 'react';

import MdEditor from "./editor/Editor.jsx";

const mdContent = `
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
`;

function EditPage() {
    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflowY = "hidden";
        return function() {
            body.style.overflowY = "auto";
        }
    }, []);
    return (<div className="w-full">
        <MdEditor
            title={"测试文章"}
            value={mdContent} />
    </div>);
}

export default EditPage;