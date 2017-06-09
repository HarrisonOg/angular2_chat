import {INITIAL_UI_STATE, UIState} from './ui-state';
import {INITIAL_STORE_DATA, StoreData} from './store-data';

export interface ApplicationState {
  uiState: UIState;
  storeData: StoreData;

}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  uiState: INITIAL_UI_STATE,
  storeData: INITIAL_STORE_DATA
};
