import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Html from './views/html';
import { Welcome } from '../../client/components/Welcome';

export class View {
  static renderMainPage(store: any, url: string) {
    return renderToString(
      <Html>
        <StaticRouter location={url}>
          <Welcome
            author="Kinavi"
            message="Hi, welcome to my react blank. I hope it is useful to you"
          />
        </StaticRouter>
      </Html>,
    );
  }

  // ...
}
