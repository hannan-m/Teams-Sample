import React from "react";
import {DefaultButton} from "@fluentui/react";
import * as msTeams from '@microsoft/teams-js';

function Home() {

    msTeams.initialize();

    function openDeeplinkUrl() {
        console.log('clicked');
        let url = "https://teams.microsoft.com/l/stage/" + '8f156004-d68c-430f-b5e7-89fd48754484' + "/0?context={\"contentUrl\":\"" + 'https://275c-58-65-145-102.ap.ngrok.io/engagement' + "\",\"websiteUrl\":\"" + 'https://275c-58-65-145-102.ap.ngrok.io/engagement' +"\",\"name\":\"DemoStageView\"}";
        msTeams.executeDeepLink(url)
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <div className="card">
                    <div className="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card">

                    <div className="card-body">
                        <h5 className="card-title">Understanding Powered Enterprise</h5>
                        <p className="card-text">
                            <b>Powered Enterprise</b> is an outcome driven business information solution.
                            <b>Powered Enterprise</b> is an outcome driven business information solution.
                            <b>Powered Enterprise</b> is an outcome driven business information solution.
                            <b>Powered Enterprise</b> is an outcome driven business information solution.
                        </p>
                        <br/>
                        <DefaultButton text="Open a URL via Deep link" onClick={openDeeplinkUrl} allowDisabledFocus/>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="card">
                    <div className="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
