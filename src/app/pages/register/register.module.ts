import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffects } from '../../core/effects/register.effects';
import { RegisterService } from '../../core/services/register.service';
import { RegisterComponent } from './register.component';
import { StoreModule } from '@ngrx/store';
import { registerReducer, registerFeatureKey } from '../../core/reducers/register.reducer';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([RegisterEffects]),
    StoreModule.forFeature(registerFeatureKey, registerReducer),
  ],
  providers:[
    RegisterService
  ],
  // exports:[RegisterComponent],
})
export class RegisterModule { }
