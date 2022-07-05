import React from "react";
import Axios from 'axios';

const API_URL = "http://localhost:2022";
// Class Components
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        console.log("INI PROPS");

        // Media penyimpanan utama pada setiap component react
        this.state = {
            counter: 0,
            data: [],
            todo: "",
            newTodo: "",
            selectedId: null
        }
    }

    // Digunakan untuk menjalankan fungsi yang ingin secara otomatis berjalan
    // ketika pertama kali componentnya digunakan
    componentDidMount() {
        console.log("INI COMPONENTDIDMOUNT")
        this.getData();
    }

    getData = () => {
        Axios.get(API_URL + "/data_todo")
            .then((response) => {
                console.log("Data dari server :", response.data)
                this.setState({ data: response.data });
            }).catch((error) => {
                console.log(error);
            })
    }

    handleInput = (element) => {
        // console.log(element.target.value)
        this.setState({ todo: element.target.value })
    }

    handleInputEdit = (element) => {
        // console.log(element.target.value)
        this.setState({ newTodo: element.target.value })
    }

    btnSubmit = () => {
        // let temp = [...this.state.data]; // menyalin data sebelumnya dari state.data
        // // Menambahkan data yg baru kedalam temp
        // temp.push({
        //     id: this.state.data.length + 1,
        //     todo: this.state.todo
        // });
        // this.setState({ data: temp });
        Axios.post(API_URL + "/data_todo", {
            todo: this.state.todo,
            status: "UnDone"
        }).then((response) => {
            this.getData();
        }).catch((error) => {
            console.log(error);
        })
    }

    printDataForLop = () => {
        let temp = [];
        for (let index = 0; index < this.state.data.length; index++) {
            temp.push(<div className="row" key={this.state.data[index].id}>
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

    btnDelete = (id) => {
        // let temp = [...this.state.data];
        // temp.splice(idx, 1);
        // this.setState({ data: temp });
        Axios.delete(API_URL + `/data_todo/${id}`)
            .then((res) => {
                this.getData();
            }).catch((err) => {
                console.log(err)
            })
    }

    btnEdit = (id) => {
        console.log("Cek selected id", id);
        this.setState({ selectedId: id });
    }

    btnSave = (id) => {
        Axios.patch(API_URL + `/data_todo/${id}`, {
            todo: this.state.newTodo
        }).then((res) => {
            this.getData()
            this.setState({ selectedId: null })
        }).catch((err) => {
            console.log(err)
        })
    }

    btnDone = (id) => {
        let temp = [...this.state.data];
        let idx = temp.findIndex(val => val.id == id);
        temp[idx].status = "Done";
        this.setState({ data: temp });
    }

    printDataMap = () => {
        return this.state.data.map((value, index) => {
            if (value.id == this.state.selectedId) {
                return <div className="row card my-2" key={value.id}>
                    <div className="col-12 col-md-12 col-md-8">
                        <input className="form-control" onChange={this.handleInputEdit} type="text" defaultValue={value.todo} />
                    </div>
                    <div className="col-12 col-md-12 col-md-4">
                        <button className="btn btn-danger">{value.status}</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => this.btnSave(value.id)}>
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => this.setState({ selectedId: null })}
                            className="btn btn-outline-warning">
                            Cancel
                        </button>
                    </div>
                </div>
            } else {
                return <div className="row card my-2" key={value.id}>
                    <div className="col-12 col-sm-12 col-md-8">
                        {value.todo}
                    </div>
                    <div className="col-12 col-sm-12 col-md-4">
                        {
                            value.status == "Done" ?
                                <button className="btn btn-success" disabled>{value.status}</button>
                                :
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    onClick={() => this.btnDone(value.id)}
                                >
                                    {value.status}
                                </button>
                        }
                        <button
                            type="button"
                            className="btn btn-warning"
                            disabled={value.status == "Done" ? true : false}
                            onClick={() => this.btnEdit(value.id)}>
                            Edit
                        </button>
                        <button
                            type="button"
                            onClick={() => this.btnDelete(value.id)}
                            className="btn btn-outline-danger">
                            Delete
                        </button>
                    </div>
                </div>
            }
        })

    }


    // Fungsi method untuk merender component html react nantinya
    render() {
        console.log("INI RENDER");
        console.log("INI DI RENDER", this.state.data);
        let { data } = this.state;
        return (
            <div className="container">
                <div id="todo-app" className="card p-3 shadow w-75 m-auto my-5">
                    {this.props.heading}
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={this.handleInput} />
                        <button className="btn btn-outline-primary" onClick={this.btnSubmit}>Create</button>
                    </div>
                    <div className="alert alert-primary my-2 shadow-sm">
                        {data.length} Task
                    </div>
                    <div>
                        {
                            // this.printDataForLop()
                        }
                    </div>
                    <div>
                        {
                            this.printDataMap()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;