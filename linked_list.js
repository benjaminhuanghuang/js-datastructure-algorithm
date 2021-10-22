function LinkedList() {
    let Node = function (element) { // {1}
        this.element = element;
        this.next = null;
    };
    let length = 0; // {2}
    let head = null; // {3}

    this.append = function (element) {
        let node = new Node(element), //{1}
            current; //{2}
        if (head === null) { //first node on list //{3}
            head = node;
        }
        else {
            current = head; //{4}
            //loop the list until find last item
            while (current.next) {
                current = current.next;
            }
            //get last item and assign next to node to make the link
            current.next = node; //{5}
        }
        length++; //update size of list //{6}
    };

    this.insert = function (position, element) {
        //check for out-of-bounds values
        if (position >= 0 && position <= length) { //{1}
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) { //add on first position
                node.next = current; //{2}
                head = node;
            }
            else {
                while (index++ < position) { //{3}
                    previous = current;
                    current = current.next;
                }
                node.next = current; //{4}
                previous.next = node; //{5}
            }
            length++; //update size of list
            return true;
        } else {
            return false; //{6}
        }
    };
    this.removeAt = function (position) { };
    this.remove = function (element) { };
    this.indexOf = function (element) { };
    this.isEmpty = function () { };
    this.size = function () { };
    this.toString = function () { };
    this.print = function () { };
}