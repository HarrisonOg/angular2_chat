import {Message} from '../model/message';
import {Thread} from '../model/thread';
import {User} from '../model/user';
/**
 * Created by harrisonoglesby on 6/8/17.
 */

export interface AllUserData {
  users: User[];
  threads: Thread[];
  messages: Message[];
}
