type OscarProps = {
    children: React.ReactNode
}

// export const Oscar = (prop:OscarProps) => {
export const Oscar = ({children}:OscarProps) => {
    return <div>{children}</div>
}