// Simple unit tests for sum function

import { sum } from "../add"
import React from "react";
import { createRoot } from "react-dom/client";
// import { screen } from "@testing-library/dom";
// import { render, screen } from "@testing-library/react";
// import MainHeader from "../components/mainheader/MainHeader";

// unit sum test
it('check sum', () => {
    expect(sum(2, 3)).toEqual(5);
})

// unit test for apis createRoot
it('check createRoot', () => {
    const div = document.createElement('div');
    createRoot(div).render(<h1>Hello test</h1>)
})



// it('verify-header', () => {
//      const div = document.createElement('div');
//     createRoot(div).render(<MainHeader />)
//     // expect(screen.getByText('FAVYSCENTS')).toBeInDocument()
// })