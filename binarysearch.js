class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.root = buildTree(array);
    }
}

function buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;

    const mid = parseInt((start + end) / 2);
    const root = new Node(array[mid]);

    root.left = buildTree(array, start, mid - 1);
    root.right = buildTree(array, mid + 1, end);

    return root;
}



function insert(key) {
    root = insertRec(root, key);
}

function insertRec(root, key) {
    if (root == null) {
        root = new Node(key);
        return root;
    }

    if (key < root.key)
        root.left = insertRec(root.left, key);
    else if (key > root.key)
        root.right = insertRec(root.right, key);

    return root;
}

function deleteNode(root, k) {
    if (root === null) {
        return root;
    }

    if (root.key > k) {
        root.left = deleteNode(root.left, k);
        return root;
    } else if (root.key < k) {
        root.right = deleteNode(root.right, k);
        return root;
    }

    if (root.left === null) {
        let temp = root.right;
        delete root;
        return temp;
    } else if (root.right === null) {
        let temp = root.left;
        delete root;
        return temp;
    }

    else {
        let succParent = root;

        let succ = root.right
        while (succ.left !== null) {
            succParent = succ;
            succ = succ.left
        }

        if (succParent !== root) {
            succParent.left = succ.right;
        } else {
            succParent.right = succ.right;
        }

        root.key = succ.key;

        delete succ;
        return root;
    }
}

function find(value) {


}

let testarray = new Tree ([1, 7, 4, 23, 9, 20, 3]);



console.log(testarray);