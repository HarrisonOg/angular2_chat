/**
 * Created by harrisonoglesby on 6/8/17.
 */
export interface Thread {
  id: number;
  messageIds: number[];
  users: {[key: number]: number}
}
