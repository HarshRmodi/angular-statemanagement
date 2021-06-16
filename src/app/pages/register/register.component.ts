import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RequestedRegister } from '../../core/actions/register.actions';
import { RegisterDataSource } from '../../core/datasource/register.datasource';
import { Register } from '../../../app/core/model/register';
import { State } from '../../../app/reducers';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, skip } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {


  constructor(public store: Store<State>,) { }
  userModelData: Register
  dataSource: RegisterDataSource;
  private subscriptions: Subscription[] = [];
  ngOnInit() {
    this.dataSource = new RegisterDataSource(this.store);
    const entitiesAllRegistrationField = this.dataSource.accessToken$.pipe(
      skip(1),
      distinctUntilChanged()
    ).subscribe(res => {
      debugger
      // if (res.success) {
      //   this.fieldDetails = res.data;
      // }
    });

    this.subscriptions.push(entitiesAllRegistrationField);
    this.submit();
  }

  submit() {
    debugger
    this.userModelData = new Register();
    this.userModelData.first_name = "Dishant",
      this.userModelData.last_name = "Mehta",
      this.userModelData.email = "dishan1t.11712@gmail.com",
      this.userModelData.password = "hello@3#",
      this.userModelData.mobile = "7600015802",
      this.userModelData.device_type = "0",
      this.userModelData.device_token = "0c9def3e-1b93-4af5-b276-0f529406f0ce"
    this.store.dispatch(new RequestedRegister({ userModel: this.userModelData }))
  }

  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }

}
