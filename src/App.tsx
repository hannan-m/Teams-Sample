import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Engagement from "./pages/Engagement";
import {NavBasicExample} from "./components/Nav";
import * as msTeams from '@microsoft/teams-js';

export default class App extends React.Component {

    constructor(props: {} | Readonly<{}>) {
        super(props);

        msTeams.initialize();
        msTeams.settings.registerOnSaveHandler(saveEvent => {
            msTeams.settings.setSettings({
                contentUrl: window.location.origin,
                entityId: window.location.origin
            });

            saveEvent.notifySuccess();
        });
        msTeams.settings.setValidityState(true);
    }

    render() {
        return (

            <div>
                <div className='container-fluid'>
                    <BrowserRouter>
                        <div className="row">
                            <div className={'col-md-1'}>
                                <NavBasicExample/>
                            </div>

                            <div className="col-md-11 mt-2">

                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/engagement" element={<Engagement/>}/>
                                </Routes>


                            </div>
                        </div>
                    </BrowserRouter>
                </div>
            </div>

        );
    }
}
