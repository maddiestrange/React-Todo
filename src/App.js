import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const listData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks: listData
    }
  }
  toggleItem = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };
  addItem = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    console.log(newTask);

    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
    console.log(this.state.tasks)
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    });
    console.log(this.state.tasks)
  };
  
  render() {
    return (
      <div>
        <TodoList listData={this.state.tasks}
                  toggleItem={this.toggleItem}
                  clearCompleted={this.clearCompleted}/>
        <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
