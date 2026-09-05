import { Text, View } from 'react-native';
import { EditScreenInfo } from './EditScreenInfo';
import { Container } from './Container';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <Container>
      <View className="items-center w-full">
        <Text className="text-4xl font-bold text-center">{title}</Text>
        <View className="h-[1px] my-7 w-4/5 bg-gray-200" />
        <EditScreenInfo path={path} />
        {children}
      </View>
    </Container>
  );
};
