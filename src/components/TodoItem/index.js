import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import './index.css'

const TodoItem = props =>{
    const{itemDetails,toEditTodo,toDeleteTodo} = props
    const{id,name,numberOfEdits} = itemDetails

    const onClickEditBtn = () =>toEditTodo(id)

    const onClickDeleteBtn = () => toDeleteTodo(id)

    return(
        <li className="item-container">
            <p className='item-text'>{name} (Updated {numberOfEdits} Times)</p>
            <div className='button-container'>
                <button className='edit-btn' type='button' onClick={onClickEditBtn}><MdEdit size={25}/></button>
                <button className="delete-btn" type='button' onClick={onClickDeleteBtn}><RxCross2 size={25}/></button>
            </div>
        </li>
    )
}

export default TodoItem