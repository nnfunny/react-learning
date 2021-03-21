// user-defined type guards
interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
function move(pet: Fish | Bird) {
  if ("swim" in pet) {
    return pet.swim();
  }
  return pet.fly();
}

// typeof
function isNumber(x: any): x is number {
  return typeof x === "number";
}
function isString(x: any): x is string {
  return typeof x === "string";
}
function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// instanceof
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder("  ");
}

let padder: Padder = getRandomPadder();
//       ^ = let padder: Padder

if (padder instanceof SpaceRepeatingPadder) {
  padder;
  //     ^ = let padder: SpaceRepeatingPadder
}
if (padder instanceof StringPadder) {
  padder;
  //     ^ = let padder: StringPadder
}
// polymorphic this types
class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue(): number {
    return this.value;
  }
  public add(operand: number): this {
    this.value += operand;
    return this;
  }
  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}
let v = new BasicCalculator(2).multiply(5).add(1).currentValue();

// index types
function pluck<T, K extends keyof T>(o: T, propertyNames: K[]) {
  return propertyNames.map((n) => o[n]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}

let taxi: Car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2014,
};
let makeAndModel: string[] = pluck(taxi, ["manufacturer", "model"]);
function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
  return o[propertyName]; // o[propertyName] is of type T[K]
}
let manufacturer: string = getProperty(taxi, "manufacturer");
let year: number = getProperty(taxi, "year");

// mapped types
interface PersonSubset {
  name?: string;
  age?: number;
}
interface PersonReadonly {
  readonly name: string;
  readonly age: number;
}
type Keys = "option1" | "option2";
type Flags = { [K in Keys]: boolean };
type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};

declare function f<T extends boolean>(x: T): T extends true ? string : number;
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";
interface Foo {
  propA: boolean;
  propB: boolean;
}

declare function f<T>(x: T): T extends Foo ? string : number;

function foo<U>(x: U) {
  // Has type 'U extends Foo ? string : number'
  let a = f(x);

  // This assignment is allowed though!
  let b: string | number = a;
}
type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

type T1 = Boxed<string>;
//   ^ = type T1 = {
//       value: string;
//   }
type T2 = Boxed<number[]>;
//   ^ = type T2 = {
//       array: number[];
//   }
type T3 = Boxed<string | number[]>;
//   ^ = type T3 = BoxedValue<string> | BoxedArray<number>

type Bar<T> = T extends {
  a: (x: infer U) => void;
  b: (x: infer U) => void;
}
  ? U
  : never;

type T1_1 = Bar<{ a: (x: string) => void; b: (x: string) => void }>;
//   ^ = type T1 = string
type T2_1 = Bar<{ a: (x: string) => void; b: (x: number) => void }>;
//   ^ = type T2 = never
