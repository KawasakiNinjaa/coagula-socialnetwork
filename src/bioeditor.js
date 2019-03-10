import React from "react";
import axios from "./axios";

export default class BioEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bioEditorIsVisible: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.update = this.update.bind(this);
        this.showBioEditor = this.showBioEditor.bind(this);
    }
    handleChange(e) {
        this[e.target.name] = e.target.value;
    }
    update(biotext) {
        axios.post("/setbio", { biotext }).then(({ data }) => {
            console.log("data in setbio: ", data.bio);
            this.props.setBio(data);
            this.setState({ bioEditorIsVisible: false });
            // this.setState({ biotext });
        });
    }

    showBioEditor() {
        console.log("I am showBioEditor");
        //chech if bioeditor is currently opened
        const { bioEditorIsVisible } = this.state;
        this.setState({
            // toggle its value
            bioEditorIsVisible: !bioEditorIsVisible
        });
    }
    render() {
        return (
            <div>
                {!this.props.bio && (
                    <p onClick={this.showBioEditor}> add a fucking bio</p>
                )}
                <h2> {this.props.bio}</h2>
                {this.props.bio && (
                    <div>
                        <p onClick={this.showBioEditor}> e di t Your Bio </p>
                    </div>
                )}

                {this.state.bioEditorIsVisible && (
                    <div name="textarea">
                        <textarea
                            name="biotext"
                            rows="5"
                            columns="25"
                            onChange={this.handleChange}
                        />
                        <button
                            onClick={() => {
                                this.update(this.biotext);
                            }}
                        >
                            updateBio
                        </button>
                    </div>
                )}
                {!this.state.bioEditorIsVisible && null}
            </div>
        );
    }
}
