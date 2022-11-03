import React, { Component } from 'react';

import "./App.css"
import Article from './article/Article';
import NavBar from './navBar/navBar.jsx'; 
import Bottom from "./bottom/Bottom.jsx"
import CategoryList from './category-list/CategoryList';
class App extends Component {
    state = {  } 

    get_md() {
        let md_content = "# 标题1\n # 标题2\n  ## 标题2.1\n ### 标题2.1.1\n `hello world`\n";
        // let md_content = "# markdown-it rulezz!\n\n${toc}\n## with markdown-it-toc-done-right rulezz even more!";
        return md_content;
    }

    render() { 
        return (<React.Fragment>
            <NavBar />
            
            <div className="main-warpper">
                <CategoryList />
                <Article md={this.get_md()}/>
            </div>
            <Bottom />
        </React.Fragment>);
    }
}
 
export default App;