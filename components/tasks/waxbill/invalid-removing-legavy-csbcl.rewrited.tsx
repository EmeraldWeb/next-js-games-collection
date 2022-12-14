import React from "react";

export default class Example extends React.Component {
    state = {
        list: [1, 2, 3, 4, 5]
    };

    // rewrited

    removeHandler(index) {
        const { list } = this.state;
        list.splice(index, 1);
        this.setState({ list });
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                {list.map((v, index) => (
                    <p key={index}>
                        <label>Input with id = {v} </label>
                        <input type="text" />
                        <label onClick={() => this.removeHandler(index)}> x</label>
                    </p>
                ))}
            </div>
        );
    }
}
