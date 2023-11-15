import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const testRef = useRef(null);
  const customForm = useRef<FormHandle>(null);
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  };
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your name" type="text" />
        <Input id="ref_test" label="ref_test" ref={testRef} />
        <p>
          <Button>A Button</Button>
        </p>
      </Form>
      {/*
      <p>
        <Button href="https://google.com">An anchor</Button>
      </p> */}
      {/* <p>
        <Container
          as={Button}
          onClick={() => {
            console.log("clicked!");
          }}
        >
          Click Me
        </Container>
      </p> */}
    </main>
  );
}

export default App;
