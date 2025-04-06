/**********MyAwaited**************** */
type MyAwaited<Type> = Type extends Promise<infer Item>
  ? Item extends Promise<infer Item2>
    ? MyAwaited<Item>
    : Item
  : Type;

type A = MyAwaited<Promise<string>>;
type B = MyAwaited<Promise<Promise<number>>>;
type C = MyAwaited<boolean | Promise<number>>;

/**********MyPartial2**************** */
interface Todo2 {
  title: string;
  description: string;
}

type MyPartial2<Type> = {
  [key in keyof Type]?: Type[key];
};

type PartialTodo = MyPartial2<Todo2>;

/**********MyRequired**************** */
interface Props {
  a?: number;
  b?: string;
}

type MyRequired<Type> = {
  [key in keyof Type]-?: Type[key];
};

type PropsRequired = MyRequired<Props>;

/**********MyReadonly**************** */
interface Props2 {
  title: string;
  age: number;
  ids: number[];
}

type MyReadonly<Type> = {
  readonly [key in keyof Type]: Type[key];
};

type Props2MyReadOnly = MyReadonly<Props2>;

/**********MyRecords**************** */

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

type MyRecords<Union extends keyof any, Type> = {
  [key in Union]: Type;
};

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

/**********MyPick**************** */

interface TodoMyPick {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick2<Type, Union extends keyof Type> = {
  [key in Union]: Type[key];
};

type TodoPreviewMyPick = Pick<TodoMyPick, "title" | "completed">;

const todoMyPick: TodoPreviewMyPick = {
  title: "Clean room",
  completed: false,
};

/**********MyOmit**************** */
interface TodoMyOmit {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type MyOmit<Type, Union extends keyof Type> = {
  [key in keyof Type as key extends Union ? never : key]: Type[key];
};

type TodoPreviewMyOmit = MyOmit<TodoMyOmit, "description">;

const todoMyOmit: TodoPreviewMyOmit = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

type TodoInfoMyOmit = MyOmit<TodoMyOmit, "completed" | "createdAt">;

const todoInfo: TodoInfoMyOmit = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

/**********MyExclude**************** */

type MyExclude<From, What> = From extends What ? never : From;

type T0 = MyExclude<"a" | "b" | "c", "a">;

type T1 = MyExclude<"a" | "b" | "c", "a" | "b">;

type T2 = MyExclude<string | number | (() => void), Function>;

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T3 = MyExclude<Shape, { kind: "circle" }>;

/**********MyExtract**************** */
type MyExtract<From, What> = From extends What ? From : never;

type T00 = MyExtract<"a" | "b" | "c", "a" | "f">;

type T11 = MyExtract<string | number | (() => void), Function>;

type Shape1 =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T22 = MyExtract<Shape, { kind: "circle" }>;

/**********MyNonNullable**************** */

type MyNonNullable<Type> = Type & {};

type T000 = MyNonNullable<string | number | undefined>;

type T111 = NonNullable<string[] | null | undefined>;

/**********MyParameters**************** */

type MyParameters<Type extends (...args: any[]) => any> = Type extends (
  ...args: infer Item
) => any
  ? Item
  : never;

declare function f1(arg: { a: number; b: string }): void;

type T0000 = MyParameters<() => string>;

type T1111 = MyParameters<(s: string) => void>;

type T222 = MyParameters<<T>(arg: T) => T>;

type T33 = MyParameters<typeof f1>;

type T44 = MyParameters<any>;

type T55 = MyParameters<never>;

type T66 = MyParameters<string>;

type T7 = MyParameters<Function>;

/**********MyConstructorParameters**************** */

type MyConstructorParameters<
  Type extends abstract new (...args: any[]) => any
> = Type extends abstract new (...args: infer Item) => any ? Item : never;

type T00000 = MyConstructorParameters<ErrorConstructor>;

type T11111 = MyConstructorParameters<FunctionConstructor>;

type T2222 = MyConstructorParameters<RegExpConstructor>;

class CC {
  constructor(a: number, b: string) {}
}
type T333 = MyConstructorParameters<typeof CC>;

type T444 = MyConstructorParameters<any>;

type T5 = MyConstructorParameters<Function>;

/**********MyReturnType**************** */

type MyReturnType<Type extends (...args: any[]) => any> = Type extends (
  ...args: any[]
) => infer ReturnType
  ? ReturnType
  : any;

declare function f1(): { a: number; b: string };

type T000000 = MyReturnType<() => string>;

type T111111 = MyReturnType<(s: string) => void>;

type T22222 = MyReturnType<<T>() => T>;

type T3333 = MyReturnType<<T extends U, U extends number[]>() => T>;

type T4 = MyReturnType<typeof f1>;

type T555 = MyReturnType<any>;

type T6 = MyReturnType<never>;

type T77 = MyReturnType<string>;

type T8 = MyReturnType<Function>;

/**********MyInstanceType**************** */

type MyInstanceType<Type extends abstract new (...args: any[]) => any> =
  Type extends abstract new (...args: any[]) => infer ReturnType
    ? ReturnType
    : never;

class CCC {
  x = 0;
  y = 0;
}

type T0000000 = MyInstanceType<typeof CCC>;

type T1111111 = MyInstanceType<any>;

type T222222 = MyInstanceType<never>;

type T33333 = MyInstanceType<string>;

type T4444 = MyInstanceType<Function>;

/**********MyNoInfer**************** */

type MyNoInfer<Type> = Type extends infer Item ? Item : undefined;

function createStreetLight<C extends string>(
  colors: C[],
  defaultColor?: NoInfer<C>
) {
  // ...
}
createStreetLight(["red", "yellow", "green"], "red"); // OK
createStreetLight(["red", "yellow", "green"], "blue"); // Error

/**********MyThisParameterType**************** */

type MyThisParameterType<Type extends (this: any, ...args: never) => any> =
  Type extends (this: infer Arg, ...args: never) => any ? Arg : never;

function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: MyThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

/**********MyOmitThisParameters**************** */

type MyOmitThisParameters<Type extends (this: any) => any> = Type extends (
  this: any
) => infer ReturnType
  ? () => ReturnType
  : any;

function toHex1(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());
