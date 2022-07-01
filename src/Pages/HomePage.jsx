import React from "react";

// Class Components
class HomePage extends React.Component {
    constructor(props) {
        super(props);

        // Media penyimpanan utama pada setiap component react
        this.state = {
            counter: 0,
            data: [],
            todo: ""
        }
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
        let { data } = this.state
        return (
            <div className="container">
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