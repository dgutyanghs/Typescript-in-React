type HeadingProps = {
    children: string
}

export const Heading = (prop: HeadingProps) => {
    return (
        // <h2> Placeholder text</h2>
        <h2>{prop.children}</h2>
    )
}