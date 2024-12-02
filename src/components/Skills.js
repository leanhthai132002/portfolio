import React, { Component } from "react";
import SkillDetailsModal from "./SkillDetailsModal";


class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }
  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };
    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.resumeSkills.map(function (skills) {
        return (
          <div className="flex justify-center items-center space-x-4">
            <span>
            <div className="foto" onClick={() => detailsModalShow(skills)}>
              <div className="p-4" style={{backgroundColor: "#1f1f1f"}}>
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "50%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                  <div>
                  <img
                    src={skills.images[0]}
                    alt="SkillImages"
                    height="450"
                    style={{ cursor: "pointer" }}
                  />
                  </div>
                </i>
              </div>
            </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="skills">
        <div className="">
          <div className="">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div id="skill" className="col-md-12 text-center" >
            <div className="list-inline mx-auto skill-icon" style={{display: "ruby-text"}}>{skills}</div>
          </div>
              {/* Modal for displaying the selected image */}
              <SkillDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps} // Pass selected image to modal
          />
        </div>
      </section>
    );
  }
}

export default Skills;
