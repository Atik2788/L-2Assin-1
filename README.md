## 1. What are some differences between interfaces and types in TypeScript?
--> In typescript, interface and types are used to define the structure object of data structure. They have major differences. Now let's talk about it. </br>
<strong>Usage:</strong></br>
<strong>Interface</strong> are used for object structure or class.
```ts
interface Person {
  name: string;
  age: number;
}
```

<strong>Type</strong> can define any type, not only object but also union, intersection, primitive tuple etc.
```ts
type Person = {
  name: string;
  age: number;
};
```

<strong>Extend/Inheritance:</strong></br>
<strong>Interface:</strong> Many interface can inherit with  extend.
```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```
<strong>Type:</strong> But in type, if you want to inherit you have to use (&);
```ts
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};
```

<strong>Declaration merging</strong> </br>
Interface: If two interface have the same name then typescript merges it by itself.
```ts
interface User {
  name: string;
}
interface User {
  age: number;
}
// Final User type: { name: string; age: number }
```

Type: Type gives you an error if two types have the same name.
```ts
type User = {
  name: string;
};
type User = {
  age: number;  // ❌ Error: Duplicate identifier 'User'
};
```

<strong>Use in classes:</strong> </br>
Interface: It’s very easy to use in class.
```ts
interface Person {
  name: string;
  greet(): void;
}

class Student implements Person {
  name = "Atik";
  greet() {
    console.log("Hello!");
  }
}
```

Type:  It can be used in class too, but the interface is more popular than it.
</br>
</br>
</br>

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.
--> Keyof is a typescript key of typescript which makes the union key of an object or interface’s key. </br>
<strong>Why we use this?</strong> </br>
If we use keyof then we know that which keys are we can use- and this is in type level. It keeps type safety, which means if we declare any wrong key the compiler can catch it.

```ts
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

// keyof Person → "name" | "age" | "isStudent"
type PersonKeys = keyof Person;

const key1: PersonKeys = "name";       // ✅ 
const key2: PersonKeys = "isStudent";  // ✅ 
const key3: PersonKeys = "address";    // ❌ 
