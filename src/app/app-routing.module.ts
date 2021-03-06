import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageComponent } from './language/language.component';
import { PreTestComponent } from './pre-test/pre-test.component';
import { QuestionsComponent } from './questions/questions.component';
import { QrComponent } from './qr/qr.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { ViewQrComponent } from './view-qr/view-qr.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
	{
		path: '',
		component: LanguageComponent
	},
	{
		path: 'pre-test',
		component: PreTestComponent,
	},
	{
		path: 'questions',
		component: QuestionsComponent,
	},
	{
		path: 'qr',
		component: QrComponent,
	},
	{
		path: 'emergency',
		component: EmergencyComponent
	},
	{
		path: 'view/qr',
		component: ViewQrComponent,
	},
	{
		path: 'doctor',
		component: DoctorComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
