import React from 'react';

const FunctionalComponent = (props) => {
    // React.useState(defaultValue) = react hooks yang digunakan untuk membuat state didalam functional component
    const [counter, setCounter] = React.useState(0);
    const [data, setData] = React.useState([]);
    const [todo, setTodo] = React.useState("");


    const btnInc = () => {
        let temp = counter;
        temp += 1;
        setCounter(temp);
    }
    const btnDec = () => {
        setCounter(counter - 1);
    }

    return (
        <div className='card w-75 m-auto p-4 shadow my-2'>
            <h3>Counter at Functional Component</h3>
            <div>
                <button type='button' className='btn btn-warning' onClick={btnDec}>-</button>
                <span className='mx-4 fw-bold lead'>{counter}</span>
                <button type='button' className='btn btn-success' onClick={btnInc}>+</button>
            </div>
        </div>
    )
}

export default FunctionalComponent;