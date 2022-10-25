import { FC } from "react";
import { Button, Modal } from "native-base";

export const DeleteBlogPost: FC<DeleteBlogPostProps> = ({ isOpen, showModal }) => 
<Modal isOpen={isOpen} onClose={() => showModal(false)}>
  <Modal.Content maxWidth="400px">
    <Modal.CloseButton />
    
    <Modal.Body>
      Deseja mesmo remover este post?
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
          Remover
        </Button>
      </Button.Group>
    </Modal.Footer>
  </Modal.Content>
</Modal>

export type DeleteBlogPostProps = {
  isOpen: boolean,
  showModal: (visible: boolean) => void
};