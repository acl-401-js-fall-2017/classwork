Binary Tree Sorting
===

## Binary Node

```js
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
```

## Value Relationship

`node.left.value` < `node.value` < `node.right.value`

```
     (3)
    /   \
  (1)   (8)

```

Works with strings too:

```
        ('Jones')
        /        \
  ('Brook')   ('Smith')

```

These may be keys, that represent the thing to "find":

```js
class PersonNode {
    constructor(person) {
        // let's assume we only have valid nodes with people
        if(!person) throw new Error('"person" must be provided');
        this.value = person.name;
        this.person = person;
        this.left = null;
        this.right = null;
    }
};
```