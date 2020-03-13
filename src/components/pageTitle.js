import React, { Component } from "react";

const PageTitle = props => {
  const { className, title } = props;
  return <div className={`${className} page-title`}>{title}</div>;
};

// class PageTitle extends Component {
//     render() {
//         const {className} = this.props
//         return (
//             <div className={`${className} page-title`}>
//                 {title}
//             </div>
//         )
//     }
// }

export default PageTitle;
