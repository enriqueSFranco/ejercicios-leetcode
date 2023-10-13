// MARK: UTILITY TYPES

// Awaited<Type>
type A = Awaited<Promise<string[]>>
type B = Awaited<Promise<Promise<number>>>
type C = Awaited<boolean | Promise<number>>

// Partial<Type>
/*
	Construye un tipo con todas las propiedades de Type configurado en opcional. 
	Esta utilidad devolverá un tipo que representa todos los subconjuntos de un tipo dado.
*/
interface Todo {
	title: string
	description: string
}

function updateTodo (todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return { ...todo, ...fieldsToUpdate }
}

const todo1: Todo = {
	title: 'organize desk',
	description: 'clear cultter'
}

const updatedTodo1 = updateTodo(todo1, {
	description: 'throw out trash'
})