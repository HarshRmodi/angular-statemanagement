import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { LoadedeRegister, RegisterTypes, RequestedRegister } from '../actions/register.actions';
import { RegisterService } from '../services/register.service';



@Injectable()
export class RegisterEffects {

  @Effect()
  Registration$ =
    this.actions$
      .pipe(
        ofType<RequestedRegister>(RegisterTypes.RequestedRegister),
        mergeMap(({ payload }) => {
          debugger
          const requestToServer = this._registerService.register(payload.userModel);
          // const lastQuery = of({});
          // return forkJoin(requestToServer, lastQuery);
          return requestToServer;
        }),
        map((response):any => {
          debugger
          const result: any = response;
          const pageLoadedDispatch = new LoadedeRegister({
            registerModel: result
          });
          return pageLoadedDispatch;
        }),
        catchError((error, caught) => {
          debugger

          let listErrors = error.error;
          var myErros = Object.keys(listErrors).map(key => {
            return listErrors[key];
          })

          return caught;
        })
      );


  constructor(private actions$: Actions,
    private _registerService: RegisterService) { }

}


