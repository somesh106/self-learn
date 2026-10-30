import { FixedSizeList } from "react-window";

export const VirtualList = () => {

    const users = Array.from({ length: 1000 }, (_, index) => {
        return `User ${index + 1}`;
    });



    return (
        <>
            <FixedSizeList height={500} width={300} itemCount={users.length} itemSize={50}>
                {/* {({ index, style }) => (
                    
                    <div style={style}>
                        {users[index]}
                    </div>
                )} */}{({ index, style }) => {

                    console.log("Rendered:", index);

                    return (
                        <div style={style}>
                            {users[index]}
                        </div>
                    );
                }}
            </FixedSizeList>
        </>
    );
}
