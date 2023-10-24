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

    insert(value, root = this.root) {
        if (root === null) {
            root = new Node(value);
            return root;
        }
    
        if (root.data === value) return;
    
        if (root.data < value) {
            root.right = this.insert(value, root.right)
        } else if (root.data > value) {
            root.left = this.insert(value, root.left)
        }
    
        return root;
    }

    delete(value, root = this.root) {
        if (root === null) {
            return root;
        }
    
        if (root.data > value) {
            root.left = this.delete(value, root.left);
            return root;
        } else if (root.data < value) {
            root.right = this.delete(value, root.right);
            return root;
        }

        else {
            if (root.left === null) {
                return root.right
            } else if (root.right === null) {
                return root.left;
            }

            else {
                const miniData = function findNextSmallestRightData(root) {
                    let min = root.data;
                    let newRoot = root;

                    while (newRoot.left !== null) {
                        min = root.left.data;
                        newRoot = root.left;
                    }

                    return min
                }

                root.data = minData(root.right);

                root.right = this.delete(root.data, root.right)
            }
        }

        return root;
    }

    find(value, root = this.root) {
        if (root === null || root.data === value) {
            return root;
        }

        if (value < root.data) {
            return this.find(value, root.left)
        }
        return this.find(value, root.right)
    }
}

function sortAndRemoveDupes(array) {
    const sorted = [...new Set(array.sort((a, b) => a - b))];
}

function buildTree(array, start = 0, end = array.length - 1) {
    sortAndRemoveDupes(array)
    if (start > end) return null;

    const mid = parseInt((start + end) / 2);
    const root = new Node(array[mid]);

    root.left = buildTree(array, start, mid - 1);
    root.right = buildTree(array, mid + 1, end);

    return root;
}

let testarray = new Tree ([1, 7, 4, 23, 9, 20, 3]);



console.log(testarray);