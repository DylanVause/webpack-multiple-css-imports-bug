import { createRoot } from 'react-dom/client';
import Foo from '../components/Bar';
import Bar from '../components/Foo'; 

const root = createRoot(document.getElementById('app')!);

root.render(
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <p>Page A</p>
        <a href='/pages/pageB.html'>Visit Page B</a>
        <b>Styled components:</b>
        <Foo>Foo</Foo>
        <Bar>Bar</Bar>
    </div>
);
