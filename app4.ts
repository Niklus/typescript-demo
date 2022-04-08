interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getTodo(url: string): Promise<Todo> {
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

const url: string = 'https://jsonplaceholder.typicode.com/todos/1';

getTodo(url).then((todo: Todo) => {
  const todoContainer: Node = document.createElement('pre');
  todoContainer.textContent = JSON.stringify(todo, null, 3);
  document.body.appendChild(todoContainer);
});
