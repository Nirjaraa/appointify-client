import { Component } from "react";
import "./FeaturesStyles.css";
class FeatureData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="fea-text">
          <h2>
            {" "}
            <i class="fa-regular fa-calendar-check"></i>
            {this.props.heading}
          </h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default FeatureData;
