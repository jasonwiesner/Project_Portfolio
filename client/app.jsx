import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Skew1 from './components/skew1.jsx';
import Skew2 from './components/skew2.jsx';
import Skew3 from './components/skew3.jsx';
import Skew4 from './components/skew4.jsx';
import Skew5 from './components/skew5.jsx';
import Module from './components/module.jsx';

const names = {
    'button-card1': 'reset',
    'button-card2': 'cryptoCurrencyChartingTool',
    'button-card3': 'roomShare2.0',
    'button-card4': 'theSuccessFactory'
};

const sources = {
    'reset': 'https://github.com/jasonwiesner/meditation_app_reset',
    'theSuccessFactory': 'https://github.com/jasonwiesner/TheSuccessFactory',
    'cryptoCurrencyChartingTool': 'https://github.com/jasonwiesner/BCC',
    'roomShare2.0': 'https://github.com/jasonwiesner/roomshare_2.0'
}

function App() {

    const [showModuleBool, setShowModuleBool] = useState(false);
    const [currentProject, setCurrentProject] = useState({name:'reset', source:'https://github.com/bettergrammer/rpt19-mvp-starter'});

    const showModule = (e) => {
        let id = e.target.id;
        let name = names[id];
        let source = sources[name];

        let project = {
            name,
            source
        };
        setShowModuleBool(true);
        setCurrentProject(project);
    };

    const removeModule = (e) => {
        setShowModuleBool(false);
    }

    return (
        <div className="AppContainer">
            <Skew1 />
            <Skew2 />
            <Skew3 />
            <Skew4 showModule={showModule}/>
            {showModuleBool ? <Module project={currentProject} removeModule={removeModule}/> : null}
            <Skew5 />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('app'));