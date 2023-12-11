// ## Styles Imports
import * as S from "./styled";

export function Input({ value }) {
  return (
    <S.InputContainer>
      <input type="text" value={value} disabled />
    </S.InputContainer>
  );
}
