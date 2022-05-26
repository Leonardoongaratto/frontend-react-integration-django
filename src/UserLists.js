import React from "react";
import ListComponent from "./ListComponent";

export default class UserLists extends React.Component{
    state = { lists: null }

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token f0d36c58d4ea714ba51158eceb80457a97d1da19';

        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false});
    }

    render()
    {
        return (
            <div>
                <ListComponent listName={'Minha lista'}/>
                <ListComponent listName={'Minha lista 2'}/>
            </div>
        )
    }
}