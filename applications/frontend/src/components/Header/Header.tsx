import React from 'react';
import { Menu } from 'semantic-ui-react';

export enum ActivePage {
  locations,
  predictions,
}
type HeaderProps = { activePage: ActivePage };

export default function Header({ activePage }: HeaderProps): JSX.Element {
  return (
    <Menu size="large" inverted stackable>
      <Menu.Item link name="locations" href="/locations" active={activePage === ActivePage.locations}>
        Mis Zonas
      </Menu.Item>
      <Menu.Item link name="predictions" href="/predictions" active={activePage === ActivePage.predictions}>
        Hacer predicción
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="logout" href="/api/auth/logout">
          Cerrar Sesión
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
