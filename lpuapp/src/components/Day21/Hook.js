import React, { useState } from 'react';
import UseContextExample from './hooks/UseContextExample';
import UseMemoExample from './hooks/UseMemoExample';

function Hook() {
    const [selectedHook, setSelectedHook] = useState('useContext');

    const renderSelectedHook = () => {
        switch(selectedHook) {
            case 'useContext' :
                return <UseContextExample />;
            case 'useMemo' :
                return <UseMemoExample />;
            default :
                break;
        }
    }
  return (
    <div>
        <h2>Learn about React Hooks</h2>
        <label>Select Your Hook</label>
        <select id='hook-selector' value={selectedHook} onChange={(e) => setSelectedHook(e.target.value)}>
            <option value="useContext">Learn useContext</option>
            <option value="useMemo">Learn useMemo</option>
        </select>
        <hr />
        {renderSelectedHook()}
        <hr />
    </div>
  )
}

export default Hook;
