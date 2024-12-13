import { useState } from 'react'
import './App.css'
import ContextButton from './components/context-folder/button'
import ContextText from './components/context-folder/text'
import useReducerExample from './components/context-folder/UseReducer'

function App() {
  const [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState('')

	const addTask = () => {
		if (newTask) {
			setTasks([
				...tasks,
				{ text: newTask, completed: false }
			]);
			setNewTask('');
		}
	};

	const toggleTask = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks[index].completed = !updatedTasks[index].completed;
		setTasks(updatedTasks);
	};
  return (
    <div>
        <h1>Simple Task Manager</h1>
			<input
				type="text"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				placeholder="Add a task"
			/>
			<button onClick={addTask}>Add Task</button>
      <ContextButton/>
        <ContextText/>
        <useReducerExample/>
			<ul>
				{tasks.map((task,index) => (
					<li key={index} onClick={() => toggleTask(index)}>
						{task.text} - {task.completed ? 'Done' : 'Pending'}
					</li>
				))}
			</ul>
        
    </div>
  )
}

export default App