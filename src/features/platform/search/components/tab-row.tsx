

const TabRow = ({ name, children }: { name: string, children: any }) => {

    return (
        <div style={{
            display: "flex",
            alignItems: "flex-start",
            textAlign: "left",
            borderBottom: "1px solid rgba(0, 0, 0, 0.08)"
        }}>
            <div style={{
                paddingTop: "1.5rem",
                paddingBottom: ".5rem",
                width: "25%",
                marginRight: "5%"
            }}>
                <strong>{ name }</strong>
            </div>
            <div style={{
                paddingTop: "1.5rem",
                paddingBottom: ".5rem",
                width: "70%",
            }}>
                { children }
            </div>
        </div>
    )
}

export default TabRow;