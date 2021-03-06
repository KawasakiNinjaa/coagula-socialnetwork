import React from "react";
import axios from "./axios";
import FriendButton from "./friendbutton";

export default class OtherProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {
        console.log("match.id: ", this.props.match.params.id);
        const getInfo = await axios.get(
            "/api-user/" + this.props.match.params.id
        );

        console.log("getInfo: ", getInfo.data);
        if (getInfo.data.match) {
            this.props.history.push("/");
        } else {
            this.setState(getInfo.data);
        }
    }
    render() {
        return (
            <div id="otherprofile1">
                <div id="otherprofile2">
                    {!this.state.img_url && <img src="/default.jpg" />}
                    {this.state.img_url && (
                        <img
                            src={this.state.img_url}
                            alt={`${this.state.first} ${this.state.last}`}
                        />
                    )}
                    <div>
                        <h1>
                            {this.state.first} {this.state.last}
                        </h1>
                        <i> {this.state.bio}</i>
                        <FriendButton
                            myId={this.props.myId}
                            otherUserId={this.props.match.params.id}
                        />
                    </div>
                    <p> registered as user </p>
                    <h1> {this.props.match.params.id} </h1>
                </div>
            </div>
        );
    }
}
