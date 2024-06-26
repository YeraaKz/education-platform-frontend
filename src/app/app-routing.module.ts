import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import {CoursesComponent} from './courses/courses.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth.guard';
import {ContactusComponent} from './contactus/contactus.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {MyCoursesComponent} from './my-courses/my-courses.component';
import {TestComponent} from './test/test.component';
import {TestResultsComponent} from './test-results/test-results.component';
import {MyCourseDetailsComponent} from './my-course-details/my-course-details.component';



const routes: Routes = [
  {
    path: 'myCourse',
    component: MyCoursesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myCourse/:id',
    component: MyCourseDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'notfound',
    component: PageNotFoundComponent
  },
  {
    path: 'contact',
    component: ContactusComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'course-details/:id',
    component: CourseDetailsComponent
  },
  {
    path: 'course-details',
    component: CourseDetailsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'pm',
    component: PmComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
      path: 'admin',
      component: AdminComponent
  },
  {
      path: 'auth/login',
      component: LoginComponent
  },
  {
      path: 'signup',
      component: RegisterComponent
  },
  {
      path: '',
      redirectTo: 'profile',
      pathMatch: 'full'
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'test-results',
    component: TestResultsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
