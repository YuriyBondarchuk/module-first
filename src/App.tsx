import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./systems/user.json";
import data from "./systems/data.json";
import Statistics from "./components/Statistics/Statistics";

function App() {
    return (
        <div className="App">
            <Profile
                avatar={user.avatar}
                username={user.username}
                location={user.location}
                tag={user.tag}
                stats={user.stats}
            />
            <Statistics title="New Statisctic" stat={data.stats} />
        </div>
    );
}

export default App;
