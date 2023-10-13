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

// Required<Type>
/*
	Construye un tipo que consta de todas las propiedades de Type establecido en requerido. El opuesto de Partial
	Aunque la propied name de la interface User es opcional, al poner Required<User> estamos diciendo que todas las props son requeridas
*/
interface User {
	name?: string
	lastName: string
}

const kike = {
	name: 'Enrique'
}

const peter: Required<User> = {
	name: 'peter',
	lastName: 'parker'
}

// Readonly<Type>
interface TodoWithId extends Todo {
	id: number
}

const todo3: Readonly<TodoWithId> = {
	id: 0,
	title: 'Delete inactive users',
	description: ''
}

// ❌ todo3.title = 'Reasignando el valor de la prop title'

// Record<Keys, Type>
interface CatInfo {
	age: number
	breed: string
}

type CatName = "miffy" | "boris" | "mordred"

const cats: Record<CatName, CatInfo> = {
	miffy: { age: 4, breed: '' },
	boris: { age: 6, breed: '' },
	mordred: { age: 1, breed: '' }
}

// Pick<Type, Keys>
type TodoPreview = Pick<Todo, 'title'>

const todoPreview: TodoPreview = {
	title: 'clean room'
}

// Omit<Type>
interface SuperTodo extends TodoWithId {
	completed: boolean
	createdAt: number
}

type TodoOmit = Omit<SuperTodo, 'description'>
const todoPreview2: TodoOmit = {
	id: 1,
	title: 'clean room',
	completed: false,
	createdAt: Date.now()
}

type TodoInfo = Omit<SuperTodo, 'completed' | 'createdAt'>
const todoInfo1: TodoInfo = {
	id: 2,
	title: 'Pick up kids',
	description: 'Kindergarten closes at 5pm'
}