import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import button from '../../../assets/covers/count_button.png'

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowHeight: 640
    },
    isSnippet: false,
    cover: button
});
