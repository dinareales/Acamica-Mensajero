import React, {Component} from 'react';

class List extends Component {
    state = {
        messages: [],
    }

    callme = () => {
        var message = localStorage.getItem("Mensajes");
        var msg =  JSON.parse(message);
        this.setState({
            messages: msg
        })
        setTimeout(() => { console.log(this.state.messages) }, 3000)

    }

    render() {
        return (
            <div>
                <h2 className={"text"}>Lista de Todos los mensajes</h2>
                <button className={"button"} onClick={this.callme}>Mostrar</button>
                <ul>
                    {this.state.messages.map((x) => (
                            <li>
                                {x}
                            </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;