import { Center, Heading, HStack, Icon } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EmptyComponent: React.FC = ({ children }) => {
  return (
    <Center flex="1" height={Dimensions.get('window').height / 1.3}>
      <HStack space={2} justifyContent="center">
        <Heading color="primary.500" fontSize="md">
          {children}
        </Heading>
      </HStack>
      <Icon as={Ionicons} name="sad-outline" size="xl" color="primary.500" mt="2" />
    </Center>
  );
}

export default EmptyComponent;