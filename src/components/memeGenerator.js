import React from 'react';

class MemeGenerator extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemesImgs: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(resp => resp.json())
            .then(resp => {
                const { memes } = resp.data;
                console.log(memes[0]);
                this.setState({ allMemesImgs: memes });
        });
    }

    handleChange(event) {
        console.log("Working!");
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="text" id="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange} />
                    <input type="text" id="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.handleChange} />
                    <button className="btn btn-success">Generate</button>
                </div>
            </form>
        );
    }
};

export default MemeGenerator;