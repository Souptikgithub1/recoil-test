import { atom } from 'recoil';

const postStore = atom({
    key: 'posts',
    default: []
});

export { postStore }