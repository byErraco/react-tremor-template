import { Button, Card, Text } from "@tremor/react";

function App() {
  return (
    <main className="min-h-screen justify-center items-center flex ">
      <Card className="max-w-xs mx-auto">
        <Text>Hi from tremor</Text>
        <Button size="xs">Read more</Button>
      </Card>
    </main>
  );
}

export default App;
