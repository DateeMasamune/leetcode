type ApiRequest<Type, Method = "GET"> = {
	data: Type;
	method: Method;
};

type TSConfig<Type extends { strict: boolean } = { strict: true }> = Type;
type test_TSConfigtrue = TSConfig<{ strict: true }>

///////////

type HelloWorld<Type extends string = string> = Type

//////////////////

const identity = <T,>(arg: T) => arg;

const mapArray = <
	T extends unknown[],
	F extends (value: T[number], index: number, array: unknown[]) => ReturnType<F>,
>(
	arr: T,
	fn: F,
) => arr.map(fn);

////////////////////////////

type GroceryStore<Name, City> = {
	name: Name;
	city: City;
};

type GroceryItem = unknown;

type CapreseSalad = {
	name: "Caprese Salad";
	price: 14.99;
	inStock: true;
};

//////////////////////////////////

type Artist = keyof typeof casettesByArtist

///////////////////

type MyPick<T, K extends keyof T> = { [k in K]: T[k] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
