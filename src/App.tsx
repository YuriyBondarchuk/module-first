import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./systems/user.json";
import data from "./systems/data.json";
import friendsList from "./systems/friends.json";
import transactionsList from "./systems/transactions.json";
import Statistics from "./components/Statistics/Statistics";
import TransactionsList from "./components/Transactions/Transactions-list/Transactions-list";
import FriendsList from "./components/Friends/Friends-list/Friends-list";

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
            <FriendsList friends={friendsList.friends} />
            <TransactionsList transaction={transactionsList.transactions}/>
        </div>
    );
}

export default App;
