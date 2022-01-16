/*

206. Reverse Linked List

https://leetcode.com/problems/reverse-linked-list/

*/



/*
    Iterative
    Time O(N), Space O(1)
*/
function reverseLinkedList(head) {
    let curr = head;
    let prev, temp;

    while(curr){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        
        curr = temp;
    }

    return prev;
}


/*
    Recursive

    Time O(N), Space O(N)
*/

function reverseLinkedList(head) {
    if(!head || !head.next){
        return head;
    }

    let tmp = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;
    return tmp;
}


