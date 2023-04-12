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