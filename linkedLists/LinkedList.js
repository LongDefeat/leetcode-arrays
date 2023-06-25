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

  isEmpty() {
    return this.head == null;
  }

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
}
