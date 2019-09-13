import React from 'react';
import './App.css';
import {Responsive, WidthProvider} from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);
const GRID_BREAKPOINTS = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
const GRID_COLS = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2};

const AppGrid: React.FC = (props) => {
    return (
        <div className="App">
            <ResponsiveGridLayout
                breakpoints={GRID_BREAKPOINTS}
                cols={GRID_COLS}>
                {props.children}
            </ResponsiveGridLayout>
        </div>
    )
};

const App: React.FC = () => {
    return (
        <AppGrid>
            <div key="1">1</div>
            <div key="2">2</div>
            <div key="3">3</div>
        </AppGrid>
    );
};

export default App;
