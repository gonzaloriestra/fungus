import React from 'react';
import { Item as SemanticItem } from 'semantic-ui-react';

type ItemProps = {
  title: string;
  imageSrc: string;
  detailsUrl: string;
};

const Item = ({ title, imageSrc, detailsUrl }: ItemProps): JSX.Element => {
  return (
    <SemanticItem>
      <SemanticItem.Image src={imageSrc} />
      <SemanticItem.Content>
        <SemanticItem.Header as="a" href={detailsUrl}>
          {title}
        </SemanticItem.Header>
      </SemanticItem.Content>
    </SemanticItem>
  );
};

export default Item;
