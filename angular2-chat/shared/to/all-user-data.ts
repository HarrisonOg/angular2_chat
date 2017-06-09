import {Message} from '../model/message';
import {Thread} from '../model/thread';
import {User} from '../model/user';


export interface AllUserData {
  users: User[];
  threads: Thread[];
  messages: Message[];
}
