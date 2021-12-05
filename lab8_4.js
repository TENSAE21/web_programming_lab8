
let linkedlist = {};
linkedlist.add = function (element) {
    if (this.value === undefined) {
        this.value = element;
        this.next = null;
    } else {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = { value: element, next: null };
    }
}

linkedlist.remove = function (element) {
    var current = this;
    var prev = null;
    while (current) {
        if (current.value === element) {
            if (prev == null) {
                this.value = current.next.value;
                this.next = current.next.next;
            } else {
                prev.next = current.next;
            }
            return true;
        }
        prev = current;
        current = current.next;
    }
    return false;
}
linkedlist.printHelper = function (list, result) {
    if (list.next == null) {
        result += list.value;
        return result;
    }
    result += list.value + ',';
    return this.printHelper(list.next, result);
}
linkedlist.print = function () {
    let result = 'LinkedList{';
    result = this.printHelper(this, result);
    result += '}';
    console.log(result);
}

//Constructor Function Solution:
function LinkedList() {

}
LinkedList.prototype.add = function (element) {
    if (this.value === undefined) {
        this.value = element;
        this.next = null;
    } else {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = { value: element, next: null };
    }
}
LinkedList.prototype.remove = function (element) {
    var current = this;
    var prev = null;
    while (current) {
        if (current.value === element) {
            if (prev == null) {
                this.value = current.next.value;
                this.next = current.next.next;
            } else {
                prev.next = current.next;
            }
            return true;
        }
        prev = current;
        current = current.next;
    }
    return false;
}
LinkedList.prototype.printHelper = function (list, result) {
    if (list.next == null) {
        result += list.value;
        return result;
    }
    result += list.value + ',';
    return this.printHelper(list.next, result);
}
LinkedList.prototype.print = function () {
    let result = 'LinkedList{';
    result = this.printHelper(this, result);
    result += '}';
    console.log(result);
}

let ll1 = new LinkedList();
ll1.add(4);
ll1.add(42);
ll1.add(94);
ll1.print();


let ll2 = Object.create(linkedlist); 
ll2.add(3);
ll2.add(42);
ll2.add(94);
ll2.print();
