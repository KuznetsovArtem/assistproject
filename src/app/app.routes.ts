import {RouterConfig, provideRouter} from "@angular/router";
import {UsersComponent} from "./users/users.component";
import {ProjectsComponent} from "./projects/projects.component";
import {NavigationComponent} from "./navigation/navigation.component";
/**
 * Created by v-akuznetsov on 7/20/16.
 */


const routes: RouterConfig =[
  { path: 'projects', component: ProjectsComponent},
  { path: 'project/:id', component: ProjectsComponent},
  { path: 'users', component: UsersComponent },
  { path: '', component: NavigationComponent}

];


export const appRouterProviders = [
  provideRouter(routes)
];
