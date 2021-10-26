function split(head, n) {
    let fast = head;
    let slow = head;

    for(let k =0; k<  n; k++){
        fast = fast.next;
    }

    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }

    return slow.next;
}