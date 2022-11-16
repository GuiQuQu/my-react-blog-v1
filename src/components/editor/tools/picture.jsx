import picLogo from "../toolbar-svg/image.svg";

//按钮是上传功能
//然后还需要修改ctrl+v粘贴,如果剪切板内容是图片,则将图片上传,获取得到url之后返回对应的md表示
/**
 * 1.这个按钮需要解决访问本地资源管理器,获取选中的图片,然后将其传入图床或者是服务器,并且返回可以访问图片的url,在md中生成图片
 * Q1 button 的单击事件本身无法使用本地资源管理器,我们需要使用input标签,那么input标签放的位置我们需要得知
 * 目前的实现没有上传图片,采用的是本地的url,上传在线图片需要和图床交互
 * 
 * 2.复制功能需要访问剪切板,找到剪切板中的图片,将其传入图床或者是服务器,并且返回可以访问图片的url,在md中生成图片
 * 修改textarea的onpaste事件,如果粘贴内容是图片的话,做特殊处理
 * **/

const Picture = {
    title: "picture",
    svg: picLogo,
    hint: "图片",
    excute: (api) => { //btn单击事件执行

        let input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.multiple = true;
        input.click();
        
        const handleFileChange = (e) => {
            const files = input.files;
            console.log(files);
            const state = api.getTextAreaState();
            let modifyText = "";
            for (let i = 0; i < input.files.length; ++i) 
            {
                var file = files[i];
                var imageType = /^image\//;
            
                if (!imageType.test(file.type)) {
                  continue;
                }
                const imgSrc = window.URL.createObjectURL(files[i]);
                modifyText += `![](${imgSrc})\n`;
            }
            let cursorPosition = state.selection.end + modifyText.length;
            if (modifyText.length > 0) {
                api.replaceSelection(modifyText);
                api.setSelectionRange(cursorPosition,cursorPosition);
            }
            input.removeEventListener("change",handleFileChange);
        } 
        input.addEventListener("change", handleFileChange);
    },
    codeKey: [],
}

export default Picture; 