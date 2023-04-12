Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseList(head){
    let prev = null 
    let next = null 

    while(head){
        next = head.next 
        head.next = prev 
        prev = head  
        head = next 
    }
}


function reverseList(head) {
    // Initialize two variables to keep track of the previous node and the next node
    let prev = null;
    let next = null;

    // While the "head" pointer is not null...
    while (head) {
        // Store a reference to the next node, since we're about to overwrite it
        next = head.next;

        // Point the current node's "next" pointer back at the previous node
        head.next = prev;

        // Move the "prev" pointer forward to the current node
        prev = head;

        // Move the "head" pointer forward to the next node in the original list
        head = next;
    }

    // When we reach the end of the list (head is null), "prev" will be pointing to the new head of the reversed list, so return "prev"
    return prev;
}