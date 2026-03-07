import { Routes } from '@angular/router';
import { CarList} from './pages/car-list/car-list';
import { AddCar } from './pages/add-car/add-car';
import { Login } from './pages/login/login';
import { Setting } from './pages/setting/setting';
import { Profile } from './pages/profile/profile';
import {NotFound} from './pages/not-found/not-found';
import { NewUser } from './pages/new-user/new-user';

export const routes: Routes = [
    { path: '', component: CarList },
    { path: 'login', component: Login },
    { path: 'add-car', component: AddCar },
    { path: 'account', component: Setting },
    { path: 'profile', component: Profile },
    { path: 'new/user', component: NewUser },
    { path: '**', component: NotFound }
];
