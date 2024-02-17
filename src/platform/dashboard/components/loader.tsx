import { CircularProgress } from "@mui/material"

export const Loader = () => {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        }}>
            <CircularProgress />
        </div>
    )
}