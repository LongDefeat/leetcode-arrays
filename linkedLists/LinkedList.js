"use strict";
const Node = require("./Node.js");

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  //Insertion At Head
  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this; //returns updated list
  }
  /* Check if Linked List is empty or not */
  isEmpty() {
    return this.head == null;
  }
  /* Get Head value */
  getHead() {
    return this.head;
  }
  getListStr() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return "null";
    } else {
      let st = "";
      let temp = this.head;
      while (temp != null) {
        st += String(temp.data);
        st += " -> ";
        temp = temp.nextElement;
      }
      st += "null";
      return st;
    }
  }
  /* Insert value at tail */
  insertAtTail(newData) {
    let node = new Node(newData);
    // check if empty
    if (this.isEmpty()) {
      this.head = node;
      return this;
    }

    // start from head
    let currNode = this.head;

    //iterate to last element in list
    while (currNode.nextElement != null) {
      currNode = currNode.nextElement;
    }

    // make new node the nextElement of last node in list
    currNode.nextElement = node;
    return this;
  }
  /* Search Linked List for a value */
  search(value) {
    //Start from the first element
    let currentNode = this.head;

    //Traverse the list until you find the value or reach the end
    while (currentNode != null) {
      if (currentNode.data == value) {
        return true; //value found
      }
      currentNode = currentNode.nextElement;
    }
    return false; //value not found
  }
  /* Delete at Head*/
  deleteAtHead(value) {
    //if list is empty return false
    if (this.isEmpty()) {
      return false;
    }

    //else get pointer to head
    let currentNode = this.head;
    // if first node's is the node to be deleted, delete it and return true
    if (currentNode.data == value) {
      this.head = currentNode.nextElement;
      return true;
    }

    // else traverse the list
    while (currentNode.nextElement != null) {
      // if a node whose next node has the value as data, is found, delete it from the list and return true
      if (currentNode.nextElement.data == value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    //else node was not found, return false
    return false;
  }
  /* Delete at Tail of Linked List  */
  deleteAtTail() {
    // check for the case when linked list is empty
    if (this.isEmpty()) {
      return this;
    }
    //if linked list is not empty, get the pointer to first node
    let firstNode = this.head;
    //check for the corner case when linked list has only one element
    if (firstNode.nextElement == null) {
      this.deleteAtHead();
      return this;
    }
    //otherwise traverse to reach second last node
    while (firstNode.nextElement.nextElement != null) {
      firstNode = firstNode.nextElement;
    }
    //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
    firstNode.nextElement = null;
    return this;
  }
  /* Checks length of the linked list*/
  length(list) {
    let length = 0;
    //Write code here
    let currNode = list.getHead();
    while (currNode != null) {
      length++;
      currNode = currNode.nextElement;
    }

    return length;
  }
  /* Remove duplicates from linked list */
  removeDuplicates(list) {
    if (list.isEmpty()) {
      return null;
    }

    //If list only has one node, leave it unchanged
    if (list.getHead().nextElement == null) {
      return list;
    }
    let outerNode = list.getHead();
    while (outerNode != null) {
      let innerNode = outerNode;
      while (innerNode != null) {
        if (
          innerNode.nextElement != null &&
          outerNode.data == innerNode.nextElement.data
        ) {
          //Duplicate found ahead
          innerNode.nextElement = innerNode.nextElement.nextElement; // Remove duplicate
        } else {
          innerNode = innerNode.nextElement; // Otherwise simply iterate ahead
        }
      }
      outerNode = outerNode.nextElement;
    }
    return list; //return the updated list here
  }
}
