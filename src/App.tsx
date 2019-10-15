import React, { Fragment } from 'react';
import Page1 from "./page1";
import Page2 from "./page2";

export default function HomePage() {
    return (
      <Fragment>
        <Page1 />
        <Page2 />
      </Fragment>
    );
}