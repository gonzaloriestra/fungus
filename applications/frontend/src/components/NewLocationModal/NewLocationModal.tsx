import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import addLocation from '../../actions/client/commands/addLocation';

import Map from '../Map';

type NewLocationModalProps = { show: boolean; onSave: Function };

const NewLocationModal = ({ show, onSave }: NewLocationModalProps): JSX.Element => {
  const [name, setName] = useState('');
  const [zone, setZone] = useState([]);
  const [open, setOpen] = useState(show);

  const router = useRouter();

  useEffect(() => {
    setOpen(show);
  }, [show]);

  const closeModal = (): void => {
    setOpen(false);
    router.push('/locations');
  };

  const handleOnClose = (): void => {
    closeModal();
  };

  const handleOnOpen = (): void => {
    setOpen(true);
  };

  const handleOnSave = async (): Promise<void> => {
    await addLocation({ name, zone });

    closeModal();

    onSave();
  };

  return (
    <Modal onClose={handleOnClose} onOpen={handleOnOpen} open={open}>
      <Modal.Header>Nueva zona</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <div
                style={{
                  height: '500px',
                }}
              >
                <Map mode="edit" initialZoom={6} onLocationCreated={(zone): void => setZone(zone)} />
              </div>
            </Form.Field>
            <Form.Field>
              <label>¿Qué nombre quieres darle?</label>
              <input placeholder="Escribe un nombre" onChange={(e): void => setName(e.target.value)} />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={handleOnClose}>
          Cancelar
        </Button>
        <Button positive onClick={handleOnSave}>
          Guardar
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default NewLocationModal;
