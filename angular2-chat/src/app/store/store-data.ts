import {User} from '../../../shared/model/user';
import {Thread} from '../../../shared/model/thread';
import {Message} from '../../../shared/model/message';

export interface StoreData {

    users: {[key: number]: User};
    threads: {[key: number]: Thread};
    messages: {[key: number]: Message};

}

export const INITIAL_STORE_DATA: StoreData = {

    threads: {},
    messages: {},
    users: {}
}
