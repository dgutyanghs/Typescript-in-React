import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { Text } from './components/polymorphic/Text'

function App() {
  // const [ivalue, setIvalue] = useState("a")
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      {/* <Greet name={"Donnie"} messageCount={20} isLogedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Jack" isLogedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <hr />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <hr />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <hr />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <hr />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <hr />
      <Private isLoggedIn={true} component={Profile} />
      <hr />
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />

      <List
        items={[
          { name: "jack", gender: "male" },
          { name: "lucy", gender: "female" },
          { name: "lily", gender: "female" },
        ]}
        onClick={(item) => console.log(item)}
      />
      <hr /> */}
      {/* <RandomNumber value={0} isNegative />
      <Toast position="center" />
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton> */}
      <Text as='h2'  size="lg">Heading</Text>
      <Text as='p'  size="md">Paragrah</Text>
      <Text as='label' htmlFor='someId' size="sm" color="secondary">Label</Text>
    </div>
  );
}

export default App;
