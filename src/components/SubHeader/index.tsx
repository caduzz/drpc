import { SubHeaderContainer } from "./style";

interface SubHeaderProps {
  title: string
  subTitle: string
}

export function SubHeader({ title, subTitle }: SubHeaderProps) {
    return (
      <SubHeaderContainer>
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </SubHeaderContainer>
    )
}