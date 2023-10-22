import { useState } from 'react';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <button onClick={() => setCount((count) => count + 1)}>Count: {count}</button>
        </div>
    );
}

export default App;
