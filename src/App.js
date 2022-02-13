import Button from "./Button";
import styles from "./App.modules.css";
import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState("");
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefalut();
        if (toDo === "") {
            return;
        }
        setToDo("");
        setToDos(currentArray => [toDo, ])
        console.log(toDo);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="text input plz"
                />
                <button>Add To do</button>
            </form>
        </div>
    );
}

export default App;
