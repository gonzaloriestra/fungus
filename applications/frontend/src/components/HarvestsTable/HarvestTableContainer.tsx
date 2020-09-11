import React, { useEffect, useState } from 'react';
import { HarvestTable } from './HarvestTable';

import { Fungus } from '../../../../../src/Fungus/Fungus';
import { Harvest } from '../../../../../src/Fungus/Harvests/Domain/Harvest';

export const HarvestTableContainer = (): JSX.Element => {
  const [harvests, setHarvests] = useState<Harvest[] | undefined>(undefined);

  useEffect(() => {
    const fungus = new Fungus();

    /*setHarvests(fungus.harvests());*/
  }, []);

  return <HarvestTable harvests={harvests} />;
};
