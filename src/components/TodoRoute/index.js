import {Component} from 'react'
import TodoItem from '../TodoItem'
import {v4} from 'uuid'
import './index.css'

class TodoRoute extends Component {
    state = {todoList:[],inputValue:''}

    onChangeInputElement = event => this.setState({inputValue:event.target.value})

    addTodoItem = () =>{
        const {inputValue} = this.state
        const newTodo = {
            id:v4(),
            name:inputValue,
            numberOfEdits:0
        }
        this.setState(prevState=>({todoList:[...prevState.todoList,newTodo],inputValue:''}))
    }

    toDeleteTodo = (id) =>{
        const{todoList} = this.state
        const filteredList = todoList.filter(each=>each.id !== id)
        // console.log(filteredList)
        this.setState({todoList:filteredList})
    }

    toEditTodo = (id) =>{
        const {todoList} = this.state
        const filterItem = todoList.filter(each=>each.id === id)
        // const filteredList = todoList.filter(each=>each.id !== id)
        // console.log(filterItem)
        this.setState({inputValue:filterItem[0].name})
    }

    render(){
        const{todoList,inputValue} = this.state
        // console.log(todoList)
        return (
            <div className='bg-container'>
                <div className='card-container'>
                    <h1 className='heading'>Day Goals!</h1>
                    <div className='buttons-container'>
                        <input className='input-element' value={inputValue} type='text' placeholder='Add a todo' onChange={this.onChangeInputElement}/>
                        <button className='add-todo-btn' onClick={this.addTodoItem}>Add Todo</button>
                    </div>
                    <ul className='todo-list-container'>
                        {
                          todoList.map(eachTodo=><TodoItem itemDetails={eachTodo} toDeleteTodo={this.toDeleteTodo} toEditTodo={this.toEditTodo}/>)
                        }
                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default TodoRoute