// Simple unit tests for sum function

import { sum } from "../add"
import { createRoot } from "react-dom/client";

// unit sum test
it('check sum', () => {
    expect(sum(2, 3)).toEqual(5);
})

// unit test for apis createRoot
it('check createRoot', () => {
    const div = document.createElement('div');
    createRoot(div).render(<h1>Hello test</h1>)
})