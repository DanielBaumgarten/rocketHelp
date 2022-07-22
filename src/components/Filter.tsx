import { Text, Button, IButtonProps, useTheme, VStack } from "native-base";
import React from "react";

type Props = IButtonProps & {
    title: string;
    isActive?: boolean;
    type: 'open' | 'closed';
}
export function Filter({ tilte, isActive = false, type, ...rest}: Props) {
  return (
    <Button
     variant='outline'
    >

    </Button>
  );
}