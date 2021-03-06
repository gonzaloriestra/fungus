import React from 'react';
import { DropdownItemProps, Select } from 'semantic-ui-react';

import getMushrooms from '../../actions/client/mushrooms/getMushrooms';

type MushroomsSelectorProps = { onSelect: (value: string) => void };

const MushroomsSelector = ({ onSelect }: MushroomsSelectorProps): JSX.Element => {
  const { mushrooms, isLoading, error } = getMushrooms();

  function transformMushroomsInOptions(): Array<DropdownItemProps> {
    return mushrooms
      ? mushrooms.map((mushroom) => ({ key: mushroom.id, value: mushroom.id, text: mushroom.scientificName }))
      : [];
  }

  if (error) {
    // To-Do Implement error behaviour
    return <div>Loading failed: {error.message}</div>;
  }

  if (isLoading) {
    // To-Do implement loading spinner
    return <div>Loading...</div>;
  }

  return (
    <>
      <label>¿Qué seta?</label>
      <Select
        placeholder="Seleciona especie"
        options={transformMushroomsInOptions()}
        onChange={(_, data): void => onSelect(data.value as string)}
      />
    </>
  );
};

export default MushroomsSelector;
