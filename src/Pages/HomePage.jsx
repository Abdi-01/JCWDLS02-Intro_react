import React from "react";

// Class Components
class HomePage extends React.Component {
    constructor(props) {
        super(props);

        // Media penyimpanan utama pada setiap component react
        this.state = {
            name: "",
            counter: 0
        }
    }

    btnSetName = () => {
        this.setState({ name: this.refs.inputName.value });
    }

    printName = () => {
        return <h1>{this.state.name}</h1>
    }

    handleInput = (element) => {
        console.log(element.target)
    }

    btnInc = () => {
        this.setState({ counter: this.state.counter += 1 })
    }


    // Fungsi method untuk merender component html react nantinya
    render() {
        let { name, counter } = this.state
        return (
            <div className="container">
                <h1>Introduction State</h1>
                <input type="text"
                    placeholder="Input Name"
                    className="form-control w-25 m-auto"
                    ref="inputName"
                    onChange={this.handleInput}
                />
                <button className="btn btn-primary my-2"
                    type="button" onClick={this.btnSetName}>Set Name</button>
                {this.printName()}
                <div id="counter">
                    <h1>Counter</h1>
                    <div>
                        <button type="button" className="btn btn-warning" onClick={() => this.setState({ counter: counter -= 1 })}>-</button>
                        <span className="fw-bold mx-3">{counter}</span>
                        <button type="button" className="btn btn-success" onClick={this.btnInc}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;