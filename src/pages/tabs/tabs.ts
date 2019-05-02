import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { CrearUsuarioPage } from '../crear-usuario/crear-usuario';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = HomePage;
  tab3Root = CrearUsuarioPage

  constructor() {

  }
}
