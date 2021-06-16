// NGRX
import { Store, select } from '@ngrx/store';
import { State } from '../../../app/reducers';
import { selectLoadRegister } from '../selectors/register.selectors';
// CRUD

export class RegisterDataSource {
    accessToken$: any;


    constructor(private store: Store<State>) {
        // super();

        
        this.accessToken$ = this.store.pipe(
            select(selectLoadRegister)
        );

       
    }
}
