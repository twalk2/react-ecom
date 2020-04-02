import React, { Component } from "react";

class Details extends Component {
  renderChildren = () => {
    const { links, info } = this.props;
    let children = [];
    if (links) {
      children = links.map(link => {
        return (
          <a key={link._id} onClick={link.onClick} className="details__link">
            {link.title}
          </a>
        );
      });
    } else if (info) {
      children = info.map(i => {
        return (
          <div key={i._id} className="details__link details__item">
            {i.title}
          </div>
        );
      });
    }
    return children;
  };

  render() {
    const { className, title } = this.props;
    return (
      <div className={`${className} details`}>
        <div className="details__title">{title}</div>
        <div className="details__links">{this.renderChildren()}</div>
      </div>
    );
  }
}

export default Details;
