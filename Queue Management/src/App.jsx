import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";
function App() {
  const [queue, setQueue] = useState([]);

  const addCustomer = (customer) => {
    setQueue((prev) => [
      ...prev,
      { ...customer, id: Date.now(), status: "waiting" },
    ]);
  };

  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) => {
        return customer.id === id
          ? { ...customer, status: newStatus }
          : customer;
      }),
    );
  };

  const removeCustomer = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <>
      <div className="app">
        <header>
          <h1>Queue Management Application</h1>
          <p>Manage your queue system efficiently</p>
        </header>
        <main>
          <QueueForm onAdd={addCustomer} />
          <QueueDisplay
            queue={queue}
            onUpdate={updateStatus}
            onRemove={removeCustomer}
          />
        </main>
      </div>
    </>
  );
}

export default App;
