// ## Styles Imports
import * as S from "./styled";

export function Button({ label, onClick }) {
  return <S.ButtonContainer onClick={onClick}>{label}</S.ButtonContainer>;
}
