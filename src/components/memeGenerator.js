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

    render() {
        return <h1 className="display-5">MEME GENERATOR SECTION</h1>;
    }
};

export default MemeGenerator;