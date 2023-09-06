import ChatWindow from './components/ChatWindow';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Chat App</h1>

      <p>
        This is a simple chat application. Open two browser windows and send
        messages between them.
        For deleting a message just double click it.
        If messages are not reloading correctly, reload page.
      </p>

      <ChatWindow sender="Person A" receiver="Person B" />
      <ChatWindow sender="Person B" receiver="Person A" />
    </div>
  );
};

export default App;
