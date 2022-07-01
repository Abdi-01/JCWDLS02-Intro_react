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

    printDataForLop = () => {
        let temp = [];
        for (let index = 0; index < this.state.data.length; index++) {
            temp.push(<div className="row"  key={this.state.data[index].id}>
                <div className="col-12 col-md-8" style={{ textAlign: "left" }}>
                    {
                        this.state.data[index].todo
                    }
                </div>
                <div className="col-12 col-md-4">
                    <button className="btn btn-danger">UnDone</button>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-outline-danger">Delete</button>
                </div>
            </div>)
        }

        return temp;

    }

    printDataMap = () => {
        return this.state.data.map((value, index) => {
            return <div className="row" key={value.id}>
                <div className="col-12 col-md-8">
                    {value.todo}
                </div>
                <div className="col-12 col-md-4">
                    <button className="btn btn-danger">UnDone</button>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        })

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
                    <div>
                        {
                            this.printDataForLop()
                        }
                    </div>
                    <div>
                        {
                            // this.printDataMap()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;