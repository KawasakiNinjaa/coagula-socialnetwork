import React from "react";
import ProfilePic from "./profilepic";
import BioEditor from "./bioeditor";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="profile-wrap">
                <div id="profilepic2">
                    <ProfilePic
                        image={this.props.image}
                        showUploader={this.props.showUploader}
                    />
                </div>
                <div id="bio">
                    <h1>
                        Hola, {this.props.first} {this.props.last}. What's up?
                    </h1>
                    <BioEditor
                        bio={this.props.bio}
                        setBio={this.props.setBio}
                    />
                </div>
            </div>
        );
    }
}
