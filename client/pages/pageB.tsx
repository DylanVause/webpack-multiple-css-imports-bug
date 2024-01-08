import { createRoot } from 'react-dom/client';
import Foo from '../components/Bar';
import Bar from '../components/Foo';

const root = createRoot(document.getElementById('app')!);

root.render(
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <p>Page B</p>
        <a href='/pages/pageA.html'>Visit Page A</a>
        <b>Styled components:</b>
        <Foo>Foo</Foo>
        <Bar>Bar</Bar>
    </div>
);
