import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { SobreComponent } from './components/sobre/sobre.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormacaoComponent } from './components/formacao/formacao.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContactComponent } from './components/contact/contact.component';
import { CertificadoComponent } from './components/certificado/certificado.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '#sobre', component: SobreComponent },
    { path: 'certificados', component: CertificadosComponent },
    { path: 'certificado', component: CertificadoComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'formacao', component: FormacaoComponent },
    { path: 'projetos', component: ProjetosComponent },
    { path: 'contato', component: ContactComponent },
    { path: '**', redirectTo: '' }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }