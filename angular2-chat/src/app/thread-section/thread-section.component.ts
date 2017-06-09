import { Component, OnInit } from '@angular/core';
import {ThreadsService} from '../services/threads.service';
import {ApplicationState} from "../store/application-state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  constructor(private threadsService: ThreadsService,
              private store: Store<ApplicationState>) {


  }

  ngOnInit() {
    // this.threadsService.loadUserThreads()
    //   .subscribe(
    //     allUserData => this.store.dispatch(
    //        new LoadUserThreadsAction(allUserData)
    //      )
    // );

  }

}
