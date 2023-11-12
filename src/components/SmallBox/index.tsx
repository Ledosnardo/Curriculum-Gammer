import { Text } from "./stylesSmallBox"

interface props{
    content: string | undefined
}

const SmallBox = ({ content }: props) => {
    return(
        <>
            <Text>{content}</Text>
        </>
    )
}

export default SmallBox;