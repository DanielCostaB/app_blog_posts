import { FC } from "react";
import { Button, Modal, FormControl, Input, AddIcon, Text, Row } from "native-base";

export const AddBlogPost: FC<AddBlogPostProps> = ({ isOpen, showModal }) => 
<Modal isOpen={isOpen} onClose={() => showModal(false)}>
  <Modal.Content maxWidth="400px">
    <Modal.CloseButton />
    <Modal.Header>
      <Row space={3} ><AddIcon size="5" mt="0.5" /><Text fontSize="md">Adicionar novo post</Text></Row>
    </Modal.Header>
    <Modal.Body>
      <FormControl>
        <Input placeholder="Titulo" />
      </FormControl>
      <FormControl mt="3">
        <Input placeholder="Texto" />
      </FormControl>
    </Modal.Body>
    <Modal.Footer>
      <Button.Group space={2}>
        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
        showModal(false);
      }}>
          Cancelar
        </Button>
        <Button onPress={() => {
        showModal(false);
      }}>
          Adicionar
        </Button>
      </Button.Group>
    </Modal.Footer>
  </Modal.Content>
</Modal>

export type AddBlogPostProps = {
  isOpen: boolean,
  showModal: (visible: boolean) => void
};