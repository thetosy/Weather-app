import React from "react";
import Form from "./form";
import Logo from "./logo";


function App(){
    return (
        <section className="homepage">
            <div className="container-fluid">
                <Logo/>
                <Form/>
            </div>
        </section>
    );
}

export default App;
