import { Container, Image, Name } from "./styled";

interface DogCardProps {
    dogName?: string;
    imgSrc?: string
}

export function DogCard({dogName, imgSrc}: DogCardProps) {
    
    return (
        <Container>
            <Name>{dogName}</Name>
            <Image src={imgSrc}/>
        </Container>
    )
}