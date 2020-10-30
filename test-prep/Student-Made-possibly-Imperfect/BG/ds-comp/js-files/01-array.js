class MyArray {
    constructor() {
        this.array = [];
    }
    add(data) {
        this.array.push(data);
    }
    remove(data) {
        this.array = this.array.filter(function (current) {
            return current !== data;
        });
    }
    search(data) {
        let foundIndex = this.array.indexOf(data);
        if (foundIndex !== -1) {
            return foundIndex;
        }
        return null;
    }
    getAtIndex(index) {
        return this.array[index];
    }
    length() {
        return this.array.length;
    }
    print() {
        console.log(this.array.join(" "));
    }
}
exports.MyArray = { MyArray };
