import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { Profile } from './profile/profile';
import { Status } from './status/status';
import { Friends } from './friends/friends';

export const routes: Routes = [
  { path: '', redirectTo: 'hello-world', pathMatch: 'full' },
  { path: 'hello-world', component: HelloWorld },
  { path: 'profile', component: Profile },
  { path: 'status', component: Status },
  { path: 'friends', component: Friends },
];
