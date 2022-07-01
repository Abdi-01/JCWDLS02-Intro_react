import React from "react";

// Class Components
class HomePage extends React.Component {
    constructor(props) {
        super(props);

        // Media penyimpanan utama pada setiap component react
        this.state = {
            name: "",
            counter: 0,
            data: [],
            todo: ""
        }
    }

    btnSetName = () => {
        this.setState({ name: this.refs.inputName.value });
    }

    printName = () => {
        return <h1>{this.state.name}</h1>
    }
    btnInc = () => {
        this.setState({ counter: this.state.counter += 1 })
    }


    handleInput = (element) => {
        // console.log(element.target.value)
        this.setState({ todo: element.target.value })
    }

    btnSubmit = () => {
        let temp = [...this.state.data]; // menyalin data sebelumnya dari state.data
        // Menambahkan data yg baru kedalam temp
        temp.push({
            id: this.state.data.length + 1,
            todo: this.state.todo
        });
        this.setState({ data: temp });
    }



    // Fungsi method untuk merender component html react nantinya
    render() {
        let { name, counter, data } = this.state
        return (
            <div className="container">
                <h1>Introduction State</h1>
                <input type="text"
                    placeholder="Input Name"
                    className="form-control w-25 m-auto"
                    ref="inputName"
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
                <div id="todo-app" className="card p-3 shadow w-75 m-auto my-5">
                    <h1>To Do List</h1>
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={this.handleInput} />
                        <button className="btn btn-outline-primary" onClick={this.btnSubmit}>Create</button>
                    </div>
                    <div className="alert alert-primary my-2 shadow-sm">
                        {data.length} Task
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;