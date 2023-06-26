import { Component } from 'react'
import ToDo from '../ToDo/ToDo'
import todo from '../../todo.json'

const DATA = {}

class ToDoList extends Component {
	state = {
		todoList: todo,
	}

	handleCheck = (id) => {
		this.setState((prev) => {
			return {
				todoList: prev.todoList.map((todo) =>
					todo.id === id
						? { ...todo, completed: !todo.completed }
						: todo
				),
			}
		})
	}

	render() {
		return (
			<>
				<h1>My To-Do list</h1>
				<ul className='list-group list-group-flush'>
					{this.state.todoList.map((todo) => (
						<ToDo
							key={todo.id}
							todo={todo}
							handleCheck={this.handleCheck}
						/>
					))}
				</ul>
			</>
		)
	}
}

export default ToDoList
