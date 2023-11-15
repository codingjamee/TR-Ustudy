import { useRef } from "react";

import Button from "./UI/Button.tsx";
import Form, { FormHandle } from "./UI/Form.tsx";
import Input from "./UI/Input.tsx";
import { useTimersContext } from "../store/timers-context.tsx";

export default function AddTimer() {
  const form = useRef<FormHandle>(null);
  const timersCtx = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    console.log(extractedData);
    timersCtx.addTimer({
      name: extractedData.name,
      duration: extractedData.duration.toString(),
    });
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" name="name" id="name" />
      <Input type="number" label="duration" name="duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}
