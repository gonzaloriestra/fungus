import React from 'react';
import { Item as SemanticItem, Button, Icon } from 'semantic-ui-react';

type ItemProps = {
  title: string;
  detailsUrl: string;
};

const Item = ({ title, detailsUrl }: ItemProps): JSX.Element => {
  return (
    <SemanticItem>
      <SemanticItem.Image as="a" href={detailsUrl}>
        <Icon color="olive" name="map" size="massive" />
      </SemanticItem.Image>
      <SemanticItem.Content verticalAlign="middle">
        <SemanticItem.Header as="a" href={detailsUrl}>
          {title}
        </SemanticItem.Header>
        <SemanticItem.Extra>
          <Button as="a" href="/predictions" floated="right">
            Ver posibilidades de recolecta
            <Icon name="right chevron" />
          </Button>
        </SemanticItem.Extra>
      </SemanticItem.Content>
    </SemanticItem>
  );
};

export default Item;
