function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}
map(["sd", "sd"], (n) => n.length);

type TreeNode = {
  value: string;
};

type LeafNode = TreeNode & {
  isLeaf: true;
};

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
};

type MapNode = <T extends TreeNode>(node: T, f: (arg: T) => void) => TreeNode;

let a: TreeNode = { value: "a" };
let b: LeafNode = { value: "b", isLeaf: true };
let c: InnerNode = { value: "c", children: [b] };

const mapNode: MapNode = (a) => a;

mapNode(c, (value) => value.value.toLocaleUpperCase());

const call = <T extends unknown[], R>(f: (...arg: T) => R, ...arg: T): R => {
  return f(...arg);
};

const fill = (length: number, value: string): string[] => {
  return Array.from({ length }, () => value);
};

call(fill, 10, "a");

type Reservation = {
  value: string;
};

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};

let reserve: Reserve = (fromOrDestination, toOrDestination?, destination?) => {
  return {
    value: `${fromOrDestination}-${toOrDestination}-${destination}`,
  };
};

type TIsTwoArg = <T extends unknown>(value1: T, value2: T) => boolean;
type TisMoreArgs = <T>(...args: T[]) => boolean;

const fn: TIsTwoArg = (arg1, arg2) => {
  return arg1 === arg2;
};
const fnMo: TisMoreArgs = (...args) => {
  return true;
};

fn([42], [42]);
fnMo(1, 2, 3, 4, 4, "4");
fnMo(["1", 2], [1, 2, 3, 4], [[1, 2, 3, 4]]);
type TObj = {
  name: string;
  lastName: string;
  age: number;
};
const funcs = () => {
  return {
    name: "string",
    lastName: "string",
    age: "number",
  };
};

type TFuncs = ReturnType<typeof funcs>;

type Flatten<Type> = Type extends Array<infer Item> ? Item : never;

type FirstType<Type> = Type extends unknown[] ? Type[0] : never;

//задача на знание жинериков, наследования(ограничения), keyof
type TGetProperty = <Type, Key extends keyof Type>(
  arg1: Type,
  arg2: Key
) => Type[Key];
const fync: TGetProperty = (obj, key) => obj[key];

//задача на мапинг типа и дженерик in keyof
interface User {
  id: number;
  name: string;
  email: string;
}

type MyPartial<Type> = {
  [Property in keyof Type]+?: Type[Property];
};
//задача на знания  extends Partial
interface Post {
  id: number;
  title: string;
  content: string;
  publish: boolean;
}

const updateEntity = <Type extends object>(
  arg1: Type,
  arg2: Partial<Type>
) => {};

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@mail.ru",
};
const updateUser = updateEntity(user, { name: "Bob" });

const post: Post = {
  id: 1,
  title: "hello",
  content: "world",
  publish: false,
};
const updatePost = updateEntity(post, { publish: true });
updateEntity(user, { age: 30 });

type Status = "new" | "waiting_load" | "in_work" | "done" | "cert_ready";
type StatusWithBrackets = `[${Status}]`;
type StatusWithBracketsNew = {
  [Property in Status]: `[${Property}]`;
}[Status];
const val: StatusWithBracketsNew = "[waiting_load]";

type ReturnUnion<T, U> = T extends infer Item
  ? Item extends U
    ? never
    : Item
  : never;
type Exclusive<T, U> = ReturnUnion<T, U> | ReturnUnion<U, T>;
type EXc = Exclusive<1 | 2 | 3, 2 | 3 | 4>;
type EXc1 = Exclusive<1 | 2 | 3 | 4 | 5 | 6 | 9, 1 | 2 | 3 | 4 | 5 | 7 | 8>;
type TEST = 4 extends 2 | 3 | 4 ? true : false;

//Разработайте способ обработки ошибок
interface UserID {
  age: number;
  name: string;
  lastName: string;
}

class IncorrectPasswordError extends Error {}
class IncorrectLoginError extends Error {}
class UserNotFoundError extends Error {}
class UserNotHaveNameError extends Error {}

class API {
  getLoggedInUserID(): UserID {
    const response = {
      age: 30,
      name: "Dima",
      lastName: "Ovs",
    };
    const passwords = "";
    const login = "";

    if (!passwords) {
      throw new IncorrectPasswordError("Не верно введен пароль");
    }

    if (!login) {
      throw new IncorrectLoginError("Не верно введен логин");
    }

    return response;
  }
  getFriendIDs(userID: UserID): UserID[] {
    const response = Array.from({ length: 5 }, () => userID);
    if (!response.length) {
      UserNotFoundError;
      throw new UserNotFoundError("Пользователь не найден");
    }
    return response;
  }
  getUserName(userID: UserID): string {
    if (!userID.name) {
      UserNotHaveNameError;
      throw new UserNotHaveNameError("Пользователь не имеет имени");
    }
    return userID.name;
  }
}
() => {
  interface Animal {
    speak(): void;
  }

  interface Dog extends Animal {
    bark(): void;
  }

  interface Box<T> {
    value: T;
  }

  // Функция, принимающая Box с животным
  function handleAnimal(box: Box<Animal>) {
    box.value.speak(); // вызываем метод speak
  }

  // Создаем объект Box для Dog
  const dogBox: Box<Dog> = {
    value: {
      speak: () => console.log("Woof!"),
      bark: () => console.log("Bark!"),
    },
  };

  // Неправильная попытка передачи Box<Dog> в функцию, ожидающую Box<Animal>
  handleAnimal(dogBox); // Здесь TypeScript выдаст ошибку
};