/**
 * https://leetcode.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseList(head) {
    let [previous, current, next ] = [ null, head, null ]
    // Iterate over list, while current has a value. If current does not have a value we have reached end of list.
    while (current) { 
        // Save the next node from the original list.
        next = current.next 
        // Reverse the link of the current node. 
        current.next = previous
        // Update the previous pointer to the current node.
        previous = current 
        // Move the current pointer to the next node in the original list, preparing for the next iteration of the loop.
        current = next 
    }
    // After loop completes, previous points to the new head.
    return previous
}