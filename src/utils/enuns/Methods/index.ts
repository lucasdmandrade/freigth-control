export const ListEnum = (
  Enum: any,
  elementHandler: (name: string, index: number) => JSX.Element
) => {
  const enumLenght = Object.keys(Enum).length / 2;

  const elementGroup = [];

  for (let i = 1; i <= enumLenght; i++) {
    elementGroup.push(elementHandler(Enum[i], i));
  }

  return elementGroup;
};
