// 树的叶节点和非叶节点都应该使用li标签
// 树的叶节点应该使用a标签
// 树的非叶节点除了使用a标签展示内容之外,还需要使用<ol> or <ul> 来展示内容
/**
 * 
 * div
 * ul / ol
 * li icon
 * a value,url
 * **/
let render_tree = (root,
                options = {
                    list_type: "ol",
                    list_class: "",
                    item_class: "",
                    link_class: "",
                    callBack: (html) => {}
    }) => {
        // root {value:"内容",children:[子树]}
        let link_class = options.link_class;
        let list_class = options.list_class;
        let item_class = options.item_class;
        let list_type = options.list_type;
        let html = "";
        if (!is_leaf_node(root)) {
            html = `<li ${add_class_tag(item_class)}>
                    <a ${add_class_tag(link_class)} href=${add_href("#")}>${root.value}</a>
                    <${list_type} ${add_class_tag(list_class)}>${root.children.map((child) => {return render_tree(child,options)}).join("")}
                    </${list_type}>
                </li>`
            
        } else {
            html = `<li ${add_class_tag(item_class)}><a ${add_class_tag(link_class)} href=${add_href(root.url)}>${root.value}</a></li>`    
        }
        return html;
    }

let get_tree_html = (root_array,
    options = {
        list_type: "ol",
        list_class: "",
        item_class: "",
        link_class: "",
        callBack: (html) => {}
    }) => {
        let list_type = options.list_type;
        let list_class =options.list_class;
        let html = `<${list_type} ${add_class_tag(list_class)}>
            ${root_array.map((root) => {return render_tree(root,options)}).join("")}
        </${list_type}>`
        options.callBack(html);
    }

let is_leaf_node = (node) => {
        return !node.children
}
let is_vaild_string = (content) => {
    return typeof(content) === "string" && content.length > 0;
}
let add_class_tag = (tag) => {
    return is_vaild_string(tag) ? `class=${tag}` : "";
}
let add_id_tag = (tag) => {
    return is_vaild_string(tag) ? `id=${tag}` : "";
}
let add_href = (url) => {
    return is_vaild_string(url) ? `${url}` : "#";
}

export default get_tree_html;