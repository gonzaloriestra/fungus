import React from 'react';
import Head from 'next/head';
import { Header, Icon, Container, Button, Segment, Grid } from 'semantic-ui-react';

const HomepageHeading = (): JSX.Element => (
  <Container text>
    <Header as="h1" inverted style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}>
      Fungus
      <Icon name="detective" />
    </Header>
    <Header
      as="h2"
      content="Encuentra setas antes que los demás."
      inverted
      style={{ fontSize: '1.7em', fontWeight: 'normal', marginTop: '1.5em' }}
    />
    <Button href="/locations" primary size="huge">
      Comenzar
      <Icon name="right arrow" />
    </Button>
  </Container>
);

const HomepageContent = (): JSX.Element => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column style={{ padding: '5em' }}>
        <Icon circular color="olive" name="map" size="massive" />
        <p style={{ fontSize: '1.33em', paddingTop: '1.5em' }}>Registra tus zonas de recolecta.</p>
      </Grid.Column>
      <Grid.Column style={{ padding: '5em' }}>
        <Icon circular color="olive" name="rain" size="massive" />
        <p style={{ fontSize: '1.33em', paddingTop: '1.5em' }}>Pidenos una predicción para una de tus zonas.</p>
      </Grid.Column>
      <Grid.Column style={{ padding: '5em' }}>
        <Icon circular color="olive" name="hand victory" size="massive" />
        <p style={{ fontSize: '1.33em', paddingTop: '1.5em' }}>Sal a recolectas con exito asegurado.</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Fungus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Segment inverted textAlign="center" style={{ minHeight: 600, padding: '1em 0em' }} vertical>
          <HomepageHeading />
        </Segment>
        <Segment textAlign="center" style={{ minHeight: 500, padding: '1em 0em' }} vertical>
          <HomepageContent />
        </Segment>
      </main>
    </div>
  );
}
