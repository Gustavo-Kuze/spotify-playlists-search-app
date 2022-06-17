import { FC, useState } from "react";
import {
  Center,
  IconButton,
  Input,
  FormControl,
  Modal,
  Button,
} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from "react-native";
import { genres } from "../constants";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSearch: (search: string, filter: string) => void;
}

const SearchModal: FC<Props> = ({
  isOpen,
  setIsOpen,
  onSearch,
}) => {

  const [selectedFilter, setSelectedFilter] = useState('');
  const [search, setSearch] = useState('');

  return (
    <Center>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="full">
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Busca</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Ta afim de ouvir o que?</FormControl.Label>
              <Input
                value={search}
                onChangeText={setSearch}
                mb="4"
                placeholder="Digite sua busca"
              />
            </FormControl>
            <Button.Group isAttached colorScheme="blue" mx={{
              base: "auto",
              md: 0
            }}
              size="sm"
              // @ts-ignore
              colorScheme="success"
            >
              <FlatList
                horizontal
                data={genres}
                renderItem={({ item }) => (
                  <Button key={item} variant={selectedFilter === item ? 'solid' : 'outline'} onPress={() => setSelectedFilter(selectedFilter === item ? '' : item)}>{item}</Button>
                )}
                keyExtractor={item => item}
              />
            </Button.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onPress={() => {
                onSearch(search, selectedFilter);
              }}>
              Buscar
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <IconButton
        size={'lg'}
        variant="link"
        _icon={{
          as: Ionicons,
          name: "search"
        }}
        onPress={() => {
          setIsOpen(true);
        }}
      />
    </Center >
  );
}

export default SearchModal;
