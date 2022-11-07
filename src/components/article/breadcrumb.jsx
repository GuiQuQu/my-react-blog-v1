import React, { Component } from 'react';
class Crumb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [{value:"深度学习",href:"www.baidu.com"}]
        }
    }

    render() { 
        return (
            <nav aria-label="breadcrumb content-nav">
            <ol className="breadcrumb">
                <li className="breadcrumb-item "><a href="www.baidu.com">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
        </nav>
        );
    }
}
 
export default Crumb;