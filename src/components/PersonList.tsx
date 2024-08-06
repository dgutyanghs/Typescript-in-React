import { Name } from './Person.type'

type PersonListProps = {
    names: Name[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2>
                        {name.first} {name.last}
                    </h2>
                )
            })}
        </div>
        // <div>
        //     <h2>Bruce Wayne</h2>
        //     <h2>Clark Kent</h2>
        //     <h2>Princess Diana</h2>
        // </div>
    )
}