function createSortedList() {
    let numsList = [];
    numsList.sort((a, b) => a - b);
    let objList = {
        add: (element) => {
           return numsList.push(element);
        },
        remove: (index) => {
            return numsList.pop(index);
        },
        get: (index) => {
            return numsList.values(index);
        },
        size: () => {
            return numsList.length;
        }
    }

    return objList;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
