// Model for the Thread
export interface Thread {
  id: number;
  messageIds: number[];
  users: {[key: number]: number}
}
